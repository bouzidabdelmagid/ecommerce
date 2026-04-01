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
import { ToastContainer } from 'react-toastify';
import AdminLayOut from './pages/Admin/pages/AdminLayOut';
import Dashboard from './pages/Admin/pages/Dashboard';
import Catogories from './pages/Admin/pages/Catogories';
import Products from './pages/Admin/pages/Products';
import Orders from './pages/Admin/pages/Orders';
import Users from './pages/Admin/pages/Users';

function App() {
  return (
    <div>
      <ToastContainer position='top-right' autoClose={4000}/>
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
        <Route path='/admin/*'element={<AdminLayOut/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='categories' element={<Catogories/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='orders' element={<Orders/>}/>
        <Route path='users' element={<Users/>}/>  

        </Route>
      </Routes>
      </BrowserRouter>

 
    </div>
  );
}

export default App;
