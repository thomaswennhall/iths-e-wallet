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
      },
      {
        id: "986625663251",
        holder: "Bumbi Bambadoo",
        vendor: "ninja",
        number: "9876657588887665",
        validMonth: "10",
        validDay: "23"
      },
      {
        id: "123456738291",
        holder: "Lucifer Morningstar",
        vendor: "evil",
        number: "6666666666666666",
        validMonth: "6",
        validDay: "6"
      },
      {
        id: "878787846477",
        holder: "Morgan Lagerstad",
        vendor: "blockchain",
        number: "6837216988368787",
        validMonth: "12",
        validDay: "22"
      }
    ],

    styles: [
      {
        vendor: "bitcoin",
        color: "#ffaf37",
        chip: "dark",
        text: "#000"
      },
      {
        vendor: "ninja",
        color: "#404040",
        chip: "light",
        text: "#f3f3f3"
      },
      {
        vendor: "evil",
        color: "#ed0e3b",
        chip: "light",
        text: "#f3f3f3" 
      },
      {
        vendor: "blockchain",
        color: "#7500eb",
        chip: "light",
        text: "#f3f3f3" 
      }
    ]
  }},

  router,
  render: h => h(App)
}).$mount('#app')
