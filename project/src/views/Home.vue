<template>
  <div class="home">
    <Top :heading='heading'/>
    <p v-if="cards.length > 0" >ACTIVE CARD</p>
    <NoCards class="no-cards" v-if="cards.length < 1"/>
    <Card v-if="cards.length > 0"
      :cardData='activeCard'
      class="active-card"
    />
    <ButtonDelete class="delete-button"
      v-if="cards.length > 0"
      v-on:clicked-delete='showAlert'
    />
    <AlertBox class="alert-box"
      v-if='showAlertBox'
      :cardData="activeCard"
      v-on:button-click="hideAlert"
    />
    <CardStack v-if='cards.length > 1'
      :cards='cards'
      v-on:clicked-card='getCard'
      class="card-stack"
    />
    <router-link class="add-card-link" to='/addcard'>
      <ButtonBig class="add-card-button" :text="buttonText"/>
    </router-link>
  </div>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardStack from '../components/CardStack'
import ButtonBig from '../components/ButtonBig'
import ButtonDelete from '../components/ButtonDelete'
import AlertBox from '../components/AlertBox'
import NoCards from '../components/NoCards'

export default {
  components: { Top, Card, CardStack, ButtonBig, ButtonDelete, AlertBox, NoCards },
  
  data(){ return {
    heading: 'E-WALLET',
    buttonText: 'ADD NEW CARD',
    activeCard: this.$root.cards[0],
    showAlertBox: false
  }},

  computed: {
    cards(){
      return this.$root.cards
    }
  },

  methods: {
    getCard(clickedCard){
      this.activeCard = clickedCard
    },
    showAlert(){
      this.showAlertBox = true
      document.body.style.overflow = 'hidden'
    },
    hideAlert(){
      this.showAlertBox = false
      this.activeCard = this.$root.cards[0]
      document.body.style.overflow = null
    }
  }

}
</script>

<style scoped>
  .home{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    max-width: 30rem;
    min-height: 32rem;
  }
  .active-card{
    box-shadow: 0 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;
  }
  p{
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    color: rgb(105, 105, 105);
    margin-bottom: 1rem;
  }
  .card-stack{
    margin-top: 1rem;
  }
  .add-card-link{
    width: 100%;

    margin: 2rem;
  }
  .alert-box{
    position: fixed;
    top: 15rem;
    z-index: 1;
  }
</style>
