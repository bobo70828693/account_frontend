import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../stores/index";
import jwtToken from '../helpers/jwt';

Vue.use(VueRouter)

const router =  new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/',
      name: 'master',
      component: () => import('@/views/Master.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'defaultPage',
          component: require('@/views/Dashboard.vue').default,
        }
      ]
    }
  ]
})

router.beforeEach(async function(to, from, next) {
    if (to.path === '/login') {
      const userToken = jwtToken.getToken()

      await Store.dispatch('AuthUser/checkAuth')
      .then(() => {
        if (userToken) {
          next('/dashboard');
        }
      })
      .catch(() => {
        return next();
      })
    } else {
      await Store.dispatch('AuthUser/checkAuth')
      .then(() => {})
      .catch(() => {
        return next({
          name: 'login',
        });
      })
      // next();
    }

    // init Vuex
    await Store.dispatch('StockCode/setStockCodeList')
    next();
})


export default router;