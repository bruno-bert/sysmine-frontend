export default {
  namespaced: true,

  state: {
    token: 'bruno.bert.jj@gmail.com'
  },
  mutations: {
    SET_TOKEN: (state, token) => state.token = token
  },
  actions: {
    setToken: ({ commit, state }, token) => commit('SET_TOKEN', token)
  },
  getters: {
    getToken: state => state.token
  }

}
