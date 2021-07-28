import React from 'react'
import logo from "../Assets/vinted.png"
import { Link } from "react-router-dom"

export default function Header(props) {
    const {token,setUser}=props
    return (
        <div className="header" >
            <Link  to="/">
            <img className="image"alt="logo" src={logo}/>
            </Link>

            <div>
                {token ? 
           ( <button onClick={()=>{
               setUser("")
           }}>se deconnecter</button>) :
            (<>
            <Link to="/signup">
            <button>s'inscrire</button>
            </Link>
            <Link to="/login">
            <button>se connecter</button>
            </Link>
            <button>vends tes articles</button>
            </>
            )}
            </div>
            
        </div>
    )
}
