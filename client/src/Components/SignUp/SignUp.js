import React, { useState } from 'react';
import axios from 'axios';

function SignUp () {
    const [usrnm, setUsrnm] = useState("")
    const [pass, setPass] = useState("")
    const [registerRedirect, setRedirect] = useState("/")



    const handleSubmit = () => {
        axios.post("/api", {
            email: usrnm,
            password: pass
        }).then(()=> {
            console.log("successful registration")
        }).catch(err => {
            console.log(err)
            console.log("problem signing up")
        })
    }
    return (
        <div>
            <p>Register</p>
            <input name="username" placeholder="username" value={usrnm} onChange={(e) => setUsrnm(e.target.value)} />
            <input name="pass" placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            <button onClick={handleSubmit}>
                register
            </button>
        </div>
    )
}

export default SignUp
