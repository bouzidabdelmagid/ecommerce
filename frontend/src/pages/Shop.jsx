import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getallcategoryaction } from '../redux/actions/categoryaction'
import { useDispatch, useSelector } from 'react-redux'

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const productList=useSelector(state=>state.product.listproducts)
  const filteredProductsSearch=productList.filter(p=>p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const productlistfiltered=selectedCategory? filteredProductsSearch.filter(p=>p.category._id===selectedCategory):filteredProductsSearch
  const categoryList=useSelector(state=>state.category.categories)
  const dispatch=useDispatch()
  useEffect (()=>{
  dispatch(getallcategoryaction())

  
  },[])
  return (
    <div>
        <Navbar/>
       {/* ================ start banner area ================= */}	
<section className="blog-banner-area" id="category">
  <div className="container h-100">
    <div className="blog-banner">
      <div className="text-center">
        <h1>Shop Category</h1>
        <nav aria-label="breadcrumb" className="banner-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Shop Category</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>
{/* ================ end banner area ================= */}
{/* ================ category section start ================= */}		  
<section className="section-margin--small mb-5">
  <div className="container">
    <div className="row">
      <div className="col-xl-3 col-lg-4 col-md-5">
        <div className="sidebar-categories">
          <div className="head">Browse Categories</div>
          <ul className="main-categories">
            <li className="common-filter">
              <form action="#">
                <ul>
                  {categoryList.map(cat => 
                    (<li className="filter-list">
                    <input className="pixel-radio" type="radio" id="men" name="brand" onChange={()=> setSelectedCategory(cat._id)}/>
                    <label htmlFor="men">{cat.name}<span>{cat.count}</span></label></li>) )} 
                </ul>
              </form>
            </li>
          </ul>
        </div>
        <div className="sidebar-filter">
          <div className="top-filter-head">Product Filters</div>
          <div className="common-filter">
            <div className="head">Brands</div>
            <form action="#">
              <ul>
                <li className="filter-list"><input className="pixel-radio" type="radio" id="apple" name="brand" /><label htmlFor="apple">Apple<span>(29)</span></label></li>
                <li className="filter-list"><input className="pixel-radio" type="radio" id="asus" name="brand" /><label htmlFor="asus">Asus<span>(29)</span></label></li>
                <li className="filter-list"><input className="pixel-radio" type="radio" id="gionee" name="brand" /><label htmlFor="gionee">Gionee<span>(19)</span></label></li>
                <li className="filter-list"><input className="pixel-radio" type="radio" id="micromax" name="brand" /><label htmlFor="micromax">Micromax<span>(19)</span></label></li>
                <li className="filter-list"><input className="pixel-radio" type="radio" id="samsung" name="brand" /><label htmlFor="samsung">Samsung<span>(19)</span></label></li>
              </ul>
            </form>
          </div>
          <div className="common-filter">
            <div className="head">Color</div>
            <form action="#">
              <ul>
                <li className="filter-list"><input className="pixel-radio" type="radio" id="black" name="color" /><label htmlFor="black">Black<span>(29)</span></label></li>
                <li className="filter-list"><input className="pixel-radio" type="radio" id="balckleather" name="color" /><label htmlFor="balckleather">Black
                    Leather<span>(29)</span></label></li>
                <li className="filter-list"><input className="pixel-radio" type="radio" id="blackred" name="color" /><label htmlFor="blackred">Black
                    with red<span>(19)</span></label></li>
                <li className="filter-list"><input className="pixel-radio" type="radio" id="gold" name="color" /><label htmlFor="gold">Gold<span>(19)</span></label></li>
                <li className="filter-list"><input className="pixel-radio" type="radio" id="spacegrey" name="color" /><label htmlFor="spacegrey">Spacegrey<span>(19)</span></label></li>
              </ul>
            </form>
          </div>
          <div className="common-filter">
            <div className="head">Price</div>
            <div className="price-range-area">
              <div id="price-range" />
              <div className="value-wrapper d-flex">
                <div className="price">Price:</div>
                <span>$</span>
                <div id="lower-value" />
                <div className="to">to</div>
                <span>$</span>
                <div id="upper-value" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-9 col-lg-8 col-md-7">
        {/* Start Filter Bar */}
        <div className="filter-bar d-flex flex-wrap align-items-center">
          <div className="sorting">
            <select>
              <option value={1}>Default sorting</option>
              <option value={1}>Default sorting</option>
              <option value={1}>Default sorting</option>
            </select>
          </div>
          <div className="sorting mr-auto">
            <select>
              <option value={1}>Show 12</option>
              <option value={1}>Show 12</option>
              <option value={1}>Show 12</option>
            </select>
          </div>
          <div>
            <div className="input-group filter-bar-search">
              <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
              <div className="input-group-append">
                <button type="button"><i className="ti-search" /></button>
              </div>
            </div>
          </div>
        </div>
        {/* End Filter Bar */}
        {/* Start Best Seller */}
        <section className="lattest-product-area pb-40 category-list">
          <div className="row">
            {productlistfiltered.map(p=>( <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card text-center card-product">
                <div className="card-product__img">
                  <img className="card-img" src={`http://localhost:3001/upload/${p.image}`} alt={p.name} />
                  <ul className="card-product__imgOverlay">
                    <li><button><i className="ti-search" /></button></li>
                    <li><button><i className="ti-shopping-cart" /></button></li>
                    <li><button><i className="ti-heart" /></button></li>
                  </ul>
                </div>
                <div className="card-body">
                  <p>{p.category.name}</p>
                  <h4 className="card-product__title"><a href="#">{p.name}</a></h4>
                  <p className="card-product__price">${p.price.toFixed(2)}</p>
                </div>
              </div>
            </div>))}
          </div>
        </section>
        {/* End Best Seller */}
      </div>
    </div>
  </div>
</section>
{/* ================ category section end ================= */}
	<Footer/>

    </div>
  )
}

export default Shop