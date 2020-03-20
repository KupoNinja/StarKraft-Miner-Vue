import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mineralCount: 0,
    idleCount: 0,
    totalMultiplier: 0
  },
  mutations: {},
  actions: {
    collect({ dispatch, commit, state }) {
      state.mineralCount++;
    }
  },
  modules: {}
});
