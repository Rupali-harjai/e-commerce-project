import React from 'react'
import Products from './Products';

const Home = () => {
  return (
    <div className='home'>
    <div className="card bg-dark text-white">
  <img src="/assets/bg.jpg" className="card-img" alt="Background image" height="550px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center ">
    {/* <h5 className="card-title display-3 fw-bolder mb-0 ">FRESH ARRIVALS</h5>
    <p className="card-text lead fs-2">CHECK OUT ALL FRESH PRODUCTS</p> */}
   
  </div>
</div>
        <Products/>
    </div>
  
  )
}

export default Home;
