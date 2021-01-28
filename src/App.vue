<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  h1, h2, h3, p{
    font-family: 'Noto Sans JP', 'Open Sans', Verdana, sans-serif;
  }
  button, label, input, select{
    font-family: 'Courier New', Courier, monospace;
  }
  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 1rem;
  }
</style>
