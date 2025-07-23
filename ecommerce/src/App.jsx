import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HomePage } from './pages/home/HomePage.jsx';
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx';
import { Orders } from './pages/orders/OrdersPage.jsx';
import { TrackingPage } from './pages/tracking/TrackingPage.jsx';

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('http://localhost:3000/api/cart-items?expand=product');
    setCart(response.data);
  }

  useEffect(() => {
      loadCart();
    }, []);

  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart} loadCart={loadCart} />}></Route>
      <Route path='/checkout' element={<CheckoutPage cart={cart} loadCart={loadCart} />}></Route>
      <Route path='/orders' element={<Orders cart={cart} />}></Route>
      <Route path='/tracking' element={<TrackingPage cart={cart} />}></Route>
    </Routes>
  );
}

export default App
