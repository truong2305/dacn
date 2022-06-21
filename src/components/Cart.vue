<!-- @format -->

<template>
  <div class="d-flex flex-wrap justify-content-between pe-xl-3 gap-3">
    <div class="card" v-for="(item, index) in device" :key="index">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col">
            <span class="h6 font-semibold text-muted text-sm d-block mb-2">
              {{ item[0][0] }}
            </span>
          </div>
          <div class="col-auto">
            <div
              class="icon icon-shape text-white text-lg rounded-circle"
              :class="item[0][0]"
              v-html="icon(item[0][0])"
            ></div>
          </div>
        </div>
        <div class="mt-2 mb-0 text-sm">
          <span
            class="badge badge-pill me-2"
            :class="{
              'bg-soft-success': item[1][0] !== 'OFF',
              'bg-soft-danger': item[1][0] === 'OFF',
            }"
            ><i class="bi bi-arrow-up me-1"></i>{{ item[1][0] }} </span
          ><span class="text-nowrap text-xs text-muted">{{
            item[1][0] === "OFF" ? "non active" : "is active"
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classs: "",
    };
  },
  computed: {
    device() {
      return this.$store.state.device;
    },
  },
  methods: {
    icon(item) {
      if (item === "Led") {
        return '<i class="far fa-lightbulb"></i>';
      } else if (item === "Loa") {
        return '<i class="fas fa-volume-down"></i>';
      } else if (item === "Quat") {
        return '<i class="fas fa-fan"></i>';
      } else {
        return '<i class="fab fa-cloudversify"></i>';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-soft-success {
  background-color: #ccf5e7 !important;
  color: #198754;
}
.bg-soft-danger {
  background-color: #ffd6e0 !important;
  color: #dc3545;
}
.Mist {
  background: #0dcaf0;
}
.Led {
  background: #ffc107;
}
.Fan {
  background: #0d6efd;
}
.Speaker {
  background: #dc3545;
}
.card-body {
  color: #525f7f;
  padding: 1.5rem;
}
.card {
  word-wrap: break-word;
  background-clip: border-box;
  background-color: #fff;
  border: 0 solid #eceef3;
  border-radius: 0.75rem;
  box-shadow: 0 3px 3px -1px rgb(193, 193, 193), 0 0 1px 0 rgb(191, 207, 211);
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;
  @media (max-width : 767.9px) {
    width: calc( 50% - 1rem );
  }
  @media (max-width : 500.9px) {
    width: 100%;
  }
}
*,
:after,
:before {
  border: 0 solid #e7eaf0;
}
.text-xs {
  font-size: 0.75rem !important;
}
.icon-shape {
  align-items: center;
  border-radius: 0.375rem;
  display: inline-flex;
  height: 3rem;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  width: 3rem;
}
</style>
