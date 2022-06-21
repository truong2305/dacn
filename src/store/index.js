import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "../firebase";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : '',
    device : [],
    dht : '',
    users : [],
    loginUser  : {},
    open : false,
    isLogin : false,
    setting : []
  },
  mutations: {
    device(state, data) {
      state.device = data
    },
    user(state, data) {
      state.user =  data
    },
    open(state, data) {
      state.open = data
    },
    dht(state, data) {
      state.dht =  data
    },
    users(state, data) {
      state.users = data
    },
    loginUser(state, data) {
      state.loginUser = data
    },
    isLogin(state, data) {
      state.isLogin = data
    },
    setting(state, data) {
      state.setting = data
    }
  },
  actions: {
    dht({commit}) {
      db.ref("FirebaseIOT").on("value", (snapshot) => {
         let arr2=[];
         snapshot.forEach((childSnapshot) => {
           arr2.push(childSnapshot.val());
         });
         commit("dht", arr2);
       });
     },
     users({commit}) {
      db.ref("user").on("value", (snapshot) => {
        let arr2 = []
        snapshot.forEach(childSnapshot => {
          arr2.push(childSnapshot.val())
         });
         commit("users", arr2);
       });
     },
     setting({commit}) {
      db.ref("setting").on("value", (snapshot) => {
        let arr2 = []
        snapshot.forEach(childSnapshot => {
          arr2.push(childSnapshot.val())
         });
         commit("setting", arr2);
       });
     },
      device({commit}) {
      db.ref("DEVICE").on("value", (snapshot) => {
        let arr3 = []
        snapshot.forEach(childSnapshot => {
          let arr = []
          let arr2 = []
          arr.push(childSnapshot.key)
          arr2.push(childSnapshot.val())
          let a = []
          a.push(arr, arr2)
          arr3.push(a)
        });
       commit('device', arr3.slice(1))
      });
    },
  },
  modules: {
  }
})
