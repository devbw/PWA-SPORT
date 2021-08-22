<template>
  <div class="bloc-modale" v-if="display">
    <div class="overlay"></div>
    <div class="modale fade-in">
      <img :src="imgUrl" class="exercice_img">
      <button @click="closeModale" class="quit">Fermer</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modale',
  props: {
    display : {
      type: Boolean,
      required: true,
    },
    openModale : {
      type: Function,
      required: true,
    },
    closeModale: {
      type: Function,
      required: true,
    },
    imgUrl : {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.modale{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 500px;
  position: fixed;

}
.bloc-modale{
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container_modale_button{
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
.modale_button{
  background-color: var(--first-color-darker);
  border:none;
  border-radius: 10px;
  color:white;
  font-size: 1rem;
  margin: .5rem .5rem .5rem 0;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: .5s;
}
.modale_button:hover{
  background-color: var(--first-color);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.overlay{
  background: rgba(0,0,0,0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.exercice_img{
  width: 90%;
  height: auto;
  margin-bottom: 2rem;
  background: #FFF;
  border-radius: 10px;
  overflow: hidden;
}
.quit{
  background: transparent;
  border: 2px #B800C2 solid;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  color: white;
}
</style>