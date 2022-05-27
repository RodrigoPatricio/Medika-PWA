<template>
  <input type="submit" value="Desconectar" @click="desconectar()" />
</template>

<script>
import { getAuth, signOut } from "@firebase/auth";

export default {
  name: "HomePage",
  methods: {
    desconectar() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          router.replace("/login");
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>

<style scoped>
input {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
