<template>
  <div id="chart">
    <h5 >Time Chart</h5>
    <AreaChart/>
    <h5 class="mt-5">Current Chart</h5>
     <div class="d-flex justify-content-center mt-5">
           <pie-chart check="temp"/>
           <div class="mx-lg-5 mx-sm-3 mx-0" ></div>
          <pie-chart />
     </div>
   
  </div>
</template>

<script>
import AreaChart from '../components/AreaChart.vue'
import PieChart from '../components/PieChart.vue'

export default {
  name: "Chart",
  components: {
    AreaChart,PieChart,
  },
  
};
</script>
