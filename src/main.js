import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxbM80ztPOtG6lUpOEQz8-IwksV6GT7I4",
  authDomain: "medikadb.firebaseapp.com",
  projectId: "medikadb",
  storageBucket: "medikadb.appspot.com",
  messagingSenderId: "912461883342",
  appId: "1:912461883342:web:456ff65459558724faad9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
