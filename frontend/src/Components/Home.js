import React from 'react'
import "./Home.css"
import About from './About'
import Service from './Service'
import Contact from './Contact'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='container-fluid' >
                <div className='row justify-content-center' id='home'>
                    <div className='col-12 mt-5'>
                        <h1 className='display-4 fw-bolder mb-4 text-center text-white'>Front End Developer</h1>
                        <p className='lead text-center fs-4 mb-5 p-2 text-white'>
                            I am a dedicated and enthusiastic front-end developer,
                            eager to kickstart my career in creating immersive and user-friendly web experiences.
                            With a solid foundation in HTML, CSS, and JavaScript,
                            I am passionate about transforming designs into functional and visually appealing websites.
                            I have gained hands-on experience in building responsive and accessible web interfaces.
                        </p>
                        <div className='buttons d-flex justify-content-center'>
                            <NavLink to="/contact" className='btn btn-light me-4  px-4 py-2 mb-1'>Get Quote</NavLink>
                            <NavLink to="/service" className='btn btn-outline-light   px-4 py-2 mb-1'>Our Services</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <h1 className='fw-5 text-center mt-3'>Technical Skills</h1>
                    <hr className='' />
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
                        <div className='shadow my-3 py-2'>
                            <h3 className='m-3 py-2'>Web Technologies</h3>
                            <button className=' border border-0 mx-2 my-2 '>HTML5</button>
                            <button className='border border-0 mx-2  my-2'>CSS</button>
                            <button className='border border-0 mx-2  my-2'>BOOTSTRAP</button>
                            <button className='border border-0 mx-2  my-2'>JavaScript</button>
                            <button className=' border border-0 mx-2  my-2'>REACTJs</button>
                            <button className='border border-0 mx-2  my-2'>Redux</button>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
                        <div className='shadow py-2 my-3'>
                            <h3 className='m-3 py-2'>Front End Skills</h3>
                            <button className=' border border-0 mx-2 my-2 '>HTML5</button>
                            <button className='border border-0 mx-2  my-2'>CSS</button>
                            <button className='border border-0 mx-2  my-2'>BOOTSTRAP</button>
                            <button className='border border-0 mx-2  my-2'>JavaScript</button>
                            <button className='border border-0 mx-2  my-2'>JQuery</button>
                            <button className=' border border-0 mx-2  my-2'>REACTJs</button>
                            <button className='border border-0 mx-2  my-2'>Redux</button>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
                        <div className='shadow py-2 my-3'>
                            <h3 className='m-3 py-2'>Back End Skills</h3>
                            <button className=' border border-0 mx-2 my-2 '>Node Js</button>
                            <button className='border border-0 mx-2  my-2'>Express Js</button>
                            <button className='border border-0 mx-2  my-2'>Mongo DB</button> 
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
                        <div className='shadow py-2 my-3'>
                            <h3 className='m-3 py-2'>MERN Stack Skills</h3>
                            <button className=' border border-0 mx-2 my-2 '>HTML5</button>
                            <button className='border border-0 mx-2  my-2'>CSS</button>
                            <button className='border border-0 mx-2  my-2'>JavaScript</button>
                            <button className=' border border-0 mx-2  my-2'>REACTJs</button>
                            <button className=' border border-0 mx-2 my-2 '>Node Js</button>
                            <button className='border border-0 mx-2  my-2'>Express Js</button>
                            <button className='border border-0 mx-2  my-2'>Mongo DB</button>
                        </div>
                    </div>
                </div>

            </div>
            <About />
            <Service />
            <Contact />
        </>
    )
}

export default Home