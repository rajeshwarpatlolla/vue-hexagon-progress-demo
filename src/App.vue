<template>
  <div id="app">
    <div class="text-center">
      <h1>Vue Hexagon Progress Demo</h1>
      <div class="vue-hexagon-example" v-for="(hexagon, index) of hexagons" :key="index">
        <VueHexagonProgress :options="hexagon" />
      </div>
    </div>
    <hr />
    <h1 class="text-center">Interactive Demo</h1>
    <div class="width_100p">
      <form class="form">
        <div>
          <label for="width">Width</label>
          <input type="number" v-model="options.width" />
        </div>
        <div>
          <label for="height">height</label>
          <input type="number" v-model="options.height" />
        </div>
        <div>
          <label for="primaryColor">primaryColor</label>
          <input type="text" v-model="options.primaryColor" />
        </div>
        <div>
          <label for="secondaryColor">secondaryColor</label>
          <input type="text" v-model="options.secondaryColor" />
        </div>
        <div>
          <label for="labelColor">labelColor</label>
          <input type="text" v-model="options.labelColor" />
        </div>
        <div>
          <label for="label">label</label>
          <input type="text" v-model="options.label" />
        </div>
        <div>
          <label for="value">value</label>
          <input type="number" v-model="options.value" />
        </div>
        <div>
          <label for="className">className</label>
          <input type="text" v-model="options.className" />
        </div>
        <div>
          <label for="thickness">thickness</label>
          <input type="number" v-model="options.thickness" />
        </div>
        <div>
          <label for="fontSize">fontSize</label>
          <input type="number" v-model="options.fontSize" />
        </div>
      </form>
      <div class="custom-demo">
        <VueHexagonProgress :options="options" />
      </div>
    </div>
    <hr />
    <h1 class="text-center">Live Progress Demo</h1>
    <div class="text-center" v-if="liveDemoOptions">
      <VueHexagonProgress :options="liveDemoOptions" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      liveDemoOptions: null,
      options: null,
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
  mounted() {
    this.options = JSON.parse(JSON.stringify(this.hexagons[3]));
    this.options.className = 'interactive-demo';
    this.liveDemoOptions = JSON.parse(JSON.stringify(this.hexagons[0]));
    this.liveDemoOptions.className = 'live-demo';
    setInterval(() => {
      this.liveDemoOptions.value = this.liveDemoOptions.value >= 100 ? 0 : this.liveDemoOptions.value;
      this.liveDemoOptions.value += 10;
      this.liveDemoOptions.label = `${this.liveDemoOptions.value}%`;
    }, 1000);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.vue-hexagon-example {
  display: inline-block;
}
.form,
.custom-demo {
  display: inline-block;
  width: 50%;
}
.width_100p {
  width: 100%;
  display: flex;
}
.text-center {
  text-align: center;
}
.form {
  text-align: right;
  padding-right: 32px;
}
.custom-demo {
  padding-top: 32px;
  padding-left: 32px;
  text-align: left;
}
form label {
  text-align: right;
  display: inline-block;
  width: 50%;
  padding-right: 32px;
}
form input {
  width: 25%;
  padding: 8px;
  margin: 4px 0;
  border: 1px solid #ccc;
  border-radius: 2px;
}
</style>
