import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import "./Stripe.css";

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}



const makeId = (length) => {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }

   return result;
}

const PaymentForm = (props) => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const totalCost = props.totalCost * 100;
    const ticket = props.ticket;
    const [bookingReference, setBookingReference] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod;
                setBookingReference(makeId(5));
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: totalCost,
                    description: bookingReference,
                    id
                })

                if (response.data.success) {
                    console.log("Successful payment");
                    setSuccess(true);
                    
                }

            } catch (error) {
                console.log(error);

            }

        } else {
            console.log(error.message);
        }
    }

    return (
        <>
            {!success ? 
            <form onSubmit={handleSubmit}>
                <h4>Please Enter Payment Information:</h4>
                <fieldset className='FormGroup'>
                    <div className='formRow'>
                        <CardElement options={CARD_OPTIONS}/>
                    </div>
                    </fieldset>
                    <button id="pay">Pay</button>
            </form>    
            :
            <div>
                <h2>Your Movie has been booked.</h2>
                <h3>Booking Reference: <strong>#{bookingReference}</strong></h3>
                {ticket.map(ticket => (
                                <>
                                    <h3>{ticket.id + 1}: <strong>{ticket.movieName}</strong> at {ticket.showingTime}, Seat: {ticket.seat}</h3>
                                </>

                            ))}

            </div>
        }
        </>
    )

}

export default PaymentForm;