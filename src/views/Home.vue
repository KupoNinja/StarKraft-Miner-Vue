<template>
  <div class="home">
    <div class="container-fluid">
      <header class="row h-25 bg-dark text-light">
        <div id="header-title" class="col-md-4 text-center">
          <h1>StarKraft Miner</h1>
        </div>
        <div class="col-md-4">
          <Inventory />
        </div>
      </header>
      <div class="row">
        <div class="col-4">
          <Stats />
        </div>
        <div class="col-4 text-center">
          <BigMineral />
        </div>
        <div class="col-4">
          <MarketCenter />
        </div>
      </div>
      <div class="row"></div>
    </div>
  </div>
</template>

<script>
import BigMineral from "../components/BigMineral";
import Stats from "../components/Stats";
import MarketCenter from "../components/MarketCenter";
import Inventory from "../components/Inventory";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    BigMineral,
    Stats,
    MarketCenter,
    Inventory
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/img/SC-BC-BG.jpg");
  background-size: contain;
}
</style>
