import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutAction } from '../redux/actions/useraction'
import { toast } from 'react-toastify'

const Navbar = () => {
  const userConnected=useSelector(state => state.user.currentUser)
  console.log(userConnected)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout=async ()=>{
    try {
      dispatch (logoutAction())
      navigate("/login")
      toast.success("logout succefully")
    } catch (error) {
      console.error("failled logout",error)
    }
  }
  return (
  <div> 
  {/*================ Start Header Menu Area =================*/}
  <header className="header_area">
    <div className="main_menu">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand logo_h" href="index.html"><img src="/img/logo.png" alt /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
              <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item submenu dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu">
                  <li className="nav-item"><Link to="/Shop" className="nav-link">Shop Category</Link></li>
            
                  <li className="nav-item"><Link to="/checkout" className="nav-link" >Product Checkout</Link></li>
                  <li className="nav-item"><Link to="/orderconfirmation" className="nav-link" >Confirmation</Link></li>
                  <li className="nav-item"><Link to="/cart" className="nav-link">Shopping Cart</Link></li>
                </ul>
              </li>
             
              <li className="nav-item submenu dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                <ul className="dropdown-menu">
                  
                  <li className="nav-item"><Link to="/tracking" className="nav-link">Tracking</Link></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
            </ul>
            <ul className="nav-shop">
              <li className="nav-item"><button><i className="ti-search" /></button></li>
             <Link to="/cart">  <li className="nav-item"><button><i className="ti-shopping-cart" /><span className="nav-shop__circle">3</span></button> </li></Link>
             { userConnected ? 
             ( <div> <span>{userConnected.fullName} </span> <li className="nav-item"><button className="button button-header" onClick={handleLogout} >logout</button></li></div>)
             :
             (<div><li className="nav-item"><Link to="/login" className="nav-link" >Login</Link></li>
                  <li className="nav-item"><Link to="/register" className="nav-link" >Register</Link></li></div>)}
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  {/*================ End Header Menu Area =================*/}
  </div>

  )
}

export default Navbar