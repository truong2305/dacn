<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: ["check"],
  computed: {
    dht11() {
      // char = this.$store.state.device
      return this.$store.state.dht
    }
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");
    this.renderChart(
      {
        labels: this.check == "temp" ? ["Temperature"] : ["Humidity"],
        datasets: [
          {
            backgroundColor:
              this.check == "temp"
                ? [this.gradient, "#fcf8f8"]
                : [this.gradient2, "#fcf8f8"],
            data:
              this.check == "temp"
                ? [this.dht11[1], 100 - this.dht11[1]]
                : [this.dht11[0], 100 - this.dht11[0]],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
<style lang="scss" scoped>
#pie-chart {
  width: 300px !important;
  height: 300px !important;
  @media (max-width : 767.9px) {
     width: 250px !important;
  height: 250px !important;
  }
   @media (max-width : 576.9px) {
     width: 200px !important;
  height: 200px !important;
  }
   @media (max-width : 400.9px) {
     width: 170px !important;
  height: 170px !important;
  }
}
</style>