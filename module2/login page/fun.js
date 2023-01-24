import { getAuth, signInWithEmailAndPassword } from "./firebase/auth";

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });



function login() {
    let email = document.getElementById("id").value;
    let pass = document.getElementById("password").value;
    console.log(email)
    signInWithEmailAndPassword(email, pass)
};

// export default fun()