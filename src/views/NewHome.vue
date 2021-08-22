<template>
  <div class="background">
    <Header />
    <Message
      message="Voici la version 3 de cette application, avec son lot de nouveauté !"
    />
    <Message message="Entrainez-vous n’importe où, avec ou sans matériel !" />
    <Message
      message="Soyez maitre de votre temps, et définissez vous même la durée de votre entraînement."
    />
    <Message message="Configurez votre entraînement selon votre matériel." />
    <Button message="Commencer !" @click="redirect()" />
    <div class="version">
      <span>version 3.0.0</span>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Message from "@/components/HomeMessage.vue";
import Button from "@/components/HomeButton.vue";

export default {
  name: "NewHome",
  components: {
    Header,
    Message,
    Button,
  },
  methods: {
    redirect() {
      this.$router.push("/home-training");
    },
  },
};
</script>

<style>
.background {
  background: #010030;
  min-height: 100vh;
  max-height: 100%;
  padding: 0.8rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
span {
  color: rgba(255, 255, 255, 0.795);
  font-size: 0.8rem;
}
.version {
  position: fixed;
  bottom: 0;
  margin-bottom: 0.5rem;
}
</style>
