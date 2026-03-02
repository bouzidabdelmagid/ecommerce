import React from 'react'

const Offers = () => {
  return (
   <div>
  {/* ================ offer section start ================= */} 
  <section className="offer" id="parallax-1" data-anchor-target="#parallax-1" data-300-top="background-position: 20px 30px" data-top-bottom="background-position: 0 20px">
    <div className="container">
      <div className="row">
        <div className="col-xl-5">
          <div className="offer__content text-center">
            <h3>Up To 50% Off</h3>
            <h4>Winter Sale</h4>
            <p>Him she'd let them sixth saw light</p>
            <a className="button button--active mt-3 mt-xl-4" href="#">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ================ offer section end ================= */} 
  {/* ================ Subscribe section start ================= */} 
  <section className="subscribe-position">
    <div className="container">
      <div className="subscribe text-center">
        <h3 className="subscribe__title">Get Update From Anywhere</h3>
        <p>Bearing Void gathering light light his eavening unto dont afraid</p>
        <div id="mc_embed_signup">
          <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscribe-form form-inline mt-5 pt-1">
            <div className="form-group ml-sm-auto">
              <input className="form-control mb-1" type="email" name="EMAIL" placeholder="Enter your email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '" />
              <div className="info" />
            </div>
            <button className="button button-subscribe mr-auto mb-1" type="submit">Subscribe Now</button>
            <div style={{position: 'absolute', left: '-5000px'}}>
              <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex={-1} defaultValue type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* ================ Subscribe section end ================= */} 
</div>

  )
}

export default Offers