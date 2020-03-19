<template>
  <div>
    <img src="../assets/SC-Big-Mineral-Dark.png" height="300" alt @click="collect" />
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

<style>
</style>