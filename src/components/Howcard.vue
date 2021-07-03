<template>
  <div class="container">
    <div class="container__line">
      <div class="line"></div>
    </div>
    <div class="container__title">
      <h2>HOW ?</h2>
      <i class="uil uil-stopwatch benefit__icon"></i>
    </div>
    <div class="container__path">
      <div class="container__path-text">
        <h3>1.</h3>
        <span class="fade-in">Go to training's page</span>
      </div>
      <div class="container__path-text">
        <h3>2.</h3>
        <span class="fade-in">Choose one</span>
      </div>
      <div class="container__path-text">
        <h3>3.</h3>
        <span class="fade-in">Run your workout !</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Howcard',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
  width: 100%;
  max-width: 800px;
  padding-top: .5rem;
  padding-bottom: 7rem;
  background: #fff;
  border-radius: 20px 20px 0px 0px;
  margin: 0 auto;
}
.container__title{
  display: flex;
  margin: 3rem 2rem 1rem 2rem;
}
.container__path{
  width: 100%;
}
.container__path-text{
  display: flex;
  flex-direction: column;
  margin: .5rem 2rem .5rem 2rem;
}
.line{
  border: 1px solid #808080;
  width: 30px;
}
h2{
  font-size: 3rem;
  margin: 0;
  color: #B800C2;
  margin-bottom: .4rem;
}
h3{
  font-size: 2rem;
  color: #B800C2;
  margin-bottom: .2rem;
}
.benefit__icon{
  color: rgba(184, 0, 194, 0.37);;
  font-size: 3.1rem;
  margin-left: .7rem;
}
</style>
