import React from 'react'
import './Service.css'
import InsertPageBreakIcon from '@mui/icons-material/InsertPageBreak';
import LaptopIcon from '@mui/icons-material/Laptop';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';

const Service = () => {
    return (
        <>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='fs-5 text-center mb-0'>Our Services</h3>
                        <h1 className='display-6 text-center mb-4 '>Our<b>awesome</b>Services</h1>
                        <hr className='w-25 mx-auto' />
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <div class="card p-3 " >
                            <InsertPageBreakIcon />
                            <div class="card-body text-center">
                                <h5 class="card-title mb-3 fs-4 fw-bold">Highly Customizable</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card p-3 " >
                            <LaptopIcon />
                            <div class="card-body text-center">
                                <h5 class="card-title mb-3 fs-4 fw-bold">Fully Responsive</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card p-3 " >
                            <MobileScreenShareIcon />
                            <div class="card-body text-center">
                                <h5 class="card-title mb-3 fs-4 fw-bold">Users Experience</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <div class="card p-3 " >
                        <StarHalfIcon/>
                            <div class="card-body text-center">
                                <h5 class="card-title mb-3 fs-4 fw-bold">Create Web Design</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card p-3 " >

                            <div class="card-body text-center">
                                <h5 class="card-title mb-3 fs-4 fw-bold">Creative Ideas</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card p-3 " >

                            <div class="card-body text-center">
                                <h5 class="card-title mb-3 fs-4 fw-bold">Unique and Clean</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service