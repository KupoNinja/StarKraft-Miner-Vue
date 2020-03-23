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
        id: 1,
        name: "SCV",
        price: 25,
        multiplier: 1,
        quantity: 0,
        type: "click"
      },
      {
        id: 2,
        name: "Probe",
        price: 120,
        multiplier: 20,
        quantity: 0,
        type: "click"
      },
      {
        id: 3,
        name: "Reaver",
        price: 450,
        multiplier: 50,
        quantity: 0,
        type: "idle"
      },
      {
        id: 4,
        name: "Ultralisk",
        price: 1000,
        multiplier: 100,
        quantity: 0,
        type: "idle"
      }
    ],
    inventory: {
      upgrades: []
    }
  },
  mutations: {
    buyUpgrade(state, upgrade) {
      state.inventory.upgrades.push(upgrade);
    },
    updateUpgrade(state, upgrade) {
      state.mineralCount -= upgrade.price;
      upgrade.quantity++;
      upgrade.multiplier = upgrade.multiplier * upgrade.quantity;
      upgrade.price = Math.ceil((upgrade.price + 25) * 1.1);
    }
  },
  actions: {
    collect({ dispatch, commit, state }) {
      state.mineralCount++;
      state.totalCount++;

      if (state.inventory.upgrades.length > 0) {
        state.inventory.upgrades.forEach(u => {
          if (u.type == "click") {
            state.mineralCount += u.multiplier;
            state.totalCount += u.multiplier;
          }
        });
      }
    },
    buyUpgrade({ dispatch, commit, state }, upgrade) {
      let mineralCount = state.mineralCount;
      let upgradeToBuy = state.upgrades.find(u => u.name == upgrade.name);

      if (mineralCount < upgradeToBuy.price) {
        // Play fail sound
        console.log("We require more minerals");
        return;
      }

      let boughtUpgrade = state.inventory.upgrades.find(
        u => u.name == upgrade.name
      );

      if (boughtUpgrade) {
        commit("updateUpgrade", boughtUpgrade);
      } else {
        commit("updateUpgrade", upgradeToBuy);
        commit("buyUpgrade", upgradeToBuy);
      }
      console.log(state.inventory);
    },
    idleCollect({ dispatch, commit, state }) {
      // Collects way too much
      state.inventory.upgrades.forEach(u => {
        if (u.type == "idle") {
          state.mineralCount += u.multiplier;
          state.idleCount = u.multiplier; // This won't work
          state.totalCount += u.multiplier;
        }
      });
    }
  },
  modules: {}
});
