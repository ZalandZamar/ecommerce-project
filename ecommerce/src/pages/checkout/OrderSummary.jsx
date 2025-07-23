import axios from "axios";
import dayjs from 'dayjs';
import { useState, useEffect } from "react";
import { formatMoney } from "../../utils/money.js";

export function OrderSummary({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  const getDeliveryOptions = async () => {
    const response = await axios.get('http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime');
    setDeliveryOptions(response.data);
  }

  useEffect(() => {
    getDeliveryOptions();
  }, [])

  return (
    <div className="order-summary">
      {
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(deliveryOption => {
            return deliveryOption.id === cartItem.deliveryOptionId;
          });
          
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image"
                  src={cartItem.product.image} />

                <div className="cart-item-details">
                  <div className="product-name">
                    {cartItem.product.name}
                  </div>
                  <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity: <span className="quantity-label">2</span>
                    </span>
                    <span className="update-quantity-link link-primary">
                      Update
                    </span>
                    <span className="delete-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>

                <div className="delivery-options">
                  <div className="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  {
                    deliveryOptions.map((deliveryOption) => {
                      const updateDeliveryOption = async () => {
                        await axios.put(`http://localhost:3000/api/cart-items/${cartItem.productId}`, {
                          deliveryOptionId: deliveryOption.id
                        })

                        loadCart();
                      }

                      return (
                        <div key={deliveryOption.id} className="delivery-option">
                          <input type="radio"
                            checked={cartItem.deliveryOptionId === deliveryOption.id}
                            onClick={updateDeliveryOption}
                            onChange={() => { }}
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`} />
                          <div>
                            <div className="delivery-option-date">
                              {dayjs(deliveryOption.estimatedDeliveryTImeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                              {
                                deliveryOption.priceCents > 0 ? formatMoney(deliveryOption.priceCents) : 'FREE Shipping'
                              }
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}