import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [formData,setformData]=useState({fullName:"",email:"",password:"",confirmpassword:"",address:"",Country:"",phoneNumber:""})
   const handelChange=(e)=> {
    setformData({...formData,[e.target.name]:e.target.value})
  }
  const navigate=useNavigate()
  const handelRegister=async(e)=> {
    try { e.preventDefault ()
    console.log("Les données saisis",formData)
    const response=await axios.post("http://localhost:3001/user/register",formData,{headers:{"Content-Type":"application/json"}})
navigate('/login')
      
    } catch (error) {
      console.error("failled to register",error) 
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
          <h1>Register</h1>
          <nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Register</li>
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
              <h4>Already have an account?</h4>
              <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
              <Link className="button button-account" to="/login">Login Now</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="login_form_inner register_form_inner">
            <h3>Create an account</h3>
            <form className="row login_form" action="#/" id="register_form" onSubmit={handelRegister}>
              <div className="col-md-12 form-group">
                <input type="text" className="form-control" id="fullname" name="fullName" value={formData.fullName} onChange={handelChange} placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'fullName'" />
              </div>
              <div className="col-md-12 form-group">
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handelChange} placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" />
              </div>
              <div className="col-md-12 form-group">
                <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handelChange} placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" />
              </div>
             {/*  <div className="col-md-12 form-group">
                <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" value={formData.confirmpassword} onChange={handelChange} placeholder="Confirm Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Confirm Password'" />
              </div> */}
              <div className="col-md-12 form-group">
                <input type="text" className="form-control" id="Country" name="Country" value={formData.Country} onChange={handelChange} placeholder="Country" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Country'" />
              </div>
              <div className="col-md-12 form-group">
                <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handelChange} placeholder="phoneNumber" onfocus="this.placeholder = ''" onblur="this.placeholder = 'phoneNumber'" />
              </div>
              <div className="col-md-12 form-group">
                <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handelChange} placeholder="Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Address'" />
              </div>
              <div className="col-md-12 form-group">
                <div className="creat_account">
                  <input type="checkbox" id="f-option2" name="selector" />
                  <label htmlFor="f-option2">Keep me logged in</label>
                </div>
              </div>
              <div className="col-md-12 form-group">
                <button type="submit" value="submit" className="button button-register w-100" >Register</button>
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

export default Register