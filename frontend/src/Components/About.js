import React from 'react'

const About = () => {
  return (
    <div>
      <div className='container my-4 py-4' id="about">
        <div className='row'>
          <div className=' col-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 col-xxl-6 py-3'>
            <img src='https://th.bing.com/th/id/OIP.2bcMwCdv5UnrkuLms0E3jAHaE7?pid=ImgDet&rs=1' className='img-fluid' alt='images' />
          </div>
          <div className=' col-12 col-sm-12 col-md-12 col-lg-7 col-xl-6 col-xxl-6'>
            <h3 className='fs-5 mb-2 mt-3'>About Us</h3>
            <h1 className='mb-2 '>Who<b>We</b>Are</h1>
            <hr className='w-50' />
            <p className='mb-4'>
              40,803 views  Nov 5, 2021  MERN Stack Project
              In this video, We will See, How to Build a Website
              Using MERN Stack with Authentication. In this video, We'll Cover all the Basics and Important Topics Like User Authentication, Protected Routes, Dynamic Navbar, and much more. This is the Best MERN Stack Project for Beginners.
            </p>
            <button className='btn btn-primary px-3 py-2'>Get Started</button>
            <button className='btn  btn-outline-primary ms-2 px-4 py-2'>Contact Us</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About