import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data() { return {
    cards: [
      {
        id: "432984728397",
        holder: "Thomas Wennhall",
        vendor: "bitcoin",
        number: "1234567891011123",
        validMonth: "12",
        validDay: "5"
      }
    ]
  }},

  router,
  render: h => h(App)
}).$mount('#app')
