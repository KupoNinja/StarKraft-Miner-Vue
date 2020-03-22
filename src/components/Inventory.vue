<template>
  <div class="d-flex border border-dark rounded text-light">
    <h2 class>Inventory</h2>
    <div class="d-flex" v-for="upgrade in inventory.upgrades" :key="upgrade.id">
      <h5 class="mr-3">| {{ upgrade.name }}: {{ upgrade.quantity }}</h5>
      <p class="mr-3">+{{ upgrade.multiplier }} per click</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inventory",
  computed: {
    inventory() {
      return this.$store.state.inventory;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>