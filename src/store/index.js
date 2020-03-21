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
          multiplier: 1,
          quantity: 0,
          type: "click"
        },
        {
          name: "Probe",
          price: 120,
          multiplier: 20,
          quantity: 0,
          type: "click"
        }
      ],
      idleUpgrades: [
        {
          name: "Reaver",
          price: 450,
          multiplier: 50,
          quantity: 0,
          type: "idle"
        },
        {
          name: "Ultralisk",
          price: 1000,
          multiplier: 100,
          quantity: 0,
          type: "idle"
        }
      ]
    },
    inventory: {
      clickUpgrades: [],
      idleUpgrades: []
    }
  },
  mutations: {
    buyUpgrade(state, upgrade) {
      if (upgrade.type == "click") {
        state.inventory.clickUpgrades.push(upgrade);
      } else {
        state.inventory.idleUpgrades.push(upgrade);
      }
    },
    // NOTE This isn't working
    updateUpgrade(state, upgrade) {
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

      // This works!
      state.inventory.clickUpgrades.forEach(u => {
        state.mineralCount = state.mineralCount + u.multiplier;
      });
    },
    buyUpgrade({ dispatch, commit, state }, upgrade) {
      let mineralCount = state.mineralCount;

      // This is gross...
      if (upgrade.type == "click") {
        let boughtUpgrade = state.inventory.clickUpgrades.find(
          u => u.name == upgrade.name
        );
        let upgradeToBuy = state.upgrades.clickUpgrades.find(
          u => u.name == upgrade.name
        );

        if (mineralCount < upgradeToBuy.price) {
          // Play fail sound
          console.log("We require more minerals");
          return;
        }
        mineralCount -= upgradeToBuy.price;

        if (boughtUpgrade) {
          commit("updateUpgrade", { clickUpgrades: boughtUpgrade });
        } else {
          commit("updateUpgrade", { clickUpgrades: upgradeToBuy });
          commit("buyUpgrade", upgradeToBuy);
        }
      }
      console.log(state.inventory);
    }
  },
  modules: {}
});
