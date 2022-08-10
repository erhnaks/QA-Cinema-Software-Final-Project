import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51LUXF5IosAqVDF6GaCMxuMfc0mN67eBK8TrcmaCtL6pwNRTH5o9zyak5yuq4uPXLiPpPW7KOkgJ0hbxlPQx3ebRK00lnG5wI1S";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = (props) => {

    const totalCost = props.totalCost;
    const ticket = props.ticket;

return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm totalCost={totalCost} ticket={ticket} />
    </Elements>
)

}

export default StripeContainer;