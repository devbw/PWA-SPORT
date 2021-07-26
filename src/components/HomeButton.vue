<template>
<div class="display">
  <div class="block__message">
    <p>{{ message }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeButton',
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
  background: #FFF;
  border-radius: 20px 0px 20px 20px;
  margin: .5rem 0 .5rem 0;
  color: #010030;
  cursor: pointer;
  padding: .4rem .3rem;
  transition: .8s;
}
.block__message:hover{
  transform: scale(1.1);
}
p{
  padding: 0 .8rem;
  margin: .5rem 0;
  font-weight: 600;
}
.display{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 500px;
}
</style>
