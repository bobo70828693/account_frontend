import { apiStockCodeList } from '@/service/api.js'

export default {
  namespaced: true,

  state: {
    stockCodes: []
  },

  getters: {
    getStockCodeList(state) {
      return state.stockCodes;
    }
  },

  mutations: {
    SET_STOCK_CODE_LIST(state, payload) {
      state.stockCodes = payload.stockCodeList
    }
  },

  actions: {
    setStockCodeList({ commit }) {
      return new Promise((resolve, reject) => {
        apiStockCodeList({})
          .then(response => {
            commit(
              'SET_STOCK_CODE_LIST',
              {
                stockCodeList: response.data.data
              })
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      })
    },
  }
}