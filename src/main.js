import Vue from 'vue';
import App from './App.vue';
import VueHexagon from 'vue-hexagon';

Vue.config.productionTip = false;
Vue.use(VueHexagon);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
