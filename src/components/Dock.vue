<template>
  <div class="container">
    <img src="@/assets/dock/inactive/profile.png" alt="profile-icon" />
    <img src="@/assets/dock/active/home.png" alt="home-icon" />
    <img src="@/assets/dock/inactive/settings.png" alt="settings-icon" />
  </div>
</template>

<script>
export default {
  name: "Dock",
};
</script>

<style scoped>
.container {
  display: flex;
  /* margin-top: 15px; */
  justify-content: space-around;
  flex-wrap: nowrap;

  position: fixed;
  height: 77px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  background: #ffffff;
  border-radius: 32px 32px 0px 0px;
  filter: drop-shadow(0px -1px 10px rgba(0, 0, 0, 0.25));
}
.container img {
  width: 35px;
  height: 35px;
  margin-top: 10px;
}
</style>
