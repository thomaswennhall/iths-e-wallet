<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
    props:{
        text: String
    }

}
</script>

<style scoped>
    button{
    outline: none;
    background-color: white;
    border: solid 0.2rem black;
    border-radius: 1rem;
    padding: 1.6rem;
    width: 100%;

    font-size: 1.8rem;
    font-weight: 600;
  }
</style>