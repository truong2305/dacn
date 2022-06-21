<template>
  <div id="app" class="d-flex" @click="close($event)">
    <div class="loginPopup text-center" v-if="isLogin">
      <div class="contai">
        <div class="img mx-auto">
          <img :src="userLogin.url" alt="" />
        </div>
        <div class="my-3">
          <p>{{ userLogin.name }}</p>
        </div>
        <div>
          <input
            class="border"
            type="text"
            placeholder="password"
            v-model="pass"
          />
        </div>
        <div class="text-danger mt-3">
          {{ err }}
        </div>
        <div class="mt-5">
          <button @click="login()">Sign in</button>
        </div>
      </div>
    </div>
    <nav-bar />
    <div class="main pb-5">
      <the-header />
      <div class="p-sm-3 p-2">
        <transition>
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import TheHeader from "./components/TheHeader.vue";
import firebase from "./firebase";
export default {
  components: { TheHeader, NavBar },
  data() {
    return {
      pass: "",
      err: "",
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    userLogin() {
      return this.$store.state.loginUser;
    },
  },
  methods: {
    close(e) {
      if(e.target.classList.contains('loginPopup')) {
        this.$store.commit("isLogin", false);
      }
    },
    login() {
      this.err = "";
      firebase
        .auth()
        .signInWithEmailAndPassword(this.userLogin.name, this.pass)
        .then((data) => {
          this.$store.commit("user", data.user);
          this.$store.commit('open', false)
          this.$router.push({ path: "/" });
          this.$store.commit("isLogin", false);
          this.pass = "";
          this.err = "";
        })
        .catch(() => {
          this.err = "*The email or password is incorrect";
        });
    },
  },
  mounted() {
    this.$store.dispatch("dht");
    this.$store.dispatch("device");
    this.$store.dispatch("users");
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Courgette&family=Poppins:wght@100;200;300;400;500&display=swap");

#app {
  font-family: "Poppins", sans-serif !important;
  height: 100vh;
  .main {
    flex: 1;
    height: 100%;
    overflow-y: scroll;
  }
  .v-enter-active,
  .v-leave-active {
    opacity: 0;
    transition: 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
.loginPopup {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(#ffff, 0.5);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  .img {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  button,
  input {
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
  button {
    background-color: #5c60f5;
    color: white;
    transition: 0.3s;
     &:hover {
        background-color: #494ff4;
      }
  }
}
</style>
