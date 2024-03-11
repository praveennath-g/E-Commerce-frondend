import React from "react";
import "./paymentprocess.css";

const PaymentGateway = ({ totalAmount, onSuccess, onCancel, isProcessing }) => {
  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // Random success or failure
      if (isSuccess) {
        onSuccess();
      } else {
        onCancel();
      }
    }, 2000);
  };

  return (
    <div className="payment-gateway">
      <p>Total Amount: ${totalAmount}</p>
      <h2>Payment Gateway</h2>
      <form>
        <div class="mb-3">
          <label for="paymentMethod" class="form-label">
            Select Payment Method
          </label>
          <select class="form-select" id="paymentMethod" required>
            <option value="select">...select...</option>
            <option value="creditCard">Credit Card</option>
            <option value="upi">UPI</option>
            <option value="netBanking">Net Banking</option>
          </select>
        </div>

        <div id="creditCardDetails">
          <div class="mb-3">
            <label for="cardNumber" class="form-label">
              Card Number
            </label>
            <input
              type="number"
              class="form-control"
              id="cardNumber"
              required
            ></input>
          </div>
          <div class="mb-3">
            <label for="expiryDate" class="form-label">
              Expiry Date
            </label>
            <input
              type="text"
              class="form-control"
              id="expiryDate"
              placeholder="MM/YYYY"
              required
            ></input>
          </div>
          <div class="mb-3">
            <label for="cvv" class="form-label">
              CVV
            </label>
            <input
              type="number"
              class="form-control"
              id="cvv"
              required
              placeholder="Minimun 3 digits"
            ></input>
          </div>
          <div class="mb-3">
            <label for="nameOnCard" class="form-label">
              Name on Card
            </label>
            <input
              type="text"
              class="form-control"
              id="nameOnCard"
              required
            ></input>
          </div>
        </div>

        <div id="upiDetails">
          <div class="mb-3">
            <label for="upiId" class="form-label">
              UPI ID
            </label>
            <input
              type="text"
              class="form-control"
              id="upiId"
              placeholder="optional"
            ></input>
          </div>
        </div>

        <div id="netBankingDetails">
          <div class="mb-3">
            <label for="bankName" class="form-label">
              Select Bank
            </label>
            <select class="form-select" id="bankName">
              <option value="bank1">...Select your Bank...</option>
              <option value="bank1">Union Bank</option>
              <option value="bank2">State Bank</option>
              <option value="bank3">Indian Bank</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block btn-lg button">
          once agin check
        </button>
      </form>
      <p>Total Amount: ${totalAmount}</p>
      {isProcessing ? (
        <p>Processing payment...</p>
      ) : (
        <button onClick={handlePayment}>PAY NOW</button>
      )}
    </div>
  );
};

const PaymentProcess = ({
  cart,
  onPaymentSuccess,
  onPaymentCancel,
  isProcessing,
}) => {
  const totalAmount = cart.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <div className="payment-process">
      <h1>PAYMENT PROCESS TO HERE</h1>
      <h3>Checkout Products</h3>
      <div>
        {/* Display items in the cart */}
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - Quantity: {item.qty} - Price: ${item.price} -
              Total: ${item.qty * item.price}
            </li>
          ))}
        </ul>
      </div>
      {/* Payment Gateway Component */}
      <PaymentGateway
        totalAmount={totalAmount}
        onSuccess={onPaymentSuccess}
        onCancel={onPaymentCancel}
        isProcessing={isProcessing}
      />
    </div>
  );
};

export default PaymentProcess;
