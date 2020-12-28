<template>
  <header class="top">
      <h1>{{ heading }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    heading: String
  }
}
</script>

<style scoped>
  .top{
    height: 15vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>