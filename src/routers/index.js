import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../stores/index"
import jwtToken from '../helpers/jwt'

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
  const isLogin = Store.state.AuthUser.token

  if (isLogin) {
    if (to.path === '/login') {
      next('/dashboard');
    } else {
      next();
    }
  } else if (jwtToken.getToken()) {
    Store.dispatch('AuthUser/setAuthUser', jwtToken.getToken())
      .then(() => {
        return next({
          name: 'login',
        });
      })
  } else {
    if (to.path !== '/login') {
      next('/login');
    } else {
      next();
    }
  }
})

export default router;