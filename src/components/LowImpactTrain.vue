<template>
  <div class="block__train">
    <span> {{ message }} </span>
    <Button message="Patientez"/>
  </div>
</template>

<script>
import Button from '@/components/TrainButton.vue'

export default {
  name: "LowImpactTrain",
  components: {
    Button,
  },
  props: {
    message: {
      type: String,
      default: 'Bonjour'
    }
  }
}
</script>

<style scoped>
.block__train {
  width: 100%;
  max-width: 500px;
  border: 2px solid #b800c2;
  box-sizing: border-box;
  border-radius: 20px 20px 20px 0px;
  padding: 1rem 0;
  margin-bottom: 2rem;
}
.trains{
  display: flex;
  justify-content: space-around;
}
.train{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #B800C2;
  box-sizing: border-box;
  border-radius: 50px;
  width: 77px;
  height: 77px;
  cursor: pointer;
  transition: .5s;
}
.train:hover{
  filter: blur(2px);
}
span{
  color: #FFF;
  font-size: 1rem;
  padding-left: 0.8rem;
}
</style>
