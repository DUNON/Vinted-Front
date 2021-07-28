import {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom' 

export default function Login(props) {
    const{setUser}=props
    const history = useHistory()

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const handleSubmit= async(event)=>{
        event.preventDefault()
        try {
            const response=await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/login",{
                email:email,
                password:password
            })
            const token = response.data.token
            if (token) {
                setUser(token)
                history.push("/")
            } else {
                alert("Une erreur est survenue, veuillez ressayer")
            }
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

    }
    
    return (
        <div>
          <h1>Se connecter</h1>
          <form onSubmit={handleSubmit}>
            <input
            type="email"
            value={email}
            onChange={(event)=>{
                setEmail(event.target.value)
            }}
            placeholder="Adresse email"
            />
            <br/>
            <input
            type="password"
            value={password}
            onChange={(event)=>{
                setPassword(event.target.value)
            }}
            placeholder="Mot de passe"
            />
            <br/>
            <button type="submit">Se connecter</button>
          </form>
        </div>
    )
}
