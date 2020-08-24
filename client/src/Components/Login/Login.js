import React, {useState} from 'react';
import axios from "axios";

function Login() {

    const [email,  setEmail] = useState("")
    const [password,  setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post("/login", 
        {email: email,
        password: password})
        .then(res => {
            console.log(res)
        })
    }


    return (
        <div>
            <p>Login</p>
            <form>
                <input placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                <input placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                <button onClick={handleSubmit}>login!</button>
            </form>
        </div>
    )
}

export default Login
