<template>
  <section class="login">
    <LoginForm @user-data="userData()" />
  </section>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";

export default {
  name: "HomeView",
  components: {
    LoginForm,
  },
  methods: {
    userData() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          router.replace("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert("Email ou Senha inválidos!");
        });
    },
  },
};
</script>
