import React from 'react'
import bas from "../Assets/bas.svg"
import axios from "axios"
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom"
import "./Home.css";

export default function Home(props) {
const {search,rangeValue}=props
const [data,Setdata]=useState({})
const [isLoading,setIsLoading]=useState(true)

const fletchData = async ()=>{
  const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}&priceMin=${rangeValue[0]}&priceMax=${rangeValue[1]}`)
  Setdata(response.data.offers)
  setIsLoading(false)
  console.log(response.data);
}
 

useEffect(()=>{
  fletchData()},[]
)
    return (
    <div>       
        <div className="home-bg-img">
            <img className="home-bas-forme " alt="home" src={bas} />
        </div>
        <div>
        {isLoading ? 
        <div>loading...</div> :
        <div className="home-container">
            {data.map((offer,index) => {
                return(
                <div className="home-card">
                <Link to={`/offer/${offer._id}`} key={offer._id}>
                <div>
                    <img className="product-image" alt="offre"  src={offer.product_image.secure_url}/>
                </div>
                <div>
                    <span>{offer.product_price} €</span>
                </div>
                </Link>
                </div>
            )})}

        </div>
        }
        </div>
    </div> 
    )
}
