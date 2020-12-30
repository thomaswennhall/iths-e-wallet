<template>
  <div class="card-stack">
      <Card class="card"
        v-for="card in cards"
        :key="card.id"
        :cardData="card"
        v-on:clicked="$emit('clicked-card', card)"
      />
  </div>
</template>

<script>
import Card from './Card'

export default {
  components: { Card },
  props: {
    cards: Array
  }
}
</script>

<style scoped>
  .card {
    margin-top: -15rem;
    position: relative;
    box-shadow: 0 -0.1rem 0.4rem 0 rgba(0, 0, 0, 0.5);
  }
  .card:first-child{
    margin-top: 0;
    box-shadow: 0 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.5);
  }

</style>