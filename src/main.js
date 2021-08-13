import Vue from 'vue'
import App from './App.vue'

//agregando bootstrap:
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/styles.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
