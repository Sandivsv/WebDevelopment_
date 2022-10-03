import { useState } from "react";


function login(){
    const [email, setEmail] = useState('mar');
    const [password, setPassword] = useState('hgfdss');


    const trackEmail = function(e){
        setEmail(e.target.value);
    }

    const trackPassword = function(e){
        setPassword(e.target.value);
    }

    const printDetails = function(){
        alert(email + " " + password)
    }



    return(
        <>
            <input type="email" onChange={trackEmail}  placeholder="email" />
            <br></br>
            <input type="password" onChange={trackPassword} placeholder="password" />
            <br></br>
            <button type="click" onClick={printDetails}>Login</button>
        </>
    )
}

export default login