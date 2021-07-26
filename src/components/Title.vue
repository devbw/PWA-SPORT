<template>
  <div class="block__title">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type : String,
      default: 'Bonjour',
    }
  }
}
</script>

<style scoped>
.block__title{
  width: 100%;
  max-width: 500px;
}
h2{
  color: #FFF;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 0;

}
</style>