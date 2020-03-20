<template>
  <div class="border border-dark rounded text-light">
    <h2 class="md-auto">Inventory</h2>
    <!-- <div v-for="item in inventory"></div> -->
    <p></p>
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