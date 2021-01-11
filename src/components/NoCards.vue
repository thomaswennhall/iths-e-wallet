<template>
  <section class="no-cards">
      <h3>Your e-wallet is empty</h3>
      <p>When it's not, your cards will show here, 
          go ahead and add your first card
          by tapping the button below.
      </p>
  </section>
</template>

<style scoped>
    .no-cards{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h3{
        text-transform: uppercase;
        font-weight: 600;
        color: black;
    }
    p{
        text-align: center;
        width: 80%;
    }
</style>