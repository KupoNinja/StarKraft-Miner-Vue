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
      // This is gross too...

      // let upgradeToUpdate = state.inventory.clickUpgrades.find(
      //   u => u.id == upgradeId
      // );
      debugger;
      state.mineralCount -= upgrade.price;
      upgrade.quantity++;
      upgrade.multiplier = upgrade.multiplier * upgrade.quantity;
      upgrade.price = Math.ceil((upgrade.price + 25) * 1.1);
    }
  },
  actions: {
    collect({ dispatch, commit, state }) {
      state.mineralCount++;

      // This is wrong. Need to add multipliers for totalCount
      state.totalCount++;

      if (state.inventory.upgrades.length > 0) {
        state.inventory.upgrades.forEach(u => {
          state.mineralCount += u.multiplier;
          state.totalCount += u.multiplier;
        });
      }
    },
    buyUpgrade({ dispatch, commit, state }, upgrade) {
      let mineralCount = state.mineralCount;

      let boughtUpgrade = state.inventory.upgrades.find(
        u => u.name == upgrade.name
      );
      let upgradeToBuy = state.upgrades.find(u => u.name == upgrade.name);

      if (mineralCount < upgrade.price) {
        // Play fail sound
        console.log("We require more minerals");
        return;
      }

      if (boughtUpgrade) {
        commit("updateUpgrade", boughtUpgrade);
      } else {
        commit("updateUpgrade", upgradeToBuy);
        commit("buyUpgrade", upgradeToBuy);
      }
      console.log(state.inventory);
    }
  },
  modules: {}
});
