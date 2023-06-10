import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import './DashBoard.css'


const Dashboard = () => {
  return (
    <>
      <div className='container' id='project'>
        <div className='row'>
          <h3 className='fw-5 text-center mt-3'>My Projects</h3>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3'>
            <div className='text-center shadow mx-1  mb-3 py-2 '>
              {/* <img src={note} alt='image' className='img-fluid'/> */}
              <h5 className='m-3 py-2'>MERN Stack User Autuentication </h5>
              <button className='border border-0 mx-2  my-2'>JavaScript</button>
              <button className=' border border-0 mx-2  my-2'>React Js</button>
              <button className='border border-0 mx-2  my-2'>Redux</button>
              <button className='border border-0 mx-2  my-2'>HTML</button>
              <button className='border border-0 mx-2  my-2'>CSS</button>
              <div className='py-3'>
                <a href="https://noteapp-redux.netlify.app/" className='mx-5  my-2'> Live <ArrowOutwardIcon/> </a>
                <a href="https://github.com/seshadrikaku/React-redux-Note-App" className=' mx-5  my-2'> Github </a>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3'>
            <div className='text-center shadow mx-1  mb-3 py-2 '>
              {/* <img src={note} alt='image' className='img-fluid'/> */}
              <h5 className='m-3 py-2'>Note App</h5>
              <button className='border border-0 mx-2  my-2'>JavaScript</button>
              <button className=' border border-0 mx-2  my-2'>React Js</button>
              <button className='border border-0 mx-2  my-2'>Redux</button>
              <button className='border border-0 mx-2  my-2'>HTML</button>
              <button className='border border-0 mx-2  my-2'>CSS</button>
              <div className='py-3'>
                <a href="https://noteapp-redux.netlify.app/" className='mx-5  my-2'>Live <ArrowOutwardIcon/> </a>
                <a href="https://github.com/seshadrikaku/React-redux-Note-App" className=' mx-5  my-2'>Github </a>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3'>
            <div className='text-center shadow mx-1  mb-3 py-2 '>
            {/* <img src={} alt='image' className='img-fluid'/> */}
              <h5 className='m-3 py-2'>Weather Forecast App</h5>
              <button className='border border-0 mx-2  my-2'>JavaScript</button>
              <button className=' border border-0 mx-2  my-2'>React Js</button>
              <button className='border border-0 mx-2  my-2'>HTML</button>
              <button className='border border-0 mx-2  my-2'>CSS</button>
              <button className='border border-0 mx-2  my-2'>Bootstrap</button>
              <div className='py-3'>
                <a href="https://weather-report-123.netlify.app/" className='mx-5  my-2'>Live <ArrowOutwardIcon/> </a>
                <a href="https://github.com/seshadrikaku/React-redux-Note-App" className=' mx-5  my-2'>Github </a>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3 '>
            <div className=' text-center shadow mx-1  py-2 mb-3'>
            {/* <img src={note} alt='image' className='img-fluid'/> */}
              <h5 className='m-3 py-2'>Digital Clock </h5>
              <button className='border border-0 mx-2  my-2'>JavaScript</button>
              <button className=' border border-0 mx-2  my-2'>React Js</button>
              <button className='border border-0 mx-2  my-2'>Redux</button>
              <div  className='py-3'>
                <a href="https://noteapp-redux.netlify.app/" className=' mx-5  my-2'>Live  </a>
                <a href="https://github.com/seshadrikaku/React-redux-Note-App" className='mx-5   my-2'>Github </a>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3 '>
            <div className=' text-center shadow mx-1  py-2 mb-3'>
              <h5 className='m-3 py-2'>Time Count Down </h5>
              <button className='border border-0 mx-2  my-2'>JavaScript</button>
              <button className=' border border-0 mx-2  my-2'>HTML</button>
              <button className='border border-0 mx-2  my-2'>CSS</button>
              <button className='border border-0 mx-2  my-2'>Bootstrap</button>
              <div  className='py-3'>
                <a href="https://noteapp-redux.netlify.app/" className=' mx-5   my-2'>Live </a>
                <a href="https://github.com/seshadrikaku/React-redux-Note-App" className='mx-5   my-2'>Github</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3 '>
            <div className=' text-center shadow mx-1  py-2 mb-3'>
              <h5 className='m-3 py-2'>Rating Card </h5>
              <button className='border border-0 mx-2  my-2'>JavaScript</button>
              <button className=' border border-0 mx-2  my-2'>HTML</button>
              <button className='border border-0 mx-2  my-2'>CSS</button>
              <div  className='py-3'>
                <a href="https://noteapp-redux.netlify.app/" className='  mx-5   my-2'>Live  </a>
                <a href="https://github.com/seshadrikaku/React-redux-Note-App" className=' mx-5   my-2'>Github </a>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3 '>
            <div className=' text-center shadow mx-1  py-2 mb-3'>
              <h5 className='m-3 py-2'>Calculator  </h5>
              <button className='border border-0 mx-2  my-2'>JavaScript</button>
              <button className=' border border-0 mx-2  my-2'>CSS</button>
              <button className='border border-0 mx-2  my-2'>HTML</button>
              <button className='border border-0 mx-2  my-2'>Bootstrap</button>
              <div  className='py-3'>
                <a href="https://noteapp-redux.netlify.app/" className='  mx-5  my-2'>Live </a>
                <a href="https://github.com/seshadrikaku/React-redux-Note-App" className=' mx-5   my-2'>Github </a>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3 '>
            <div className=' text-center shadow mx-1  py-2 mb-3'>
              <h5 className='m-3 py-2'>College Web Application</h5>
              <button className='border border-0 mx-2  my-2'>HTML</button>
              <button className=' border border-0 mx-2  my-2'>CSS</button>
              <button className='border border-0 mx-2  my-2'>Bootstrap</button>
              <div  className='py-3'>
                <a href="https://noteapp-redux.netlify.app/" className='  mx-5   my-2'>Live  </a>
                <a href="https://github.com/seshadrikaku/React-redux-Note-App" className=' mx-5   my-2'>Github </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Dashboard