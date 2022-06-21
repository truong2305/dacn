<template>
  <header class="py-3 border-bottom">
    <div class="container-fluid">
      <div class="pt-6">
        <div class="row align-items-center justify-content-between">
          <div class="col-sm col-12 d-flex justify-content-between">
            <h1 class="h4 mb-0 d-flex align-items-center">
              <div style="height : 36px" class="d-flex align-items-center">
                <i @click="openBar()" class="fas fa-bars d-block d-lg-none"></i>
              </div>
              <a href="" v-if="!open" class="d-block d-lg-none ms-3">
                <img src="../assets/logo.svg" alt="" />
              </a>
              <div class="d-lg-block d-none">
                <span class="d-inline-block me-3" v-if="user === ''"
                  >👋 Welcome</span
                >
                <span class="d-inline-block me-3" v-else
                  >👋{{ time }}, {{ user.displayName }}!</span
                >
              </div>
            </h1>
            <div class="d-flex align-items-center" v-if="user !== ''">
              <div class="d-flex align-items-center user" @click="logout()">
                <div class="avt me-2">
                  <img :src="user.photoURL" alt="" />
                </div>
                <small class="d-sm-inline d-none">{{ user.displayName }}</small>
              </div>
              <div class="ms-sm-4 ms-2 bell">
                <i class="far fa-bell"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import NavbarUser from "./NavbarUser.vue";
export default {
  // components: { NavbarUser },
  name: "TheHeader",
  data() {
    return {
      time: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    open() {
      return this.$store.state.open;
    },
  },
  methods: {
    logout() {
      console.log(1);
    },
    openBar() { 
      this.$store.commit('open', true)
    },
    getTime() {
      let time = new Date().getHours();
      if (5 < time && time < 11) this.time = "Good morning";
      else if (11 <= time && time < 17) this.time = "Good afternoon";
      else if (17 <= time && time < 22) this.time = "Good evening";
      else this.time = "Good night";
    },
  },
  created() {
    this.getTime();
  },
};
</script>
<style lang="scss" scoped>
header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  background: white;
  width: 100%;
  .container-fluid {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .avt {
    width: 36px;
    height: 36px;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .bell {
    font-size: 1.5rem;
  }
  .user {
    cursor: pointer;
  }
}
</style>