import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource  from 'vue-resource'
Vue.use(VueResource);

import store from './store'

Vue.config.productionTip = false

import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)


new Vue({
  el: '#app',
  router,
  store,
  template: '<App><App/>',
  components: {
    App
  },
  render: h => h(App)
}).$mount('#app')
