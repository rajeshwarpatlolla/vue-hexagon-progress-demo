<template>
  <div id="wrapper" class="hexagon-graph-container">
    <svg class="progress noselect" data-progress="55" x="0px" y="0px" viewBox="0 0 800 700" :style="{width:options.width+'px', height: options.height+'px'}" :class="options.className">
      <path class="track" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z" style="stroke: #aaa"></path>
      <path class="fill" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
      <text class="title" x="48%" y="40%">{{this.options.title}}</text>
      <text class="value" x="50%" y="65%">{{this.options.label}}</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'hexagon-graph',
  data() {
    return {};
  },
  props: ['options'],
  mounted() {
    this.renderHexagonGraph();
  },
  methods: {
    renderHexagonGraph() {
      const max = 2160;
      this.getGraphCall(document.querySelectorAll(`.${this.options.className}`), (index, value) => {
        // eslint-disable-next-line
        value.querySelector(`.${this.options.className} .fill`).setAttribute('style', `stroke-dashoffset: ${(100 - this.options.value) / 100 * max}; stroke: ${this.options.trackColor}`);
        value.querySelector(`.${this.options.className} .value`).setAttribute('style', `fill: ${this.options.valueColor}`);
      });
    },
    getGraphCall(array, callback, scope) {
      // eslint-disable-next-line
      for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
  position: relative;
  top: 0px;
  // width: 404px;
}
.hexagon-graph-container {
  left: 50%;
  -webkit-transform: translate(-80%);
  -ms-transform: translate(-50%);
  transform: translate(-50%);
}

/*===== The CSS =====*/
.progress {
  width: 160px;
  height: 160px;
  margin: auto;
  background-color: transparent;
}
.progress .track,
.progress .fill {
  fill: rgba(0, 0, 0, 0);
  stroke-width: 40;
  transform: translate(60px, 700px)rotate(-90deg);
}
.progress .track {
  // stroke: rgb(56, 71, 83);
}
.progress .fill {
  stroke: rgb(255, 255, 255);
  stroke-linecap: round;
  stroke-dasharray: 2160;
  stroke-dashoffset: 2160;
  transition: stroke-dashoffset 1s;
}
.progress .fill {
  stroke: rgb(104, 214, 198);
}
.progress .value,
.progress .title {
  fill: #888;
  text-anchor: middle;
  font-size: 120px;
}
.progress .title {
  font-size: 100px;
}
.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}
</style>
