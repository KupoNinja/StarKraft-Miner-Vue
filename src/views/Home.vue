<template>
  <div class="home">
    <div class="container-fluid">
      <header class="row h-25 bg-dark text-light">
        <div id="header-title" class="col-md-3 text-center m-auto">
          <h1>StarKraft Miner</h1>
        </div>
      </header>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4 text-center">
          <BigMineral />
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BigMineral from "../components/BigMineral";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    BigMineral
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  background-image: url("https://blogs.esa.int/space19plus/files/2019/03/nebula.jpg");
  background-size: contain;
}
</style>
