import { useState} from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom' 

export default function SignUp(props) {
const{setUser}=props
const [email,setEmail]=useState("")
const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
const [phone,setPhone]=useState("")
const history = useHistory()

const handleSubmit= async (event)=>{
    event.preventDefault()
 try {
    const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/signup",
    {
        username:username,
        email:email,
        phone:phone,
        password:password
    })
    const token = response.data.token;
   
    if (token) {
        setUser(token)
        history.push("/")
    } else {
        alert("Une erreur est survenue, veuillez ressayer")
    }
    
 } catch (error) {
     console.log(error);
 }   
    
} 

    return (
        <div>
            <h1>S'incrire</h1>
            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input 
                type="text" 
                value={username} 
                onChange={(event)=>{
                    setUsername(event.target.value);
                }}
                />
                <br/>
                <label>email</label>
                <input
                type="email" 
                value={email}
                onChange={(event)=>{
                    setEmail(event.target.value);
                }}
                />
                <br/>
                <label>phone</label>
                <input
                 type="text" 
                 value={phone}
                 onChange={(event)=>{
                    setPhone(event.target.value);
                }}
                 />
                <br/>
                <label>password</label>
                <input
                 type="password" 
                 value={password}
                 onChange={(event)=>{
                    setPassword(event.target.value);
                }}
                 />
                <br/>     
                <button type="submit">S'incrire</button> 


            </form>
        </div>
    )
}
