import Vue from 'vue'
import Vuex from 'vuex'
import { setStorage } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    snackbar: false,
    snackbarMsg: ''
  },
  mutations: {
    setToken(state, payload){
      state.token = payload
    },
    setSnackbar(state, { status, message }){
      state.snackbar = status
      state.snackbarMsg = message
    }
  },
  actions: {
    setToken({ commit }, payload){
      commit('setToken', payload)
      setStorage('token', payload)
    },
    setSnackbar({ commit }, payload){
      commit('setSnackbar', payload)
    }
  },
  getters: {
    getToken: state => state.token,
    getSnackbar: state => state.snackbar,
    getSnackbarMsg: state => state.snackbarMsg
  }
})