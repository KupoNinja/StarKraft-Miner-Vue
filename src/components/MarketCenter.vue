<template>
  <div class="border border-light rounded text-light">
    <h3>MarketCenter</h3>
    <hr class="text-light" />
    <div v-for="upgrade in upgrades" :key="upgrade.id" col-sm-6>
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