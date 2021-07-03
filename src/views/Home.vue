<template>
  <div class="home">
    <Header />
    <Benefit class="benefit"/>
    <Howcard class="howcard"/>
    <Trycard class="trycard"/>
    <Footer class="footer"/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Benefit from '@/components/Benefit.vue'
import Howcard from '@/components/Howcard.vue'
import Trycard from '@/components/Trycard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Benefit,
    Howcard,
    Trycard,
    Footer,
  }
}
</script>

<style scoped>
.howcard{
  margin-top: -50px;
}
.trycard{
  margin-top: -50px;
}
</style>
