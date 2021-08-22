<template>
  <div class="background">
    <Header />
    <Title title="Votre entraînement"/>
    <Custom />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Title from '@/components/Title.vue';
import Custom from '@/components/CustomTrain.vue';

export default {
  name: "HomeTrainings",
  components: {
    Header,
    Title,
    Custom,
  },
};
</script>

<style>
.background {
  background: #010030;
  min-height: 100vh;
  max-height: 100%;
  padding: .8rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
span{
  color: rgba(255, 255, 255, 0.795);
  font-size: 0.8rem;
}
</style>
