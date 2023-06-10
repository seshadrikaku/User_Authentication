import React from 'react'
import seshi from './seshi.jpg'
const About = () => {
  return (
    <div>
      <div className='container my-4 py-4' id="about">
        <h1 className='fw-5 text-center mt-3'>About Us</h1>
        <hr className='w-25 mx-auto ' />
        <div className='row'>
          <div className=' col-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 col-xxl-6 py-2 text-center'>
            <img src={seshi} className='img-fluid w-75 rounded' alt='images' />
          </div>
          <div className=' col-12 col-sm-12 col-md-12 col-lg-7 col-xl-6 col-xxl-6 py-2 m-auto '>
                  <h2 className='display-4'>My name is</h2>
                  <h2 className='display-4 '>Kaku Seshadri</h2>
                  <p className=''>
                    I'm Seshadri and I am looking for Front-End Developer role.
                    I have done my graduation in B.sc Computer Science .I have developed some projects .
                    I'm learning Back-End .I recently completed my MERN Stack Course.
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