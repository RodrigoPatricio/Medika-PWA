<template>
  <div class="container">
    <div class="header">
      <h1>
        Olá <span>{{ userName }},</span>
      </h1>
      <p>Você tem {{ agendamentos }} agendamentos hoje.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    userName: String,
  },
};
</script>

<style>
.header {
  width: 100%;
  background: #78c4fb;
  color: white;
  padding: 25px 0 5px 0;
  border-radius: 0px 0px 32px 32px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
}
.header img {
  width: 80px;
  height: 80px;
  border: 2px solid white;
  border-radius: 100%;
}
.header h1 {
  font-size: 22px;
  font-weight: 500;
}
.header span {
  font-size: 32px;
  font-weight: 600;
}
.header p {
  font-size: 16px;
  font-weight: 400;
}
</style>
