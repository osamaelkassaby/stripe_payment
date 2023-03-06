import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
import axios from 'axios';
import Page1 from "./components/page1";
import Page2 from "./components/page2";

// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

// const MySwal = withReactContent(Swal);

function App() {


  const [price, setprice] = useState("");

  const onchangeprice = (e) => {
    setprice(e.target.value);
  };


  const publishableKey =
    'pk_test_51MiIVZEk7Y5FJbDvP9YZIO7EHBebGb5WFOWdXwprA4eLm08GyOXex6BvmoezXmKWzdI5J2oVDE3VKtH1I8NOMTiq00t8k0ZsWU';
  const [product, setProduct] = useState({
    name: 'Server Dell',
    price: 1,
  });
  const priceForStripe = product.price * 100;

  // const handleSuccess = () => {
  //   MySwal.fire({
  //     icon: 'success',
  //     title: 'Payment was successful',
  //     time: 4000,
  //   });
  // };
  // const handleFailure = () => {
  //   MySwal.fire({
  //     icon: 'error',
  //     title: 'Payment was not successful',
  //     time: 4000,
  //   });
  // };
  const payNow = async token => {
    try {
      const response = await axios({
        url: 'http://localhost:5000/payment',
        method: 'post',
        data: {
          amount: product.price * 100,
          token,
        },
      });
      if (response.status === 200) {
     //   handleSuccess();
      }
    } catch (error) {
   //   handleFailure();
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>Complete payment </h2>
      <p>
        <span>Product: </span>
        {product.name}
      </p>
      <p>
        <span>Price: </span>${product.price}
      </p>
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is $${product.price}`}
        token={payNow} />
    </div>


  );
}

export default App;
