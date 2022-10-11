// npm install react-router-dom@5.3.1

import { useState } from 'react';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from './firebase';  // firebsae.js
// import { async } from '@firebase/util';




function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(false);
    const [userInfo, setUserInfo] = useState();



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
            setUserInfo(useCred);
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

    return(
        <>
            {error !== "" ? <h1>Error is {error}</h1>:
                loader === true? <h1>...Loading</h1>:
                    userInfo != null ? <> <h1>User is {userInfo.user.uid}</h1>
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