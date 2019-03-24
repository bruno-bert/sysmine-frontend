import Vue from 'vue'
import Vuex from 'vuex'

/* store modules */
import base from './base'
import phases from './phases'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base,
    phases
  }
})