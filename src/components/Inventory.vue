<template>
  <div class="border border-dark rounded text-light">
    <h2 class="md-auto">Inventory</h2>
    <!-- Unsure what I want to bring in -->
    <!-- <div v-for="item in inventory" :key="upgrade.id"></div> -->
    <p></p>
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