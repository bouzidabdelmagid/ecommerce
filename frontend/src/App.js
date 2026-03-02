import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop';
import Productdetail from './pages/Productdetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orderconfirmation from './pages/Orderconfirmation';
import Login from './pages/Login';
import Register from './pages/Register';
import Tracking from './pages/Tracking';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/shop'element={<Shop/>}/>
        <Route path='/productdetail/:id'element={<Productdetail/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/checkout'element={<Checkout/>}/>
        <Route path='/orderconfirmation'element={<Orderconfirmation/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/tracking'element={<Tracking/>}/>
      </Routes>
      </BrowserRouter>

 
    </div>
  );
}

export default App;
