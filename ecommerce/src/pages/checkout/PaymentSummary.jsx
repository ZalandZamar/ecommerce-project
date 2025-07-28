import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api.js";
import { formatMoney } from "../../utils/money.js";

export function PaymentSummary({ loadCart, cart }) {
  const [PaymentSummary, setPaymentSummary] = useState([]);

  const navigate = useNavigate();

  const getPaymentSummary = async () => {
    const response = await api.get('http://localhost:3000/api/payment-summary');
    setPaymentSummary(response.data);

    loadCart();
  }

  const createOrder = async () => {
    await api.post('http://localhost:3000/api/orders');

    await loadCart();
    navigate('/orders');
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

      <button className="place-order-button button-primary"
        onClick={createOrder}>
        Place your order
      </button>
    </div>
  );
}