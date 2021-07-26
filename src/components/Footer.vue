<template>
  <div class="main-header__container">
    <router-link tag="span" to="/" class="span__button">
      Home
    </router-link>
    <router-link tag="span" to="/trainings" class="span__button">
      Trainings
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main-header__container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px 5px 0px 0px;
  padding: 1rem 0 1rem 0;
  background-color: #FFF;
}
.span__button{
  font-weight: bold;
  color: #B800C2;
  font-size: 1rem;
  text-decoration: none;
  padding: 0 1rem 0 1rem;
}
</style>
