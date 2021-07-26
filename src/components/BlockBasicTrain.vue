<template>
  <div class="block__train">
    <div class="trains">
      <div class="train">
        <span>10</span>
        <span>mn</span>
      </div>
      <div class="train">
        <span>20</span>
        <span>mn</span>
      </div>
      <div class="train">
        <span>30</span>
        <span>mn</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "BlockBasicTrain",
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
}
</style>
