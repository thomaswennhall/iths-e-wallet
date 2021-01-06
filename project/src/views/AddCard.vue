<template>
  <div class="add-card">
    <router-link class="back-link" :to="'/'">
      <ButtonMini class="back-button" :text="buttonText"/>
    </router-link>
    <Top :heading="heading"/>
    <p>NEW CARD</p>
    <Card class="card" :cardData="newCard"/>
    <CardForm :newCard="newCard"/>
  </div>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
import ButtonMini from '../components/ButtonMini'

export default {
  components: { Top, Card, CardForm, ButtonMini },

  data(){ return {
    heading: "ADD A NEW BANK CARD",
    buttonText: "< GO BACK",

    newCard: {
      id: "",
      holder: "",
      vendor: "",
      number: "",
      validMonth: "XX",
      validYear: "YY"
    }
  }}
}
</script>

<style scoped>
  .add-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 30rem;
  }
  p{
    font-size: 0.8rem;
    font-weight: 600;
    color: rgb(105, 105, 105);
    margin-bottom: 1rem;
  }
  .card{
    box-shadow: 0 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.5);
  }
  .back-link{
    align-self: flex-start;
  }
</style>