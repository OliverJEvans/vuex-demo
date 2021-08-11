const state = {
  messages: []
}

const mutations = {
  ADD_MESSAGE(state, value) {
    state.messages.push(value);
  }
}

const actions = {
  addMessage({ commit }, message) {
    commit('ADD_MESSAGE', {
      text: message
    })
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
