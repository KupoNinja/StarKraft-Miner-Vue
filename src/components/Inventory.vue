<template>
  <div class="row border border-dark rounded text-light">
    <h2 class="col-2 md-auto">Inventory</h2>
    <div v-for="upgrade in inventory.upgrades" :key="upgrade.id">
      <h5 class="mr-3">{{ upgrade.name }}: {{ upgrade.quantity }} |</h5>
    </div>
  </div>
</template>

<script>
// import Upgrade from "./Upgrade";

export default {
  name: "Inventory",
  computed: {
    inventory() {
      return this.$store.state.inventory;
    }
  }
  //   components: {
  //     Upgrade
  //   }
};
</script>

<style lang="scss" scoped>
</style>