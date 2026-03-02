import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Product from '../components/Product'
import Footer from '../components/Footer'
import Offers from '../components/Offers'
import Bestseller from '../components/Bestseller'

const Home = () => {
  return (
    <div> <Navbar/>
    <main className="site-main"> 
    <Header/>
    <Product/>
    <Bestseller/>
    <Offers/>
    
    </main>
    <Footer/> 
    </div>
  )

}

export default Home