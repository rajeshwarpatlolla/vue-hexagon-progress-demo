<template>
  <div id="app">
    <h1>VueHexagon Demo</h1>
    <div class="vue-hexagon-example" v-for="(hexagon, index) of hexagons" :key="index">
      <VueHexagon :options="hexagon" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      hexagons: [
        { width: 300, height: 300, primaryColor: '#E27D60', secondaryColor: '#aaa', labelColor: '#000', label: '50%', value: 50, className: 'custom-class-1', thickness: 90, fontSize: 110 },
        { width: 200, height: 200, primaryColor: '#659DBD', secondaryColor: '#ccc', labelColor: '#000', label: '70%', value: 70, className: 'custom-class-2', thickness: 40, fontSize: 120 },
        { width: 100, height: 100, primaryColor: '#5CDB95', secondaryColor: '#bbb', labelColor: '#000', label: '10%', value: 10, className: 'custom-class-3', thickness: 80, fontSize: 150 },
        { width: 400, height: 400, primaryColor: '#41B3A3', secondaryColor: '#ccc', labelColor: '#000', label: '30%', value: 30, className: 'custom-class-4', thickness: 80, fontSize: 90 },
        { width: 200, height: 200, primaryColor: '#5680E9', secondaryColor: '#ddd', labelColor: '#000', label: '90%', value: 90, className: 'custom-class-5', thickness: 30, fontSize: 110 },
        { width: 300, height: 300, primaryColor: '#D83F87', secondaryColor: '#aaa', labelColor: '#000', label: '80%', value: 80, className: 'custom-class-6', thickness: 80, fontSize: 120 },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.vue-hexagon-example {
  display: inline-block;
}
</style>
