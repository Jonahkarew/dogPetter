import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

function Nav() {
    return (
        <ul>
            <li><Link to="/">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    )
}

export default Nav
