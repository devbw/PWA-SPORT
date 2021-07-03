<template>
  <div class="container-purple">
    <div class="container__line">
      <div class="line"></div>
    </div>
    <div class="container__benefits">
      <div class="container__benefit">
        <div class="container__benefit-text">
          <i class="uil uil-rocket benefit__icon"></i>
          <span class="fade-in">Boost your cardio</span>
        </div>
      </div>
      <div class="container__benefit">
        <div class="container__benefit-text">
          <i class="uil uil-dumbbell benefit__icon"></i>
          <span class="fade-in">Grow your muscles</span>
        </div>
      </div>
      <div class="container__benefit">
        <div class="container__benefit-text">
          <i class="uil uil-stopwatch benefit__icon"></i>
          <span class="fade-in">In just 30 minutes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Benefit',
}
</script>


<style scoped>
.container__benefits{
  margin: 3rem 2rem 2.5rem 2rem;
}
.container__benefit-text{
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
}
.line{
  border: 1px solid #F53EFF;
  width: 30px;
}
h2{
  font-size: 2rem;
  margin: 0;
  color: #000;
  margin-bottom: .4rem;
}
.benefit__icon{
  color: rgba(255, 255, 255, 0.37);
  font-size: 2.5rem;
  margin-bottom: .5rem;
}
span{
  font-weight: bold;
  color: #FFF;
  font-size: 1.2rem;
}
</style>
