<template>
  <div class="view overlay zoom">
    <h2 class="text-light">{{ mineralCount }}</h2>
    <img
      id="mineral"
      class="img-fluid rounded-circle shadow btn btn-info"
      src="../assets/img/SC-Big-Mineral-Dark.png"
      height="300"
      alt="Big Mineral"
      @click="collect"
    />
  </div>
</template>

<script>
export default {
  name: "BigMineral",
  methods: {
    collect() {
      this.$store.dispatch("collect");
    }
  },
  computed: {
    mineralCount() {
      return this.$store.state.mineralCount;
    }
  }
};
</script>

<style lang="scss" scoped>
#mineral {
  user-select: none;
  width: 20em;
}
</style>
