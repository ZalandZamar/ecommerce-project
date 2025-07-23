import { CheckoutHeader } from './checkout-header.jsx';
import { OrderSummary } from './OrderSummary.jsx';
import { PaymentSummary } from './PaymentSummary.jsx';
import './checkout.css'

export function CheckoutPage({ cart, loadCart }) {
  return (
    <>
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} loadCart={loadCart} />

          <PaymentSummary loadCart={loadCart} cart={cart} />
        </div>
      </div>
    </>
  );
}