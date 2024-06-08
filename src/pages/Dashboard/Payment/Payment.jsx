import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {
  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Please pay first"></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
        <CheckoutForm />
        </Elements>
      </div>
    </div>
  )
}

export default Payment
