<template>
  <div class="view overlay zoom">
    <img
      id="mineral"
      class="img-fluid rounded-circle shadow btn btn-info"
      src="../assets/SC-Big-Mineral-Dark.png"
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
      console.log("Collecting...");
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
