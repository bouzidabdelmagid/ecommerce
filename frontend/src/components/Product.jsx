import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getallproductsaction } from '../redux/actions/productaction'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addTocartaction } from '../redux/actions/cartaction'

const Product = () => {
  /* const [productList,setproductList]=useState ([]) */
  const dispatch=useDispatch()
  const productList=useSelector(state=>state.product.listproducts)
  //sumiler la recuperation des produits//
  useEffect (() =>{
    //on va aprés écrire l'url de backend//
    const fetchProduct=async ()=>{
      try { 
dispatch (getallproductsaction())
        /* setproductList(response.data.data) */
       /*  console.log("the response from API",response.data.data) */
      } catch (error) {console.error("failled to load product list",error)
        
      }
    }
    fetchProduct()
  },[])
  const userConnected=useSelector(state => state.user.currentuser||null)
   const navigate=useNavigate()
  const handleaddtocart=async (product)=>{
    
    try {
     /*  if(!userConnected){
        toast.warning("login or register is demand")
        return;
      } */
dispatch(addTocartaction({product,quantity:1}))
navigate("/cart")
     /*   const token=localStorage.getItem("accessToken")
      const response=await axios.post("http://localhost:3001/cart/addcart",{product,quantity:1},{headers:{Authorization: `Bearer ${token}`}})
     console.log("Product added to cart") */
    
    } catch (error) {
      console.log("Failled to add Product",error)
    }
  }
  return (
    <div>
  {/* ================ trending product section start ================= */}  
  <section className="section-margin calc-60px">
    <div className="container">
      <div className="section-intro pb-60px">
        <p>Popular Item in the market</p>
        <h2>Trending <span className="section-intro__style">Product</span></h2>
      </div>
      <div className="row">
        {productList.map(p=>( <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="card-img" src={`http://localhost:3001/upload/${p.image}`} alt />
              <ul className="card-product__imgOverlay">
                 <Link to={`/productdetail/${p._id}`}> <li><button><i className="ti-search" /></button></li></Link>
                <li><button onClick={() => handleaddtocart(p._id)}><i className="ti-shopping-cart" /></button></li>
                <li><button><i className="ti-heart" /></button></li>
              </ul>
            </div>
            <div className="card-body">
              {/* <p>{p.category}</p> */}
              <h4 className="card-product__title"><Link to={`/productdetail/${p._id}`} >{p.name}</Link></h4>
              <p className="card-product__price">{p.price}</p>
            </div>
          </div>
        </div>))}
       
 
      </div>
    </div>
  </section>
  {/* ================ trending product section end ================= */} 
</div>

  )
}

export default Product