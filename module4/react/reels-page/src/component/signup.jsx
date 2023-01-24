import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "./firebase"
import {addDoc,collection} from "firebase/firestore"


function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[loader, setLoader] = useState(false);
    const[error, setError] = useState("");
    const[user, setUser] = useState("");

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
        try{
            setLoader(true);
            let userCred = await createUserWithEmailAndPassword(auth, email, password)
            // console.log(userCred.user);
            const docRef = await addDoc(collection(db,"users"),{
                //"email":email,
                email,
                name,
                reelsIds:[],
                profileImgUrl:"",
                userId:userCred.user.uid
            });
            
            setUser(userCred.user);

        }catch(error){
            setError(error.message);
            setTimeout(()=>{
                setError("")
            },2000)
        }
        setLoader(false);
    }



    return(
        <>
            {error!==""?<h1>Error is {error}</h1>:
            loader === true?<h1>...Loading</h1>:
                user!==""?<h1>Sign up User is {user.uid}</h1>:
                <>
                    <input type="text" placeholder="Full Name" onChange={trackName} /> <br />
                    <input type="email" placeholder="Email" onChange={trackEmail} /> <br />
                    <input type="password" placeholder="Password" onChange={trackPassword} /> <br />
                    <button onClick={processSignup}>Sign up</button>
                </>
            }
        </>
    )
}


export default Signup;