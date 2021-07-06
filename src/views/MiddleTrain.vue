<template>
  <div class="main__container">
    <HeaderReverse />
    <div class="main__container-exercices">
      <div class="container__line">
        <div class="line"></div>
      </div>
    </div>
    <div class="container__exercices">
      <h4>{{ exerciceOne }}</h4>
      <h4>{{ exerciceTwo }}</h4>
      <h4>{{ exerciceThree }}</h4>
      <h4>{{ exerciceFour }}</h4>
      <div class="container__button-exercices">
        <Countdown :default-minutes="20"/>
        <button class="button" @click='reload()'>
            <i class="uil uil-redo benefit__icon"></i>
            RELOAD
        </button>
        <router-link tag="button" to="/trainings" class="button">
            <i class="uil uil-times benefit__icon"></i>
            <span>QUIT</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import HeaderReverse from '@/components/HeaderReverse.vue'
import Countdown from '@/components/Countdown.vue'
import Exercices from '@/assets/exercices.js'
import genNumber from '@/services/generateNumber.js'

export default {
  name: 'MiddleTrain',
  components: {
    HeaderReverse,
    Countdown,
  },
  data() {
    return {
      exerciceOne: '',
      exerciceTwo: '',
      exerciceThree: '',
      exerciceFour: '',
    }
  },
  methods: {
    genExercice(){
      let first = genNumber(Exercices.exercicesOne.length);
      this.exerciceOne = Exercices.exercicesOne[first];

      let second = genNumber(Exercices.exercicesTwo.length);
      this.exerciceTwo = Exercices.exercicesTwo[second];

      let third = genNumber(Exercices.exercicesFive.length);
      this.exerciceThree = Exercices.exercicesFive[third];

      let fourth = genNumber(Exercices.exercicesSix.length);
      this.exerciceFour = Exercices.exercicesSix[fourth];
    },
    reload() {
      location.reload();
    }
  },
  created() {
    this.genExercice();
  }
}
</script>

<style scoped>
span{
  font-size: 1rem;
  color: white;
}
.line{
  border: 1px solid #F53EFF;
  width: 30px;
}
</style>