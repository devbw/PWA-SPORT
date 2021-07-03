<template>
  <div class="container-purple">
    <div class="container__line">
      <div class="line"></div>
    </div>
    <div class="container__title">
      <h2>TRY !</h2>
      <i class="uil uil-rocket benefit__icon"></i>
    </div>
    <div class="container__material fade-in">
        You just need one pullup bar and two chairs for the dips exercices
    </div>
    <div class="container__button">
      <router-link tag="button" to="/trainings" class="button__dark">GO TO TRAININGS</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trycard',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container__title{
  display: flex;
  margin: 3rem 2rem 1rem 2rem;
}
.benefit__icon{
  color: rgba(255, 255, 255, 0.37);
  font-size: 3.1rem;
  margin-left: .7rem;
}
h2{
  font-size: 3rem;
  margin: 0;
  color: #fff;
  margin-bottom: .4rem;
}
.line{
  border: 1px solid #F53EFF;
  width: 30px;
}
.container__button{
  margin: 0 2rem 2.5rem 2rem;
}
.button__dark{
  width: 180px;
  height: 54px;
  background: #4A004E;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__material{
  color: #FFF;
  margin: .5rem 2rem 1.5rem 2rem;
  font-size: 1.1rem;
}
</style>
