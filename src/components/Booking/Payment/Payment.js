import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../../CheckoutForm/CheckoutForm';

const Payment = (props) => {
    const handlePlaceOrder=(payment)=>{
        const orderDetails={
            payment: payment
        }
        props.paymentHandler(orderDetails);
    }
    const stripePromise = loadStripe('pk_test_9LdgoCBp8Incv69ExYHe6Z7700x0gmpujW');
    return (
        <div>
             <div className="payment-form container">
            <h4>Payment Selection</h4>
            
            <Elements stripe={stripePromise}>
                    <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
            </Elements>
            </div>
           
        </div>
    );
}
export default Payment;