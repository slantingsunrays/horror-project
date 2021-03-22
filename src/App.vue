<template>
<div id="app">
  <Text/>
</div>
</template>

<script>
import Text from './components/Text.vue'

export default {
  name: 'App',
  components: {
    Text
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
