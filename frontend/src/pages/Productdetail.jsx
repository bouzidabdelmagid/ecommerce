import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Productdetail = () => {
  /* bring the id from the url */
  const {id}=useParams ()
  const [productDetail,setproductDetail]=useState(null)
  useEffect (() => {
   const fetchProductDetail=async ()=> {
    try {
      const response= await axios.get(`http://localhost:3001/product/getprouctbyid/${id}`)
      setproductDetail(response.data.data)
      console.log("the response from API:",response.data.data)
    } catch (error) {
     console.log("failled to load product details",error) 
    }
   }
   fetchProductDetail() 
  },[id])
  if (!productDetail){return <h2>Product not found</h2>}
  return (
    <div>
        <Navbar/>
<div>
  {/* ================ start banner area ================= */}	
  <section className="blog-banner-area" id="blog">
    <div className="container h-100">
      <div className="blog-banner">
        <div className="text-center">
          <h1>Shop Single</h1>
          <nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Shop Single</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/* ================ end banner area ================= */}
  {/*================Single Product Area =================*/}
  <div className="product_image_area">
    <div className="container">
      <div className="row s_product_inner">
        <div className="col-lg-6">
          <div className="owl-carousel owl-theme s_Product_carousel">
            <div className="single-prd-item">
              <img className="img-fluid" src={`http://localhost:3001/upload/${productDetail.image}`} alt />
            </div>
            {/*  <div class="single-prd-item">
							<img class="img-fluid" src={`/${productDetail.image}`} alt/>
						</div>
						<div class="single-prd-item">
							<img class="img-fluid" src={`/${productDetail.image}`} alt/>
						</div>  */}
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <div className="s_product_text">
            <h3>{productDetail.name}</h3>
            <h2>{productDetail.price}</h2>
            <ul className="list">
              <li><a className="active" href="#"><span>Category</span> {productDetail.category.name}</a></li>
              <li><a href="#"><span>Availibility</span> : In Stock</a></li>
            </ul>
            <p> {productDetail.description}</p>
            <div className="product_count">
              <label htmlFor="qty">Quantity:</label>
              <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" className="increase items-count" type="button"><i className="ti-angle-left" /></button>
              <input type="text" name="qty" id="sst" size={2} maxLength={12} defaultValue={1} title="Quantity:" className="input-text qty" />
              <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) && sst > 0 ) result.value--;return false;" className="reduced items-count" type="button"><i className="ti-angle-right" /></button>
              <Link to="/cart" className="button primary-btn" >Add to Cart</Link>               
            </div>
            <div className="card_area d-flex align-items-center">
              <a className="icon_btn" href="#"><i className="lnr lnr lnr-diamond" /></a>
              <a className="icon_btn" href="#"><i className="lnr lnr lnr-heart" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*================End Single Product Area =================*/}
  {/*================Product Description Area =================*/}
  <section className="product_description_area">
    <div className="container">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Specification</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Comments</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
          <p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes
            and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in
            Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to
            London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an
            officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a
            job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when
            showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a
            child’s painting set for her birthday and it was with this that she produced her first significant work, a
            half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly
            named ‘Hangover’ by Beryl’s husband and</p>
          <p>It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing
            more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and
            the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for
            more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a
            streamlined plan of cooking that is more efficient for one person creating less</p>
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <h5>Width</h5>
                  </td>
                  <td>
                    <h5>128mm</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Height</h5>
                  </td>
                  <td>
                    <h5>508mm</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Depth</h5>
                  </td>
                  <td>
                    <h5>85mm</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Weight</h5>
                  </td>
                  <td>
                    <h5>52gm</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Quality checking</h5>
                  </td>
                  <td>
                    <h5>yes</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Freshness Duration</h5>
                  </td>
                  <td>
                    <h5>03days</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>When packeting</h5>
                  </td>
                  <td>
                    <h5>Without touch of hand</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Each Box contains</h5>
                  </td>
                  <td>
                    <h5>60pcs</h5>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <div className="row">
            <div className="col-lg-6">
              <div className="comment_list">
                <div className="review_item">
                  <div className="media">
                    <div className="d-flex">
                      <img src="img/product/review-1.png" alt />
                    </div>
                    <div className="media-body">
                      <h4>Blake Ruiz</h4>
                      <h5>12th Feb, 2018 at 05:56 pm</h5>
                      <a className="reply_btn" href="#">Reply</a>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo</p>
                </div>
                <div className="review_item reply">
                  <div className="media">
                    <div className="d-flex">
                      <img src="img/product/review-2.png" alt />
                    </div>
                    <div className="media-body">
                      <h4>Blake Ruiz</h4>
                      <h5>12th Feb, 2018 at 05:56 pm</h5>
                      <a className="reply_btn" href="#">Reply</a>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo</p>
                </div>
                <div className="review_item">
                  <div className="media">
                    <div className="d-flex">
                      <img src="img/product/review-3.png" alt />
                    </div>
                    <div className="media-body">
                      <h4>Blake Ruiz</h4>
                      <h5>12th Feb, 2018 at 05:56 pm</h5>
                      <a className="reply_btn" href="#">Reply</a>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="review_box">
                <h4>Post a comment</h4>
                <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea className="form-control" name="message" id="message" rows={1} placeholder="Message" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12 text-right">
                    <button type="submit" value="submit" className="btn primary-btn">Submit Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
          <div className="row">
            <div className="col-lg-6">
              <div className="row total_rate">
                <div className="col-6">
                  <div className="box_total">
                    <h5>Overall</h5>
                    <h4>4.0</h4>
                    <h6>(03 Reviews)</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="rating_list">
                    <h3>Based on 3 Reviews</h3>
                    <ul className="list">
                      <li><a href="#">5 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                      <li><a href="#">4 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                      <li><a href="#">3 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                      <li><a href="#">2 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                      <li><a href="#">1 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="review_list">
                <div className="review_item">
                  <div className="media">
                    <div className="d-flex">
                      <img src="img/product/review-1.png" alt />
                    </div>
                    <div className="media-body">
                      <h4>Blake Ruiz</h4>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo</p>
                </div>
                <div className="review_item">
                  <div className="media">
                    <div className="d-flex">
                      <img src="img/product/review-2.png" alt />
                    </div>
                    <div className="media-body">
                      <h4>Blake Ruiz</h4>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo</p>
                </div>
                <div className="review_item">
                  <div className="media">
                    <div className="d-flex">
                      <img src="img/product/review-3.png" alt />
                    </div>
                    <div className="media-body">
                      <h4>Blake Ruiz</h4>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="review_box">
                <h4>Add a Review</h4>
                <p>Your Rating:</p>
                <ul className="list">
                  <li><a href="#"><i className="fa fa-star" /></a></li>
                  <li><a href="#"><i className="fa fa-star" /></a></li>
                  <li><a href="#"><i className="fa fa-star" /></a></li>
                  <li><a href="#"><i className="fa fa-star" /></a></li>
                  <li><a href="#"><i className="fa fa-star" /></a></li>
                </ul>
                <p>Outstanding</p>
                <form action="#/" className="form-contact form-review mt-3">
                  <div className="form-group">
                    <input className="form-control" name="name" type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="email" type="email" placeholder="Enter email address" required />
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="subject" type="text" placeholder="Enter Subject" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control different-control w-100" name="textarea" id="textarea" cols={30} rows={5} placeholder="Enter Message" defaultValue={""} />
                  </div>
                  <div className="form-group text-center text-md-right mt-3">
                    <button type="submit" className="button button--active button-review">Submit Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Product Description Area =================*/}
</div>

        <Footer/>
    </div>
  )
}

export default Productdetail