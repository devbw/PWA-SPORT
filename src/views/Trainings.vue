<template>
  <div class="main__container">
    <div class="container">
      <div class="container__line">
        <div class="line"></div>
      </div>
    </div>
    <div class="container__text">
      <h2 class="container__text-title">Random Training</h2>
      <p class="container__text-p">
        One random training that lasts 30 minutes.
        Repeat the 6 exercices until the end of the counter.
        Don’t quit, finish the training !</p>
      <div class="container__button">
        <router-link tag="button" to="/random-training" class="button">
          <i class="uil uil-rocket benefit__icon"></i>
          Let's Go !
        </router-link>
      </div>
    </div>
    <div class="container__text">
      <h2 class="container__text-title">Training By Level</h2>
      <p class="container__text-p">
        Random training is too hard ? <br>
        Level up your core and strength with these easier trainings.</p>
      <div class="container__button">
        <router-link tag="button" to="/soft-training" class="button">
          <i class="uil uil-rocket benefit__icon"></i>
          Soft
        </router-link>
        <span>4 exercices - 10 minutes</span>
      </div>
      <div class="container__button">
        <router-link tag="button" to="/middle-training" class="button">
          <i class="uil uil-rocket benefit__icon"></i>
          Middle
        </router-link>
        <span>4 exercices - 20 minutes</span>
      </div>
      <div class="container__button">
        <router-link tag="button" to="/hard-training" class="button">
          <i class="uil uil-rocket benefit__icon"></i>
          Hard
        </router-link>
        <span>5 exercices - 30 minutes</span>
      </div>
    </div>
    <div class="container__text">
      <h2 class="container__text-title">Low Impact Training</h2>
      <p class="container__text-p">
        Do you have joint's problem ?<br>
        Don't worry, these trainings are for you !
      </p>
      <h3>
        Work in progress !
      </h3>
      <img src="../assets/pictures/inprogress.png" alt="in-progress-pictures" class="heartbeat">
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>


import Footer from '@/components/Footer.vue'

export default {
  name: 'Trainings',
  components: {
    Footer,
  }
}
</script>

<style scoped>
span{
  font-size: .8rem;
}
.container{
  width: 100%;
  max-width: 800px;
  padding-top: .5rem;
  padding-bottom: 2rem;
  background: #FFF;
  border-radius: 20px 20px 0px 0px;
  margin: 0 auto;
  margin-top: -50px;
}
.line{
  border: 1px solid #F53EFF;
  width: 30px;
}
.container__button{
  margin-bottom: 3rem;
}
.container__text{
  margin: 0 2rem 5rem 2rem;
}
.container__text-title{
  color: #4A004E;
}
.container__text-p{
  margin-bottom: 1.5rem;
}
.benefit__icon{
  font-size: 1.7rem;
  margin: 0 .5rem 0 .5rem;
  color: rgba(255, 255, 255, 0.37);
}
.heartbeat {
	-webkit-animation: heartbeat 8s ease-in-out infinite both;
	animation: heartbeat 8s ease-in-out infinite both;
}
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
</style>