<template>
  <section class="card"
    :style="cssVars"
  >
      <img :src='"../assets/chip-" + cardStyle.chip + ".svg"'
        alt="chip-icon" 
        class="chip-icon"
      >
      <img :src='"../assets/vendor-" + cardData.vendor + ".svg"'
        alt="vendor-icon" 
        class="vendor-icon"
      >
      <p class="number">{{ cardNumber }}</p>
      <h4 class="holder-heading">CARDHOLDER NAME</h4>
      <p class="holder">{{ cardData.holder }}</p>
      <h4 class="valid-heading">VALID THRU</h4>
      <p class="valid-date">{{ cardData.validMonth }}/{{ cardData.validDay }} </p>
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

    cardStyle(){
      return this.$root.styles.find(obj => obj.vendor == this.cardData.vendor)
    },

    cssVars(){ 
      return {
        "--bg-color": this.cardStyle.color,
        "--text-color": this.cardStyle.text
      }
    }
  }
}
</script>

<style scoped>
  .card{
    background-color: var(--bg-color);
    border-radius: 1rem;
    width: 30rem;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 2.6rem);

    padding: 1.2rem;
  }

  h4, p{
    font-family: 'Courier New', Courier, monospace;
    text-shadow: -0.02rem -0.02rem rgb(200, 200, 200);
    color: var(--text-color);
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
    width: 2rem;
  }
  .number{
    grid-row: 3 / span 2;
    grid-column: span 6;

    align-self: center;

    font-size: 2.4rem;
  }
  .holder-heading{
    grid-row: 5;
    grid-column: span 3;
  }
  .holder{
    grid-row: 6;
    grid-column: span 4;
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
</style>