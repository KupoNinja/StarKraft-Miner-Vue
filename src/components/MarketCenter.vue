<template>
  <div class="border border-light rounded text-light">
    <h3>MarketCenter</h3>
    <hr class="text-light" />
    <h4>Click Upgrades:</h4>
    <div v-for="upgrade in upgrades.clickUpgrades" :key="upgrade.name" col-sm-6>
      <Upgrade :upgrade="upgrade" />
    </div>
    <div v-for="upgrade in upgrades.idleUpgrades" :key="upgrade.name" col-sm-6>
      <Upgrade :upgrade="upgrade" />
    </div>
  </div>
</template>

<script>
import Upgrade from "./Upgrade";

export default {
  name: "MarketCenter",
  computed: {
    upgrades() {
      return this.$store.state.upgrades;
    }
  },
  components: {
    Upgrade
  }
};
</script>

<style lang="scss" scoped>
</style>