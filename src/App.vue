<template>
  <div id="app">
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import top from "./components/common/top.vue";
import sidebar from "./components/common/sidebar.vue";
// import playBarLong from "./views/playBarLong";

export default {
  name: "app",
  components: {
    top,
    sidebar,
    // playBarLong
  }
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
div{margin:0;border:0;padding:0;}

#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html {
  /* width: 1400px;
  height: 920px; */
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  /* margin-left: 100px;
  margin-top: 100px; */
}
#playBarLong {
  position: absolute;
  bottom: 0px;
}
</style>
