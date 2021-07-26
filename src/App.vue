<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300&display=swap');

body{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
h3{
  color: #B800C2;
}
h4{
  margin-top: .5rem;
}
span{
  font-weight: bold;
  color: #000000;
  font-size: 1.2rem;
}
.footer{
  position: fixed;
  bottom: 0;
}
.main__container{
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
.main__container-exercices{
  width: 100%;
  max-width: 800px;
  padding-top: .5rem;
  padding-bottom: 1rem;
  background: #FFF;
  border-radius: 20px 20px 0px 0px;
  margin: 0 auto;
  margin-top: -50px;
}
.container__exercices{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container__line{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
}
.container__button-exercices{
  margin: 2rem;
}
.container-purple{
  width: 100%;
  max-width: 800px;
  padding-top: .5rem;
  padding-bottom: 6rem;
  background: #B800C2;
  border-radius: 20px 20px 0px 0px;
  margin: 0 auto;
}
.benefit__icon{
  font-size: 1.7rem;
  margin: 0 .5rem 0 .5rem;
  color: rgba(255, 255, 255, 0.37);
}
.button{
  width: 150px;
  height: 54px;
  background: #B800C2;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-top: .8rem;
}
.uil-times{
  margin-left: .7rem;
  margin-right: .3rem;
  font-size: 2rem;
}
.fade-in {
	-webkit-animation: fade-in 1.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: fade-in 1.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>