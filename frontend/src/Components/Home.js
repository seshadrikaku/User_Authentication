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
                        <h1 className='display-4 fw-bolder mb-4 text-center text-white'>Feels the Fresh Business Perspective</h1>
                        <p className='lead text-center fs-4 mb-5 text-white'>
                            The href attribute requires a valid value to be accessible.
                            Provide a valid, navigable address as the href value. If you cannot provide a
                            valid href, but still need the element to resemble a link, use a button and
                            change it with appropriate styles.
                            Learn more:/github.com/jsx-eslint/eslint-plugin-
                            jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
                        </p>
                        <div className='buttons d-flex justify-content-center'>
                            <NavLink to="/contact" className='btn btn-light me-4  px-4 py-2 mb-1'>Get Quote</NavLink>
                            <NavLink to="/service" className='btn btn-outline-light   px-4 py-2 mb-1'>Our services</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <About/>
                <Service/>
                <Contact/>
        </>
    )
}

export default Home