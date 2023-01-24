// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADFNa6VajFtnoU0nWYg_xnGsOl7RjKbw8",
  authDomain: "class-demo-e42e1.firebaseapp.com",
  projectId: "class-demo-e42e1",
  storageBucket: "class-demo-e42e1.appspot.com",
  messagingSenderId: "642915638301",
  appId: "1:642915638301:web:55e6903ca16b0b415f3af4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export let auth = getAuth(app);
export const db = getFirestore(app);














// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app"
// import {getAuth} from "firebase/auth"
// import {getFirestore} from "firebase/firestore"

// import secret from "./secrets"

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// // Hide API using Secret 

// // const firebaseConfig = {
// //   apiKey: "AIzaSyADFNa6VajFtnoU0nWYg_xnGsOl7RjKbw8",
// //   authDomain: "class-demo-e42e1.firebaseapp.com",
// //   projectId: "class-demo-e42e1",
// //   storageBucket: "class-demo-e42e1.appspot.com",
// //   messagingSenderId: "642915638301",
// //   appId: "1:642915638301:web:55e6903ca16b0b415f3af4"
// // };

// // Initialize Firebase
// const app = initializeApp(secret);

// export let auth = getAuth(app);
// export const db = getFirestore(app);