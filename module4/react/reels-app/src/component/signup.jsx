import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase"


function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const trackName = function(e){
        setName(e.target.value);
    }

    const trackEmail = function(e){
        setEmail(e.target.value);
    }

    const trackPassword = function(e){
        setPassword(e.target.value);
    }

    async function processSignup(){
        let userCred = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCred);
    }



    return(
        <>
            <input type="text" placeholder="Full Name" onChange={trackName} /> <br />
            <input type="email" placeholder="Email" onChange={trackEmail} /> <br />
            <input type="password" placeholder="Password" onChange={trackPassword} /> <br />
            <button onClick={processSignup}>Sign up</button>
        </>
    )
}


export default Signup;