<template>
<div class="display">
  <div class="block__message">
    <p>{{ message }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeMessage",
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
  width: 100%;
  max-width: 500px;
  background: #B800C2;
  border-radius: 20px 20px 20px 0px;
  padding: .5rem 0;
  margin: .5rem 0 .5rem 0;
  color: #FFF;
  transition: .3s;
}
.block__message:hover{
  background: #d313dd;
}
p{
  padding: 0 .8rem;
  margin: .5rem 0;
}
.display{
  display: flex;
  justify-content: left;
  width: 100%;
  max-width: 500px;
}
</style>
