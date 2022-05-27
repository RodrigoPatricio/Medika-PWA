<template>
  <div class="container">
    <div class="flex">
      <h4>Amanda Caroline</h4>
      <div class="flex-around">
        <img src="" alt="Clock" />
        <p>10:00</p>
        <img src="" alt="Whatsapp" />
      </div>
    </div>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit.
    </p>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: auto;
  border-bottom: 1px solid #78c4fb;
}
.flex {
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flex-around {
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
  font-size: 12px;
}
</style>
