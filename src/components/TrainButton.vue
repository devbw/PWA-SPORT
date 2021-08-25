<template>
<div class="display">
  <div class="block__message">
    <p>{{ message }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'TrainButton',
  props: {
    message: {
      type: String,
      default: "Bonjour",
    },
  },
};
</script>

<style scoped>
.block__message{
  max-width: 300px;
  background: #010030b7;
  border-radius: 20px 20px 20px 0px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: .5rem 0 .5rem 0;
  color: #FFF;
  cursor: pointer;
  padding: .2rem 1rem;
  transition: .8s;
}
.block__message:hover{
  background: #010030;
}
p{
  padding: 0 .8rem;
  margin: .5rem 0;
  font-weight: 600;
}
.display{
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 500px;
  padding-left: 0.8rem;
  margin: 1.5rem 0 0 0;
}
</style>
