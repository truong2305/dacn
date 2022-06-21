<!-- @format -->

<template>
  <div class="weather">
    <div class="action d-flex justify-content-between border-bottom pb-2">
      <div>{{ city }}</div>
    </div>
    <div class="img text-center">
      <img width="200" height="200" src="../assets/weather/02d.png" alt="" />
    </div>
    <div class="temp">
      <p class="temp-p">{{ temp }} ºC</p>
      <p >{{ time }}</p>
    </div>
    <div class="describe d-flex align-items-center ps-4">
      <img width="100" height="100" src="../assets/weather/02d.png" alt="" />
      <div>
        <p class="mb-0">{{ weather }}</p>
        <div>
          <small>Few Clouds</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "weather",
  data() {
      return {
          ct : '',
          city : '',
          temp : '',
          weather : '',
          time : ''
      }
  },
  methods: {
    getTime() {
      const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      let d = new Date;
      this.time = weekday[d.getDay()]+ ', ' + d.getHours() + 'h : ' + d.getMinutes() + 'p'
    },
    async getWeather() {
      let ct = "da nang";
      if (this.ct !== "") {
        ct = this.ct;
      }
      await this.$http
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${ct}&appid=24ec4f15740fb7e6e06a31b756d0d3ba&lang=vi`)
        .then((res) => {
          this.city = res.data.name;
          this.weather = res.data.weather[0].main;
          this.humidity = res.data.main.humidity;
          this.temp = Math.round(res.data.main.temp - 273);
          this.weatherClass = res.data.weather[0].main;
        });
    },
  },
   async created() {
    await this.getWeather();
    this.getTime()
    setInterval(() => {
      this.getTime()
    },1000)
  },
  

};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Courgette&family=Poppins:wght@100;200;300;400;500&display=swap");
.weather {
  background-image: url(../assets/weather/image/wind.jpg);
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  background-repeat: no-repeat;
  padding: 1rem 1rem 3rem 1rem;
}
.action {
  font-size: 23px;
  font-family: "Poppins", sans-serif;
}
.temp {
  font-family: "Poppins", sans-serif;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  &-p {
    font-size: 60px;
  }
}
.describe {
  font-family: "Poppins", sans-serif;

  font-size: 1.25rem;

  font-weight: 500;
}
</style>
