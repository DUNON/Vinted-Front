import { useStripe,useElements,CardElement} from "@stripe/react-stripe-js"
import axios from "axios"

export default function ChechOutForm({title,price}) {
    console.log(price);
    console.log(title);
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const cardElement = elements.getElement(CardElement);
        const stripeResponse = await stripe.createToken(cardElement, {
          name: "Id de l'acheteur",
        });

        const stripeToken = stripeResponse.tokenid;

        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/payment",
          {
            token: stripeToken,
            title: title,
            amount: price,
          }
        );

        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    return (
      <form onSubmit={handleSubmit} className="stripe-element">
        <CardElement />
        <button type="submit" className="btn-stripe">
          Pay
        </button>
      </form>
    );
}
