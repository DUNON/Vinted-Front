import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import "../Pages/Offer.css"
import {Link } from 'react-router-dom';

export default function Offer() {
    const { id } = useParams();
    const [offer, setOffer] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(()=>{
        const fletchData= async ()=>{
            const response= await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`)
            console.log(response.data);
            setOffer(response.data)
            setIsLoading(false)
        }
        fletchData()
    },[id])//pour enlever le warning et faire effect au changement id
    // console.log(data);
    return (
      <div className="offer-container">
        {isLoading ? (
          <div>Loading... </div>
        ) : (
          <div className="article">
            <div>
              <img
                className="offer-picture"
                alt={offer.product_name}
                src={offer.product_image.secure_url}
              />
            </div>
            <div className="offer-infos">
              <div className="offer-price">
                <h3>{offer.product_price} €</h3>
              </div>
              {offer.product_details.map((elem, index) => {
                //  ca retourne un [] obj product_details: Array(4)
                //     0: {MARQUE: "ZARA"}
                //     1: {ÉTAT: "TRÈS BON ÉTAT"}
                //     2: {COULEUR: "MARRON"}
                //     3: {EMPLACEMENT: "DEN BOSCH, NEDERLAND"}
                //pour recuperer la key et le contenu fct Object.Keys
                const keys = Object.keys(elem);
                // console.log(keys);
                return (
                  <div className="offer-details">
                    <p>
                      {keys[0]} : {elem[keys[0]]}
                    </p>
                  </div>
                );
              })}
              <Link to={{
                  pathname:"/payment",
                  state:{
                      title:offer.product_name,
                      price:offer.product_price
                  }
              }} >
                <button  className="btn-buy">Acheter</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
}
