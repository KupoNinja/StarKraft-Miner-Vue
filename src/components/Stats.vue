<template>
  <div class="border border-light rounded text-light">
    <h3>Stats</h3>
    <hr class="text-light" />
    <h5>Minerals (mined per second): {{ idleCount }}</h5>
    <h5>Total Minerals Mined: {{ totalCount }}</h5>
  </div>
</template>

<script>
export default {
  name: "Stats",
  computed: {
    idleCount() {
      return this.$store.state.idleCount;
    },
    totalCount() {
      return this.$store.state.totalCount;
    }
  }
};
</script>

<style lang="scss">
.border {
  border-width: 5px !important;
}
hr {
  border: 1px solid white;
}
</style>
