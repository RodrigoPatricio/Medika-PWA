<template>
  <SignupForm @user-data="getData()" />
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import router from "@/router";

export default {
  name: "SignupView",
  components: {
    SignupForm,
  },
  methods: {
    getData() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const auth = getAuth();
          updateProfile(auth.currentUser, {
            displayName: nome.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              console.log(user.displayName);
              router.replace("/");
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
  },
};
</script>
