import { Routes, } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { HomePage } from './HomePage.jsx';
import { CheckoutPage } from './CheckoutPage.jsx';
import { Orders } from './OrdersPage.jsx';
import { TrackingPage } from './TrackingPage.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/checkout' element={<CheckoutPage />}></Route>
      <Route path='/orders' element={<Orders />}></Route>
      <Route path='/tracking' element={<TrackingPage />}></Route>
    </Routes>
  );
}

export default App
