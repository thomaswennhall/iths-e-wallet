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
    background-color: transparent;
    border: none;
    border-radius: 0.3rem;
    padding: 1rem; 
    width: 100%;

    font-size: 1rem;
    font-weight: 400;
  }
  button:hover{
    color: pink;
  }
  button:active{
    color: black;
  }
</style>