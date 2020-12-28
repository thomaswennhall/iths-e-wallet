<template>
  <div class="home">
    <Top :heading='heading'/>
    <p>ACTIVE CARD</p>
    <Card :cardData='cardInfo[0]'
      class="active-card"
    />
    <CardStack/>
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
    cardInfo(){
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
  }
  p{
    font-size: 0.8rem;
    font-weight: 600;
    color: rgb(105, 105, 105);
    margin-bottom: 1rem;
  }
</style>
