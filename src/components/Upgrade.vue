<template>
  <div>
    <button
      :disabled="mineralCount < upgrade.price"
      class="btn btn-block text-light"
      @click="buyUpgrade(upgrade)"
    >
      <h4 v-if="upgrade.type == 'click'">Click Upgrade:</h4>
      <h4 v-if="upgrade.type == 'idle'">Idle Upgrade:</h4>
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
  computed: {
    mineralCount() {
      return this.$store.state.mineralCount;
    }
  },
  methods: {
    buyUpgrade(upgrade) {
      // Beginning or end of method?
      if (upgrade.type == "idle") {
        this.startIdleMiner();
      }
      let newUpgrade = {
        name: upgrade.name,
        type: upgrade.type
      };
      this.$store.dispatch("buyUpgrade", newUpgrade);
    },
    startIdleMiner() {
      setInterval(this.idleMine, 3000);
    },
    idleMine() {
      this.$store.dispatch("idleMine");
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