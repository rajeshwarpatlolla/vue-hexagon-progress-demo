import Vue from 'vue';
import Router from 'vue-router';
import VueHexagonDemo from '@/components/vue-hexagon-demo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vue-hexagon-demo',
      component: VueHexagonDemo,
    },
  ],
});
