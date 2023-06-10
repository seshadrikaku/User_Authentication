import React from 'react'
import SendIcon from '@mui/icons-material/Send';

import { useState } from 'react';

const Contact = () => {

    const [msg, setMsg] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setMsg({ ...msg, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = msg;
        try {
            const res = await fetch('/message', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, message
                })
            })
            console.log(res.status)
            if (res.status === 400 || !res) {
                window.alert("Message Not Sent. Try Agin Later")
            } else {
                window.alert("Message Sent.");
                setMsg({
                    name: "",
                    email: "",
                    message: ""
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='container my-2 py-2'>
                <div className='row mb-5'>
                    <div className='col-12'>
                        <h1 className='fw-5 text-center mt-3'>Contact Me</h1>
                        <hr className='w-25 mx-auto ' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                        <form >
                            <input className="form-control my-3 py-3 border-0" type="text" value="+91 6309373318" aria-label="Disabled input example" disabled />
                            <input className="form-control my-4 py-3 border-0" type="text" value="https://app.netlify.com/teams/seshadrikaku/overview" aria-label="Disabled input example" disabled />
                            <input className="form-control my-4 py-3 border-0" type="text" value="kakuseshadri033@gmail.com" aria-label="Disabled input example" disabled />
                            <input className="form-control my-4 py-3 border-0" type="text" value="Hyderabd, Telengana, India" aria-label="Disabled input example" disabled />
                        </form>

                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                        <form onSubmit={handleSubmit} method='POST'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Enter name" name='name' value={msg.name} onChange={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={msg.email} onChange={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name='message' value={msg.message} onChange={handleChange}></textarea>
                            </div>
                            <button type='submit' className='btn btn-outline-primary '>Send Message <SendIcon /></button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact