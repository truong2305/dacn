<template>
 <div class="border-end nav-container d-none d-lg-block" :class="{'open' : open}">
     <nav class="nav-bar ">
      <div>
          <a href="" class="d-inline-block py-3 mb-lg-4 px-3 me-0">
              <img src="../assets/logo.svg" alt="">
          </a>
          <div class="border-bottom">
              <ul class="ps-0">
                  <li @click="closeBar()"><router-link active-class="router" exact class="nav-link" to="/">Home</router-link></li>
                  <li @click="closeBar()"><router-link active-class="router" to="/control" class="nav-link">Control</router-link></li>
                  <li @click="closeBar()"><router-link active-class="router" to="/chart" class="nav-link">Chart</router-link></li>
                  <li @click="closeBar()"><router-link active-class="router" class="nav-link" to="/settings">Settings</router-link></li>
                  <li @click="closeBar()"><router-link active-class="router" class="nav-link" to="/login">{{ user == '' ? 'Login' : 'Log out' }}</router-link></li>
              </ul>
          </div>
      </div>
  </nav>
  <div class="users">
        <div v-for="(item, index) in users " @click="loginUser(item)" :key="index" class="my-3 d-flex align-items-center user">
            <div class="avt me-2">
                <img :src="item.url" alt="">
            </div>
            <small>
                {{ item.name }}
            </small>
        </div>
  </div>
 </div>
</template>

<script>
export default {
name : "NavBar",
methods: {
    closeBar() {
        this.$store.commit('open', false)
    },
    loginUser(data) {
        this.$store.commit('loginUser', data)
        this.$store.commit('isLogin', true)
    }
},
computed : {
    user() {
        return this.$store.state.user
    },
    users() {
        return this.$store.state.users
    },
    open() {
        return this.$store.state.open
    }
}
}
</script>

<style lang="scss" scoped>
.nav-container {
    max-width:  270px;
    z-index: 100;
    background: white;
    height: 100vh;
    ul {
        .nav-link {
        align-items: center;
        display: flex;
        font-weight: 500;
        padding: 0.75rem 1.5rem;
        white-space: nowrap;
        color: #16192c;
        }
    }
}
.open {
    display: block !important;
    position: fixed;
}
.router {
    transition: 0.3s;
    color: #7e6dfb !important;
    background: #efeefa;
}
.users {
    padding: 0.75rem 1.5rem;
}
.avt {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.user {
    cursor: pointer;
}
</style>