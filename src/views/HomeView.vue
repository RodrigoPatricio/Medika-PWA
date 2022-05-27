<template>
  <Header :userName="userName" />
  <HomePage />
  <Card />
  <Card />
  <Card />
  <Card />
  <Dock />
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/HomePage.vue";
import Header from "@/components/Header.vue";
import Dock from "@/components/Dock.vue";
import Card from "@/components/Card.vue"
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import router from "@/router";


export default {
  setup() {
    const auth = getAuth();
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        router.replace("/");
      } else {
        // User is signed out
        // ...
      }
    });
  },
  components: {
    HomePage,
    Header,
    Dock,
    Card,
  },
  data() {
    return {
      userName: "",
    };
  },
  created() {
    const auth = getAuth();
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.Username='userName'= user.displayName;
        // ...
        this.userName = user.displayName;
      } else {
        // User is signed out
        // ...name='userName'= "%user-name%";
      }
    });
  },
};
</script>
