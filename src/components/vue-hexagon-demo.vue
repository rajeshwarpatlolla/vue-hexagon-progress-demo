<template>
  <div>
    <div>Hexagon Graph Demo</div>
    <div class="pt-20">
      <hexagonGraph :options="{width:120, height:120, trackColor:'#bb28bf', title:'Avg', label:'70%', valueColor:'#000', value:70, className:'containment-hexagon'}" />
      </div>
  </div>
</template>

<script>
import hexagonGraph from './vue-hexagon';

export default {
  name: 'VueHexagonDemo',
  data() {
    return {};
  },
  components: { hexagonGraph },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pt-20{
  padding-top:20px;
}
</style>
