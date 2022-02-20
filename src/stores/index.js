import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import AuthUser from './modules/AuthUser.js';
import StockCode from './modules/StockCode.js';

export default new Vuex.Store({
  modules: {
    AuthUser,
    StockCode
  },
  strict: true
});