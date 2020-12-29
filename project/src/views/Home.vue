<template>
  <div class="home">
    <Top :heading='heading'/>
    <p>ACTIVE CARD</p>
    <Card :cardData='cards[0]'
      class="active-card"
    />
    <CardStack :cards='cards'/>
    <router-link to="/addcard">
      <button> ADD A NEW CARD </button>
    </router-link>
  </div>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardStack from '../components/CardStack'

export default {
  components: { Top, Card, CardStack },
  
  data(){ return {
    heading: 'E-WALLET'
  }},

  computed: {
    cards(){
      return this.$root.cards
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
  button{
    outline: none;
    background-color: white;
    border: solid 0.2rem black;
    border-radius: 1rem;
    padding: 1.6rem;
    width: 30rem;

    font-size: 1.8rem;
    font-weight: 600;

    margin: 2rem;

  }
</style>
