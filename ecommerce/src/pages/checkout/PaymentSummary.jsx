import axios from "axios";
import { useState, useEffect } from "react";
import { formatMoney } from "../../utils/money.js";

export function PaymentSummary({ loadCart, cart }) {
  const [PaymentSummary, setPaymentSummary] = useState([]);

  const getPaymentSummary = async () => {
    const response = await axios.get('http://localhost:3000/api/payment-summary');
    setPaymentSummary(response.data);

    loadCart();
  }

  useEffect(() => {
    getPaymentSummary();
  }, [cart]);

  return (
    <div className="payment-summary">
      <div className="payment-summary-title">
        Payment Summary
      </div>

      <div className="payment-summary-row">
        <div>Items ({PaymentSummary.totalItems}):</div>
        <div className="payment-summary-money">
          {formatMoney(PaymentSummary.productCostCents)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">
          {formatMoney(PaymentSummary.shippingCostCents)}
        </div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">
          {formatMoney(PaymentSummary.totalCostBeforeTaxCents)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">
          {formatMoney(PaymentSummary.taxCents)}
        </div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">
          {formatMoney(PaymentSummary.totalCostCents)}
        </div>
      </div>

      <button className="place-order-button button-primary">
        Place your order
      </button>
    </div>
  );
}