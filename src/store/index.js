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
    }

    // updateclickUpgradesQuantity(state, { upgrade }) {
    //   if (upgrade.type == "click") {
    //     state.inventory.clickUpgrades.push(upgrade);
    //   }
    // }
  },
  actions: {
    collect({ dispatch, commit, state }) {
      state.mineralCount++;
      state.totalCount++;

      // This works!
      state.inventory.clickUpgrades.forEach(u => {
        state.mineralCount = state.mineralCount + u.multiplier;
      });
    },
    buyUpgrade({ dispatch, commit, state }, upgrade) {
      // This is gross...
      if (upgrade.type == "click") {
        let upgradeToBuy = state.upgrades.clickUpgrades.find(
          u => u.name == upgrade.name
        );
        let boughtUpgrade = state.inventory.clickUpgrades.find(
          u => u.name == upgrade.name
        );

        // Handle updating inventory...
        if (boughtUpgrade) {
          boughtUpgrade.quantity++;
          commit("updateQuantity", { clickUpgrades: boughtUpgrade });
        } else {
          commit("buyUpgrade", upgradeToBuy);
        }
        console.log(state.inventory);
        // Handle buying inventory
      }
    }
    // TODO Update upgrade after buying. Increase price and multiplier
    // updateUpgrade(upgrade) {
    //   upgrade.multiplier = upgrade.multiplier * upgrade.quantity;
    // }
  },
  modules: {}
});
