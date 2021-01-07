<template>
  <button v-on:click="$emit('clicked-delete')">DELETE THIS CARD</button>
</template>

<script>
export default {
  

}
</script>

<style scoped>
  button{
    padding: 0.4rem;
    background-color:tomato;
    border: solid 0.1rem black;
    border-radius: 0.3rem;
    outline: none;
  }
  button:hover{
    background-color: white;
  }
  button:active{
    background-color: pink;
    color: black;
  }
</style>