import React from 'react'
import { useLocation} from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import "./Payment.css"
import CheckOutForm from "../Components/ChechOutForm"


const stripePromise = loadStripe("pk_test_51JLAZxAXbNC2weRlaXbebE6eQkKl4x2PnoYQBWyMCcpdk4Ha4m7FZDgAOIzu0l8U4Pub6MAbXKUgc2sXMkXVEdt900yibNJqrZ")


export default function Payment() {
const location = useLocation()
const {price,title} = location.state
console.log(location)

    return (
      <div className="payment-container">
        <div className="card-payment">
          <div className="info-payment">
            <div className="titre">
            <h3>Résumé de la commande</h3>
            </div>
            <div className="content">
            <p>
              Commande<span>{price}€</span>
            </p>
            <p>
              Frais protection acheteurs
              <span>€</span>
            </p>
            <p>
              Frais de port
              <span>€</span>
            </p>
            </div>
          </div>
          <div className="total payment"></div>
          <Elements stripe={stripePromise}>
              <CheckOutForm title={title} price={price}/>
          </Elements>
        </div>
      </div>
    );
}
