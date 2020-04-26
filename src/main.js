import Vue from 'vue';
import VueHexagonProgress from 'vue-hexagon-progress';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueHexagonProgress);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
