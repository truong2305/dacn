<!-- @format -->

<template>
  <div class="home">
    <div class="d-flex flex-wrap">
      <div class="col-xl-9 col-12 d-flex flex-column justify-content-between">
        <apexchart type="line" height="350" ref="chart" :options="chartOptions" :series="series"></apexchart>
        <cart />
      </div>
      <div class="col-xl-3 col-12">
        <keep-alive>
          <weather class="mt-4 mt-xl-0" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Weather from "../components/Weather.vue";
import Cart from "../components/Cart.vue";
import apexchart from "vue-apexcharts";
export default {
  components: {Weather, Cart, apexchart},
  name: "Home",
  data() {
    return {
      data : [],
      series: [
        {
          name: "Temperature",
          data: this.data,
        },
        {
          name: "Humidity",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ],
      chartOptions: {
        chart: {
          id: "realtime",
          height: 350,
          type: "line",
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 1000,
            },
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#dc3545", "#0dcaf0"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Humidity and Temperature chart",
          align: "left",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "Time",
          },
        },
        yaxis: {
          title: {
            text: "Value",
          },
          min: 0,
          max: 100,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  },
  mounted() {
    setInterval(() => {
      this.$refs.chart.updateSeries([
        {
          name: "Temperature",
          data:[parseInt(Math.random()*100) ,parseInt(Math.random()*100) ,parseInt(Math.random()*100) ,parseInt(Math.random()*100) ,parseInt(Math.random()*100) ,parseInt(Math.random()*100) ,parseInt(Math.random()*100) ,],
        },
         {
          name: "Humidity",
          data:[parseInt(Math.random()*100) ,parseInt(Math.random()*100) ,parseInt(Math.random()*100) ,parseInt(Math.random()*100) ,parseInt(Math.random()*100) ,parseInt(Math.random()*100) ,parseInt(Math.random()*100) ,],
        },
      ]);
    }, 3000);
  },
};
</script>
