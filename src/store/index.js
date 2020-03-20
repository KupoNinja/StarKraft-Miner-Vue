import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mineralCount: 0,
    idleCount: 0,
    totalCount: 0,
    upgrades: [
      {
        name: "SCV",
        price: 25,
        quantity: 0,
        multiplier: 1
      }
    ]
  },
  mutations: {},
  actions: {
    collect({ dispatch, commit, state }) {
      state.mineralCount++;
    }
  },
  modules: {}
});
