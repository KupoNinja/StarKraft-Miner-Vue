<template>
  <div>
    <button
      :disabled="mineralCount < upgrade.price"
      class="btn btn-block text-light border"
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
      <p v-if="upgrade.type == 'click'">Multiplier: +{{ upgradeMultiplier }} per click</p>
      <p v-if="upgrade.type == 'idle'">Multiplier: +{{ upgradeMultiplier }} per 3 seconds</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "Upgrade",
  data() {
    return {
      interval: 0
    };
  },
  props: {
    upgrade: { type: Object, required: true }
  },
  computed: {
    mineralCount() {
      return this.$store.state.mineralCount;
    },
    upgradeMultiplier () {
      if (this.upgrade.quantity <= 1 ) {
        return this.upgrade.multiplier;
      }

      return this.upgrade.multiplier * this.upgrade.quantity
    }
  },
  methods: {
    buyUpgrade(upgrade) {
      if (upgrade.type == "idle") {
        // NOTE Works if buying one specific idle upgrade.
        // Pretty sure 'this' is causing the issue
        clearInterval(this.interval);
        this.startIdleCollect();
      }
      let newUpgrade = {
        name: upgrade.name,
        type: upgrade.type
      };
      this.$store.dispatch("buyUpgrade", newUpgrade);
    },
    startIdleCollect() {
      this.interval = setInterval(this.idleCollect, 3000);
    },
    idleCollect() {
      this.$store.dispatch("idleCollect");
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