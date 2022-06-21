<template>
  <div class="setting">
    <h5 class="border-bottom pb-2 pe-4 d-inline-block">Settings</h5>
    <form action="" v-if="setting.tmax != 'undefine'" @submit.prevent="changeSetting()">
      <div class="d-flex align-items-center my-5 item">
        <label for="tmax"> Temperature max </label>
        <div><input type="number" name="tmax" id="tmax" v-model="setting[2]"/></div>
      </div>
      <div class="d-flex align-items-center item">
        <label for="hmax"> Humidity max </label>
        <div><input type="number" name="hmax" id="hmax" v-model="setting[0]"/></div>
      </div>
      <div class="d-flex align-items-center my-5 item">
        <label for="tmin"> Temperature min </label>
        <div><input type="number" name="tmin" id="tmin" v-model="setting[3]"/></div>
      </div>
      <div class="d-flex align-items-center item">
        <label for="hmin"> Humidity min </label>
        <div><input type="number" name="hmin" id="hmin" v-model="setting[1]"/></div>
      </div>
      <div class="text-success text-end">
        {{ mess }}
      </div>
      <div class="mt-4 text-end">
        <button>Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from '../firebase'
export default {
  mounted() {
    this.$store.dispatch('setting')
  },
  data() {
    return {
      mess : ''
    }
  },
  computed: {
    setting() {
      return this.$store.state.setting
    }
  },
  methods: {
    changeSetting() {
      db.ref("setting").set({ tmax : this.setting[2], hmax : this.setting[0], tmin : this.setting[3], hmin : this.setting[1]})
      
      setTimeout(() => {
        this.mess = 'Successfully updated !!'
      }, 500);
      setTimeout(() => {
        this.mess = ''
      }, 4000);
    }
  }
};
</script>

<style lang="scss" scoped>
.setting {
  form {
    width: 400px;
    margin-left: 3rem;
    @media (max-width: 576.9px) {
      width: 100%;
      margin-left: 0;
    }
  }
  input {
    padding: 0.5rem;
    width: 100%;
  }
  .item {
    div {
      flex: 0.4;
    }
  }
  label {
    flex: 1;
    cursor: pointer;
  }
  button {
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #5c60f5;
    color: white;
    transition: 0.3s;
    &:hover {
      background-color: #494ff4;
    }
  }
}
</style>