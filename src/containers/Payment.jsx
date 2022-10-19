import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import '@styles/components/Payment.css';
import AppContext from '@context/AppContext';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { state, getTotal, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  const paypalOptions = {
    clientId: "AfHfz-lj6UhEZj93a2xLo_ZtrHVE9WBPMfjWj1y8ZBCUCscxKr1z9tkPpEO8OnaFq8UYSzpUD1eTSxdZ",
    intent: "capture",
    currency: "USD"
  }

  const buttonStyles = {
    layout: "vertical",
    shape: "rect"
  }

  const handlePaymentSuccess = (data) => {
    if (data.status == "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate("/checkout/success");
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item, key) => (
          <div key={key} className="Payment-item">
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={getTotal()}
            onPaymentStart={() => console.log("Start Payment")}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
