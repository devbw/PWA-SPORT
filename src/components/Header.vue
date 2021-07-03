<template>
  <div class="main-header__container">
    <div>
      <h1>30'FIT</h1>
      <span>THE SPORT APP</span>
    </div>
    <i class="uil uil-dumbbell"></i>

  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main-header__container{
  display: flex;
  justify-content: center;
  align-items: top;
  width: 100%;
  padding: 1.5rem 0 1.5rem 0;
}
h1{
  font-size: 4rem;
  margin: 0;
}
.uil-dumbbell{
  font-size: 4rem;
  color :rgba(184, 0, 194, 0.37);
}
span{
  font-weight: bold;
  color: #B800C2;
  font-size: 1.1rem;
}
</style>
