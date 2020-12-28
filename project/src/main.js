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
        number: "1234567891234567",
        validMonth: "12",
        validDay: "5"
      }
    ],

    styles: [
      {
        vendor: "bitcoin",
        color: "#ffaf37",
        chip: "dark"
      },
      {
        vendor: "ninja",
        color: "#404040",
        chip: "light"
      }
    ]
  }},

  router,
  render: h => h(App)
}).$mount('#app')
