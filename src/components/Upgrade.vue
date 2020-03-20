<template>
  <div>
    <button class="btn btn-block text-light" @click="buyUpgrade(upgrade)">
      <h5>{{ upgrade.name }}</h5>
      <img
        class="mineral-upgrade-img img-fluid"
        src="../assets/img/mineral-rss.jpg"
        alt="Tiny mineral icon"
      />
      <p>Price: {{ upgrade.price }}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "Upgrade",
  props: {
    upgrade: { type: Object, required: true }
  },
  methods: {
    buyUpgrade(upgrade) {
      let newUpgrade = {};
    }
  }
};
</script>

<style lang="scss" scoped>
.mineral-upgrade-img {
  height: 1.5rem;
  width: 1.5rem;
}
</style>