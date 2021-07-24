import React from 'react'
import home from "../Assets/home.jpg"
import axios from "axios"
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom"

export default function Home() {
const [data,Setdata]=useState({})
const [isLoading,setIsLoading]=useState(true)

const fletchData = async ()=>{
  const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers")
  Setdata(response.data.offers)
  setIsLoading(false)
}
// console.log(data);

useEffect(()=>{
  fletchData()},[]
)
    return (
    <div>       
        <div className="wrapper">
            <img alt="home" src={home}/>
        </div>
        <div>
        {isLoading ? 
        <div>loading...</div> :
        <div className="product">
            {data.map((offer,index) => {
                return(
                <Link to={`/offer/${offer._id}`} key={offer._id}>
                <div className="product-image">
                    <img alt="offre"  src={offer.product_image.secure_url}/>
                </div>
                </Link>
            )})}

        </div>
        }
        </div>
    </div> 
    )
}
