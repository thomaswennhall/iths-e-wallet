<template>
  <section class="card" :class="cardData.vendor" v-on:click="$emit('clicked')">
      <img v-if="cardData.vendor == 'blockchain'" 
        :src='"../assets/chip-dark.svg"'
        alt="chip-icon" 
        class="chip-icon"
      >
      <img v-else 
        :src='"../assets/chip-light.svg"'
        alt="chip-icon" 
        class="chip-icon"
      >
      
      <img v-if="cardData.vendor" 
        :src='"../assets/vendor-" + cardData.vendor + ".svg"'
        alt="vendor-icon" 
        class="vendor-icon"
      >
      <p class="number" v-if="cardData.number">{{ cardNumber }}</p>
      <h4 class="holder-heading">CARDHOLDER</h4>
      <p class="holder">{{ cardHolder }}</p>
      <h4 class="valid-heading">VALID THRU</h4>
      <p class="valid-date">{{ cardData.validMonth }}/{{ cardData.validYear }} </p>
  </section>
</template>

<script>
export default {
  props: {
    cardData: Object
  },

  computed: {
    cardNumber(){
      const cardNum = this.cardData.number
      return cardNum.match(/.{1,4}/g).join(' ')
    },

    cardHolder(){
      const cardHold = this.cardData.holder
      if(cardHold.length > 21){
        const holderArr = cardHold.split(' ')
        holderArr[0] = holderArr[0][0]
        return holderArr.join(' ')
      }else{ return cardHold }
    }
  }
}
</script>

<style scoped>
  .card{
    background-color: #e2e2e2;
    color: #111;
    border-radius: 1rem;
    width: 100%;
    max-height: 18rem;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);

    padding: 1.2rem;
  }
  .bitcoin{
    background-color: #ffaf37;
    color: #000;
  }
  .ninja{
    background-color: #404040;
    color: #f3f3f3;
  }
  .evil{
    background-color: #ed0e3b;
    color: #f3f3f3;
  }
  .blockchain{
    background-color: #7500eb;
    color: #f3f3f3;
  }

  h4, p{
    font-family: 'Courier New', Courier, monospace;
    text-shadow: -0.02rem -0.02rem rgb(200, 200, 200);
  }
  h4{
    font-weight: 400;
  }
  .holder, .valid-date{
    font-weight: 400;
    font-size: 1.6rem;
    text-transform: uppercase;
  }
  .holder-heading, .valid-heading{
    align-self: end;
    opacity: 0.8;
  }
  
  .chip-icon{
    grid-row: span 2;
    grid-column: 1;
  }
  .vendor-icon{
    grid-row: span 2;
    grid-column: 6;

    justify-self: end;
    max-width: 2.2rem;

    opacity: 0.8;
  }
  .number{
    grid-row: 3 / span 2;
    grid-column: span 6;

    align-self: center;

    font-size: 2.3rem;
  }
  .holder-heading{
    grid-row: 5;
    grid-column: span 3;
  }
  .holder{
    grid-row: 6;
    grid-column: span 5;
    padding-right: 2rem;
  }
  .valid-heading{
    grid-row: 5;
    grid-column: 5 / span 2;

    justify-self: end;
  }
  .valid-date{
    grid-row: 6;
    grid-column: 6;

    justify-self: end;
  }

  @media screen and (max-width: 450px){
    .card{
      height: 14rem;
    }
    
    .valid-heading, .holder-heading{
      font-size: 0.8rem;
    }
    .holder, .valid-date{
      font-size: 1rem;
      margin-top: 0.5rem;
    }

    .number{
      font-size: 1.57rem;
    }

    .chip-icon{
      width: 2.4rem;
    }
  }
</style>