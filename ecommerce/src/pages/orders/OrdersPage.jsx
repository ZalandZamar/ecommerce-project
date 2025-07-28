import axios from 'axios';
import { useEffect, useState } from 'react';
import api from '../../utils/api.js';
import { Header } from '../../components/header';
import { OrderHeader } from './orderHeader.jsx';
import { OrderDetailsGrid } from './orderDetailsGrid.jsx';
import './orders.css'

export function Orders({ cart }) {
  const [orders, setOrders] = useState([]);

  const getOrdersData = async () => {
    const response = await api.get('http://localhost:3000/api/orders?expand=products');
    setOrders(response.data);
  }

  useEffect(() => {
    getOrdersData();
  }, []);

  return (
    <>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {
            orders.map((order) => {
              return (
                <div className="order-container">

                  <OrderHeader order={order} />

                  <OrderDetailsGrid order={order} />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}