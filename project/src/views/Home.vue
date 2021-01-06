<template>
  <div class="home">
    <Top :heading='heading'/>
    <p>ACTIVE CARD</p>
    <Card :cardData='activeCard'
      class="active-card"
    />
    <CardStack :cards='cards'
      v-on:clicked-card='getCard'
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

export default {
  components: { Top, Card, CardStack, ButtonBig },
  
  data(){ return {
    heading: 'E-WALLET',
    buttonText: 'ADD NEW CARD',
    activeCard: this.$root.cards[0]
  }},

  computed: {
    cards(){
      return this.$root.cards
    }
  },

  methods: {
    getCard(clickedCard){
      this.activeCard = clickedCard
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

    width: 30rem;
  }
  .active-card{
    box-shadow: 0 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.5);
    margin-bottom: 2rem;
  }
  p{
    font-size: 0.8rem;
    font-weight: 600;
    color: rgb(105, 105, 105);
    margin-bottom: 1rem;
  }
  .add-card-link{
    width: 100%;

    margin: 2rem;
  }
</style>
