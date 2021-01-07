<template>
  <form v-on:submit.prevent="addCard">
      <label for="new-number">CARD NUMBER</label>
      <input type="text" 
        id="new-number"
        maxlength="16"
        minlength="16"
        pattern="[0-9]{16}"
        v-model="newCard.number"
        required
      >
      <label for="new-holder">CARDHOLDER NAME</label>
      <input type="text" 
        id="new-holder"
        v-model="newCard.holder"
        required
      >
      <label for="new-month">MONTH</label>
      <select id="new-month" v-model="newCard.validMonth" required>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
      </select>
      <label for="new-year">YEAR</label>
      <select id="new-year" v-model="newCard.validYear" required>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
      </select>
      <label for="new-vendor">VENDOR</label>
      <select id="new-vendor" v-model="newCard.vendor" required>
          <option value="bitcoin">Bitcoin Inc</option>
          <option value="blockchain">Blockchain Inc</option>
          <option value="evil">Evil Corp</option>
          <option value="ninja">Ninja Bank</option>
      </select>
      <ButtonBig class="submit-button" 
        type="submit" 
        :text="'ADD CARD'"
      />
  </form>
</template>

<script>
import ButtonBig from './ButtonBig'

export default {
    components: { ButtonBig },

    props: {
        newCard: Object
    },

    methods: {
        addCard(){
            this.newCard.id = Date.now()
            this.$root.cards.push(this.newCard)
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    form{
        width: 100%;
        margin-bottom: 2rem;

        display: grid;
        grid-template-rows: repeat(11, 1fr);
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
    }

    input{
        height: 3rem;
    }
    input, select{
        font-size: 1.2rem;
    }
    label{
        align-self: end;
    }

    #new-number{
        grid-row: 2;
        grid-column: span 2;
    }

    [for="new-holder"]{
        grid-row: 3;
        grid-column: auto;
    }
    #new-holder{
        grid-row: 4;
        grid-column: span 2;
    }

    [for="new-month"]{
        grid-row: 5;
        grid-column: 1;
    }
    #new-month{
        grid-row: 6;
        grid-column: 1;
    }

    [for="new-year"]{
        grid-row: 5;
        grid-column: 2;
    }
    #new-year{
        grid-row: 6;
        grid-column: 2;
    }

    [for="new-vendor"]{
        grid-row: 7;
        grid-column: auto;
    }
    #new-vendor{
        grid-row: 8;
        grid-column: span 2;
    }
    .submit-button{
        grid-row: 10 / span 2;
        grid-column: span 2;
    }
</style>