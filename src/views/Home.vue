<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <h1>StarKraft Miner</h1>
        <BigMineral />
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