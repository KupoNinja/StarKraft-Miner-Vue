import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mineralCount: 0,
    idleCount: 0,
    totalCount: 0,
    upgrades: {
      clickUpgrades: [
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
      idleUpgrades: [
        {
          name: "Reaver",
          price: 450,
          quantity: 0,
          multiplier: 50
        },
        {
          name: "Ultralisk",
          price: 1000,
          quantity: 0,
          multiplier: 100
        }
      ]
    },
    inventory: {
      clickUpgrades: [],
      idleUpgrades: []
    }
  },
  mutations: {},
  actions: {
    collect({ dispatch, commit, state }) {
      state.mineralCount++;
    }
  },
  modules: {}
});
