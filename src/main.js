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
        validYear: "21"
      },
      {
        id: "123456738291",
        holder: "Lucifer Morningstar",
        vendor: "evil",
        number: "6666666666666666",
        validMonth: "06",
        validYear: "22"
      },
      {
        id: "878787846477",
        holder: "Morgan Lagerstad",
        vendor: "blockchain",
        number: "6837216988368787",
        validMonth: "11",
        validYear: "22"
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
      },
      {
        vendor: "",
        color: "#e2e2e2",
        chip: "dark",
        text: "#111" 
      }
    ]
  }},

  router,
  render: h => h(App)
}).$mount('#app')
