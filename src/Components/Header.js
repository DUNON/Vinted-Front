import React from 'react'
import logo from "../Assets/vinted.png"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="header" >
            <Link  to="/">
            <img className="image"alt="logo" src={logo}/>
            </Link>
            <div>
            <Link to="/signup">
            <button>s'inscrire</button>
            </Link>
            <button>se connecter</button>
            <button>vends tes articles</button>
            </div>
            
        </div>
    )
}
