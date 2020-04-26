import Vue from 'vue';
import VueHexagon from 'vue-hexagon';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueHexagon);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
