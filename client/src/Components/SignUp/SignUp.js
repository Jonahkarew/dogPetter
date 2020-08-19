import React, { useState } from 'react';

function SignUp () {
    const [usrnm, setUsrnm] = useState("")
    const [pass, setPass] = useState("")
    const [registerRedirect, setRedirect] = useState("/")

    const handleSubmit = () => {
        fetch("/api", 
        {method: "POST",
        body: {
            userName: usrnm,
            password: pass
        }}
        ).then(response => {
            if(response.data){
                console.log("successful signup")
                setRedirect("/login")
            }else{
                console.log("signup error")
            }
        }).catch(err => {
            console.log("error signing up")
            console.log(err)
        })
    }
    return (
        <div>
            <input name="username" placeholder="username" value={usrnm} onChange={(e) => setUsrnm(e.target.value)} />
            <input name="pass" placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            <button onClick={handleSubmit}>
                register
            </button>
        </div>
    )
}

export default SignUp
