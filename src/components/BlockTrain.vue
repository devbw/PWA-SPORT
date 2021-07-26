<template>
  <div class="block__train">
    <p>Choisissez la durée</p>
    <div class="block__timer">
      <input type="range" max="55" min="5" v-model="minutes" />
      <span class="input__price">{{ minutes }} minutes</span>
    </div>
    <p>Choisissez le matériel</p>
    <div class="block__checkbox">
      <div class="block__display">
        <div>
          <input
            type="checkbox"
            id="noMaterial"
            class="checkboxs"
            value="noMaterial"
            v-model="checkedMaterials"
          />
          <label for="noMaterial"></label>
        </div>
        <div class="checkbox__text">
          <span>Poids de corps</span>
        </div>
      </div>
      <div class="block__display">
        <div>
          <input
            type="checkbox"
            id="kettlebell"
            class="checkboxs"
            value="kettlebell"
            v-model="checkedMaterials"
          />
          <label for="kettlebell"></label>
        </div>
        <div class="checkbox__text">
          <span>Paire d'haltères / kettlebell</span>
        </div>
      </div>
      <div class="block__display">
        <div>
          <input
            type="checkbox"
            id="pullup"
            class="checkboxs"
            value="pullUp"
            v-model="checkedMaterials"
          />
          <label for="pullup"></label>
        </div>
        <div class="checkbox__text">
          <span>Barre de traction</span>
        </div>
      </div>
      <div class="block__display">
        <div>
          <input
            type="checkbox"
            id="dips"
            class="checkboxs"
            value="dipsBar"
            v-model="checkedMaterials"
          />
          <label for="dips"></label>
        </div>
        <div class="checkbox__text">
          <span>Station de dips</span>
        </div>
      </div>
    </div>
    <Button message="Commencer !" />
  </div>
</template>

<script>
import Button from "@/components/TrainButton.vue";
import Exercices from '../assets/allExercices.js'

export default {
  name: "BlockTrain",
  components: {
    Button,
  },
  data() {
    return {
      minutes: 0,
      checkedMaterials: [],
      exercices: [],
    };
  },
  methods: {
    getExercices() {
      this.exercices.push(Exercices);
      console.log(this.exercices);
    },
  },
  created() {
    this.getExercices();
  }
};
</script>

<style scoped>
input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 25px;
  background: rgba(255, 255, 255, 0.5);
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  background: linear-gradient(to right, #010030, #7303c0, #ec38bc);
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

.block__train {
  width: 100%;
  max-width: 500px;
  border: 2px solid #b800c2;
  box-sizing: border-box;
  border-radius: 20px 20px 20px 0px;
  padding: 1rem 0;
  margin-bottom: 2rem;
}
.block__checkbox {
  padding-left: 0.8rem;
}
.block__display {
  display: flex;
  align-items: flex-end;
}
.block__timer {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  margin: 2rem 0 2rem 0;
}
.block__timer > span {
  margin: 0.3rem 0 0 0.2rem;
}
.checkbox__text {
  padding-bottom: 0.3rem;
}
.checkbox__text > span {
  padding-left: 0.5rem;
}
p {
  color: #fff;
  margin-top: 0;
  padding: 0 1rem;
}
label {
  color: #fff;
}
input[type="range"] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  margin-bottom: 1rem;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type="range"]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type="range"]::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid #fff;
  height: 36px;
  width: 16px;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); /* Add cool effects to your sliders! */
}

/* All the same stuff for Firefox */
input[type="range"]::-moz-range-thumb {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border: 1px solid #fff;
  height: 16px;
  width: 16px;
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
}

/* All the same stuff for IE */
input[type="range"]::-ms-thumb {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border: 1px solid #fff;
  height: 16px;
  width: 16px;
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #b800c27e;
  border-radius: 10px;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #b800c27e;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #b800c27e;
  border-radius: 10px;
}

input[type="range"]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #b800c27e;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
input[type="range"]:focus::-ms-fill-lower {
  background: #b800c27e;
}
input[type="range"]::-ms-fill-upper {
  background: #b800c27e;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
input[type="range"]:focus::-ms-fill-upper {
  background: #b800c27e;
}
</style>
