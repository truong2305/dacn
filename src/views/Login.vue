<!-- @format -->

<template>
  <div class="login">
    
    <form action="" v-if="signin" class="mt-5 mx-auto" @submit.prevent="login()">
      <h1 class="text-center mb-4">Sign in</h1>
      <div>
        <input type="text" placeholder="admin name" v-model="username" />
      </div>
      <div class="mt-4">
        <input type="text" placeholder="password" v-model="pass" />
      </div>
      <div class=" mb-4 mt-1 text-white">
        <small>{{ err }}</small>
      </div>
       <div class=" mb-4 mt-1 text-white">
        <small>{{ ss }}</small>
      </div>
      <div>
        <button>Sign in</button>
      </div>
      <div  class="text-white mt-4 sign-up">
        or <span @click="checkSignUp()">Sign up</span>
      </div>
    </form>
     <form action="" v-else class="mt-5 mx-auto" @submit.prevent="signup()">
      <h1 class="text-center mb-4">Sign up</h1>
      <div>
        <input type="text" placeholder="admin name" v-model="username" />
      </div>
      <div class="mt-4">
        <input type="text" placeholder="password" v-model="pass" />
      </div>
       <div class="mt-4">
        <input type="text" placeholder="name" v-model="name" />
      </div>
       <div class="mt-4">
        <input type="text" placeholder="avatar" v-model="url" />
      </div>
      <div class=" mb-4 mt-1 text-white">
        <small>{{ err }}</small>
      </div>
     
      <div>
        <button >Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "../firebase";
import { db } from '../firebase'
export default {
  data() {
    return {
      username: "",
      pass: "",
      name : '',
      err : '',
      signin : true,
      ss : '',
      url : ''
    };
  },
  computed: {
    path() {
      return this.$store.state.path;
    },
  },
  methods: {
    checkSignUp() {
      this.err = ''
      this.signin = false,
      this.username = '',
      this.pass = ''
    },
    async signup() {
      
       firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.pass)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.name,
              photoURL : this.url
            })
            .then(() => {
              this.ss = 'Sign up is success !!'
              this.signin = true
              this.err = ''
              db.ref('user').push({ name : this.username, url : this.url})
            });
        })
        .catch(err => {
          this.err = err.message;
        });
    },
      async login() {
       firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.pass)
        .then(data => {
          this.$store.commit('user', data.user)
          this.$router.push({path : '/'})
          
        })
        .catch(()=> {
          this.err = '*The email or password is incorrect';
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding-top: 80px;
  background-image: url(https://cdn.wallpapersafari.com/74/49/F7dPYn.jpg);
  background-size: cover;
  height: 100vh;
  background-position: top;
   @media (max-width : 991.9px) {
      padding: 1rem;
    }
  p {
    font-size: 18px;
    font-weight: 500;
    color: white;
    
  }
  h1 {
    letter-spacing: 0.1rem;
    color: white;
  }
  form {
    width: 450px;
    @media (max-width : 500.9px) {
      width: 100%;
    }
    input {
      width: 100%;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 3px;
      outline: none;
    }
    button {
      background-color: #5c60f5;
      color: white;
      font-weight: 700;
      font-size: 15px;
      border: none !important;
      cursor: pointer;
      padding: 15px 25px;
      transition: 0.3s;
      border-radius: 30px;
      &:hover {
        background-color: #494ff4;
      }
    }
  }
  .sign-up {
span {
  transition: 0.4s;
  text-decoration: underline;
  cursor: pointer;
   &:hover {
        opacity: 0.7;
    }
}
   
  }
}
</style>
