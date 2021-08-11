import Vue from 'vue'
import Vuex from 'vuex'
import bannerMessages from './modules/bannerMessages'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bannerMessages
  },
  strict: false
})
