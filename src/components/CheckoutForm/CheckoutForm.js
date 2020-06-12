import React, { useState } from 'react';
import './CheckoutForm.scss';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError]= useState(null)
    const [payment, setPayment]= useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        });
        if(error){
            setPayment(null);
            setPaymentError(error)
        }

        else{
            setPaymentError(null)
            setPayment(paymentMethod)
            const paymentFinished= {id: paymentMethod.id, last4: paymentMethod.card.last4}
            props.handlePlaceOrder(paymentFinished)
        }
    };

    return (
        
        <form className="mt-4" onSubmit={handleSubmit}>
       <div className="border p-5">
           <div className="d-flex justify-content-between">
              
                   <h5 className="mb-3">Credit Card</h5>
                   <div>
                   <img src="https://i.imgur.com/H4nJ7MD.png" alt=""/>
               <img src="https://i.imgur.com/h9XH510.png" alt=""/>
               <img src="https://i.imgur.com/nEQHctm.png" alt=""/>
                   </div>
           </div>
           <p className="pb-4">Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.</p>
       <CardElement />

{
    paymentError && <p style={{color: "red"}}>Payment Failed</p>
}

{
    payment && <p style={{color: "green"}}>Payment Successful: your payment- {payment.id}</p>
}
       </div>
       <div className="text-right"> 
       <button className="btn linear-bg text-light" type="submit" disabled={!stripe} style={{marginTop: "20px"}}>Continue to pay
        </button>
       </div>
        </form>
    );
};

export default CheckoutForm;