import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const HandelLogin=async(e)=> {
    //url de backend//
    try {
       e.preventDefault ()
    console.log("email saisi est:",email)
    console.log("password saisi est:",password)
      const response=await axios.post("http://localhost:3001/user/login",{email,password},{headers:{"Content-Type":"application/json"}})
      localStorage.setItem("accessToken",response.data.accessToken)
      console.log(response.data)
      navigate('/')
    } catch (error) {
      console.error("failled login",error)
    }
  }
  return (
    <div>
        <Navbar/>
      <div>
  {/* ================ start banner area ================= */}	
  <section className="blog-banner-area" id="category">
    <div className="container h-100">
      <div className="blog-banner">
        <div className="text-center">
          <h1>Login / Register</h1>
          <nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Login/Register</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/* ================ end banner area ================= */}
  {/*================Login Box Area =================*/}
  <section className="login_box_area section-margin">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="login_box_img">
            <div className="hover">
              <h4>New to our website?</h4>
              <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
              <a className="button button-account" href="register.html">Create an Account</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="login_form_inner">
            <h3>Log in to enter</h3>
            <form className="row login_form" action="#/" id="contactForm">
              <div className="col-md-12 form-group">
                <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'email'" />
              </div>
              <div className="col-md-12 form-group">
                <input type="password" className="form-control" id="password" name="password" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" />
              </div>
              <div className="col-md-12 form-group">
                <div className="creat_account">
                  <input type="checkbox" id="f-option2" name="selector" />
                  <label htmlFor="f-option2">Keep me logged in</label>
                </div>
              </div>
              <div className="col-md-12 form-group">
                <button type="submit" value="submit" className="button button-login w-100" onClick={HandelLogin}>Log In</button>
                <a href="#">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Login Box Area =================*/}
</div>

        <Footer/>

    </div>
  )
}

export default Login