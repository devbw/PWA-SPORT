<template>
  <div class="block">
    <div class="exercice" v-for="(exercice, name) in exercices" :key="name">
      <div class="display">
        <span class="exercice__name"> {{ exercice.name }} </span>
        <span class="exercice__name dark">Reps : {{ exercice.reps }}</span>
      </div>
      <div>
        <span class="link" @click="openModale(exercice.img)">Voir exercice</span>
      </div>
    </div>
    <modale :display="display" :openModale="openModale" :closeModale="closeModale" :imgUrl="currentImageUrl"></modale>
    <Countdown :defaultMinutes="displayTime" class="countdown"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import generateNumber from '@/services/generateNumber'
import Countdown from '@/components/Countdown'
import Modale from '@/components/Modale.vue'

export default {
  name: "CustomTrain",
  components:  {
    Countdown,
    Modale,
  },
  data() {
    return {
      chestExercice: [],
      backExercice: [],
      legsExercice: [],
      shoulderExercice: [],
      absExercice: [],
      cardioExercice: [],
      exercices: [],
      displayTime: parseInt(localStorage.getItem('time')),
      display: false,
      currentImageUrl: null
    }
  },
  props: {
    reps: {
      type : Number,
      default: 10,
    },
  },
  computed: mapGetters('exercices', { storeExercices: 'exercices' }),
  mounted() {
    this.putArrayExercices();
  },
  methods: {
    putArrayExercices(){
      this.cardioExercice = this.storeExercices.filter(exercice => exercice.muscles === "Cardio");
      this.exercices.push(this.cardioExercice[generateNumber(this.cardioExercice.length)]);

      this.chestExercice = this.storeExercices.filter(exercice => exercice.muscles === "Pectoraux");
      this.exercices.push(this.chestExercice[generateNumber(this.chestExercice.length)]);

      this.legsExercice = this.storeExercices.filter(exercice => exercice.muscles === "Jambes");
      this.exercices.push(this.legsExercice[generateNumber(this.legsExercice.length)]);

      this.backExercice = this.storeExercices.filter(exercice => exercice.muscles === "Dos");
      this.exercices.push(this.backExercice[generateNumber(this.backExercice.length)]);

      this.shouldersExercice = this.storeExercices.filter(exercice => exercice.muscles === "Epaules");
      this.exercices.push(this.shouldersExercice[generateNumber(this.shouldersExercice.length)]);

      this.absExercice = this.storeExercices.filter(exercice => exercice.muscles === "Abdos");
      this.exercices.push(this.absExercice[generateNumber(this.absExercice.length)]);
    },
    openModale(imgUrl) {
      this.display = true;
      this.currentImageUrl = imgUrl;
    },
    closeModale() {
      this.display = false;
    },
  }
};
</script>

<style scoped>
.block{
  width: 100%;
  max-width: 500px;
}
.exercice{
  background: #B800C2;
  border: 2px solid #B800C2;
  box-sizing: border-box;
  border-radius: 20px 20px 20px 0px;
  margin-top: 1rem;
  width: 100%;
  padding: .8rem;
}
.exercice:nth-last-child(2) {
  margin-bottom: 5rem;
}
.display {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.link{
  color: #010030;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 0.3rem 0.7rem;
  border-radius: 10px;
  cursor: pointer;
}
.exercice__name{
  font-size: 1rem;
  width: 50%;
}
.dark{
  color: #010030;
  text-align: right;
}
.exercice_img{
  width: 90%;
  height: auto;
}
.countdown{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
