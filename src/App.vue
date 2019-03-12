<template>
  <div id="app">
    <top></top>
    <sidebar></sidebar>
  </div>
</template>

<script>

import top from "./components/common/top.vue"
import sidebar from "./components/common/sidebar.vue"

export default {
  name: 'app',
  components: {
    top,
    sidebar,
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html {
  width: 1400px;
  height: 920px;
  border: 1px solid red;
  
  margin-left: 100px;
  margin-top: 100px;
}


</style>
