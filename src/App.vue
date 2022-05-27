<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from "vue";
import router from "@/router";
import { getAuth, onAuthStateChanged } from "firebase/auth"

export default {
  setup() {
    onBeforeMount(() => {
      const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.replace("/login");
        } else {
          router.replace("/");
        }
      });
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");
#app, body {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
