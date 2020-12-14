import Vue from 'vue'
import App from './App.vue'

// Importing CSS
require('@/assets/css/style.css')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
