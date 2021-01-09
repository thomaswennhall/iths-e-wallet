<template>
  <section class="alert-box">
      <p class="prompt">Are you sure you want to delete this card?
        </p>
      <button class="delete"
        v-on:click="deleteCard"
      >DELETE</button>
      <button class="return"
        v-on:click="$emit('button-click')"
      >RETURN</button>

  </section>
</template>

<script>

export default {
    props: {
        cardData: Object
    },
    
    methods: {
        deleteCard(){
            const currentCard = this.$root.cards.find(obj => obj.id == this.cardData.id)
            const currentCardIndex = this.$root.cards.indexOf(currentCard)
            this.$root.cards.splice(currentCardIndex, 1)
            this.$emit('delete-click')
        }
    }
}
</script>

<style>
    .alert-box{
        max-width: 25rem;
        height: 12rem;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        border-radius: 1rem;
        box-shadow: 0 0.1rem 0.8rem 0.2rem rgba(0, 0, 0, 0.5);

        display: grid;
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(4, 1fr);
        gap: 0.6rem;
    }
    .prompt{
        grid-row: 2;
        grid-column: 1 / span 4;
        text-align: center;
    }
    .delete{
        grid-row: 3;
        grid-column: 2;
        background-color: tomato;
    }
    .return{
        grid-row: 3;
        grid-column: 3;

        background-color: white;
    }
    button{
        outline: none;
        border: none;
        border-radius: 0.3rem;
    }
    button:hover{
        background-color: pink;
    }
    button:active{
        background-color: black;
        color: white;
    }
</style>