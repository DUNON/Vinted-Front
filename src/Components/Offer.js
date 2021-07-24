import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function Offer() {
    const {id} = useParams()
    const [data,setData]=useState({})
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        const fletchData= async ()=>{
            const response= await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`)
            //  console.log(response.data);
            setData(response.data)
            setIsLoading(false)
        }
        fletchData()
    },[id])//pour enlever le warning et faire effect au changement id
    console.log(data);
    return (
       
        <div className="container">
            {isLoading ? <div>Loading... </div> :
            <div className="article">
                <div>
                    <img alt={data.product_name} src={data.product_image.secure_url}/>
                </div>
                <div>
                    <h3>{data.product_price} €</h3>
                {data.product_details.map((elem,index)=>{ 
                    //  ca retourne un [] obj product_details: Array(4)
                    //     0: {MARQUE: "ZARA"}
                    //     1: {ÉTAT: "TRÈS BON ÉTAT"}
                    //     2: {COULEUR: "MARRON"}
                    //     3: {EMPLACEMENT: "DEN BOSCH, NEDERLAND"}
                    //pour recuperer la key et le contenu fct Object.Keys
                    const keys= Object.keys(elem)
                    console.log(keys);
                    return (
                        <p>{keys[0]} : {elem[keys[0]]}</p>
                    )
                })}
                </div>
            </div>
            }
        </div>
    )
}
