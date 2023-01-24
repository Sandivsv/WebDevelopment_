// npm install react-router-dom@5.3.1

import { useEffect, useState } from 'react';
import {signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import {auth} from './firebase';  // firebsae.js
// import { async } from '@firebase/util';




function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(false);
    const [userInfo, setUserInfo] = useState();
    const [mainLoader,setMainLoader] = useState(true);



    const trackEmail = function(e){
        setEmail(e.target.value);
    }

    const trackPassword = function(e){
        setPassword(e.target.value);
    }

    const printDetails = async function(){
        // alert(email + " " + password)
        try{
            setLoader(true);
            let useCred = await signInWithEmailAndPassword(auth, email, password);
            // console.log(useCred)         // check user Credential
            setUserInfo(useCred.user);
        }catch(err){
            setError(err.message);
            setTimeout(()=>{
                setError("");
            }, 3000)
        }
        setLoader(false);
    }


    const logout= async function(){
        await signOut(auth);
        setUserInfo(null);
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
            //   const uid = user.uid;
              setUserInfo(user);
            //   console.log(user);
              // ...
            } else {
              // User is signed out
              // ...
              setUserInfo(null);
            }
            setMainLoader(false);
        })
    },[])






    return(
        <>
            {mainLoader === true?<h1>Page is Loading..</h1>:
              error !== "" ? <h1>Error is {error}</h1>:
                loader === true? <h1>...Loading</h1>:
                    userInfo != null ? <> <h1>User is {userInfo.uid}</h1>
                                        <button onClick={logout}>Log out</button>
                                </>:
                    <>  <input type="email" onChange={trackEmail}  placeholder="email" />
                        <br></br>
                        <input type="password" onChange={trackPassword} placeholder="password" />
                        <br></br>
                        <button type="click" onClick={printDetails}>Login</button>
                    </> 
            }
            
        </>
    )
}

export default Login;