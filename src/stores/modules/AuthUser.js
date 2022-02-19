import { apiLogout, apiUserSelf } from '@/service/api.js'
import axios from 'axios';
import jwtToken from '@/helpers/jwt'

export default {
  namespaced: true,

  state: {
    authenticated: false,
    userData: {},
    permission: [],
    token: '',
    serverStatus: 'local',
  },

  getters: {
    getUserToken(state) {
      return state.token;
    }
  },

  mutations: {
    SET_AUTH_USER(state, payload) {
      state.authenticated = true;
      state.token = payload.token
    }
  },

  actions: {
    setAuthUser({commit}, userToken) {
      commit('SET_AUTH_USER', {
        token: userToken
      })
    },

    loginRequest({dispatch}, formData) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/api/login`, formData)
          .then((response) => {
            let userToken = response.data.data.token
            jwtToken.setToken(userToken);
            dispatch('setAuthUser', userToken).then((response) => {
              resolve(response);
            });
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    logout({dispatch}) {
      return new Promise((resolve, reject) => {
        apiLogout()
        .then(() => {
          console.log('remove')
          jwtToken.removeToken();
          dispatch('setAuthUser', '').then((response) => {
            resolve(response);
          });
        })
        .catch((error) => {
          reject(error);
        });
      })
    },

    checkAuth({commit}) {
      return new Promise((resolve, reject) => {
        apiUserSelf()
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          commit('SET_AUTH_USER', {
            token: null
          })
          jwtToken.setToken();
          reject(error)
        })
      })
    }
  }
}