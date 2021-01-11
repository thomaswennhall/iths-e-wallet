<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  h1, h2, h3, p{
    font-family: 'Open Sans', Verdana, sans-serif;
  }
  button, label, input, select{
    font-family: 'Courier New', Courier, monospace;
  }
  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
</style>
