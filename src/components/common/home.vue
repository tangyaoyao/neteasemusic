<template>
  <div id="home">
      <top></top>
     
      <sidebar></sidebar> 
      <div class="center"></div>
      
      <playBarLong id="playBarLong"></playBarLong>
  </div>
</template>

<script>
import top from "./top";
import sidebar from "./sidebar.vue";
import playBarLong from "../../views/playBarLong";

export default {
  name: "home",
  components: {
    top,
    sidebar,
    playBarLong
  }
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
div{margin:0;border:0;padding:0;}

#home {
  position: relative;
  width: 100%;
  height: 920px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#playBarLong {
  position: absolute;
  bottom: 0px;
}
.center {
  float: right;
  width: calc(100% - 199px);
  height: calc(100% - 98px);
  background: rgb(250, 250, 250);
  /* border: 1px solid black; */
  box-sizing: border-box;
}
</style>
