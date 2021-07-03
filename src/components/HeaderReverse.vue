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
  name: 'HeaderReverse',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main-header__container{
  display: flex;
  justify-content: center;
  align-items: top;
  width: 100%;
  padding: 1.5rem 0 5rem 0;
  background-color: #B800C2;
}
h1{
  font-size: 4rem;
  margin: 0;
  color: #FFF;
}
.uil-dumbbell{
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.37);
}
span{
  font-weight: bold;
  color: #FFF;
  font-size: 1.1rem;
}
</style>
