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
      },
      {
        name: "Probe",
        price: 120,
        quantity: 0,
        multiplier: 20
      }
    ],
    inventory: []
  },
  mutations: {},
  actions: {
    collect({ dispatch, commit, state }) {
      state.mineralCount++;
    }
  },
  modules: {}
});
