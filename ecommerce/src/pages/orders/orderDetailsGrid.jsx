import { Fragment } from "react";
import dayjs from "dayjs";

export function OrderDetailsGrid({ order }) {
  return (
    <div className="order-details-grid">
      {order.products.map(orderProduct => {
        return (
          <Fragment key={orderProduct.product.id}>
            <div className="product-image-container">
              <img src={orderProduct.product.image} />
            </div>

            <div className="product-details">
              <div className="product-name">
                {orderProduct.product.name}
              </div>
              <div className="product-delivery-date">
                Arriving on: {dayjs(order.orderTimeMs).format('MMMM D')}
              </div>
              <div className="product-quantity">
                Quantity: {orderProduct.quantity}
              </div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src="images/icons/buy-again.png" />
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <a href="tracking.html">
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>

            <div className="product-image-container">
              <img src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" />
            </div>

            <div className="product-details">
              <div className="product-name">
                Adults Plain Cotton T-Shirt - 2 Pack
              </div>
              <div className="product-delivery-date">
                Arriving on: August 19
              </div>
              <div className="product-quantity">
                Quantity: 2
              </div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src="images/icons/buy-again.png" />
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <a href="tracking.html">
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}