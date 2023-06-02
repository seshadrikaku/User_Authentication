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
            <div className='container my-5 py-5'>
                <div className='row mb-5'>
                    <div className='col-12'>
                        <h3 className='fs-5 text-center mb-0'>Contact Us</h3>
                        <h1 className=' display-6 text-center mb-4'>Have Some <b>Question ?</b></h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src='https://th.bing.com/th/id/OIP.NHM_7d8ER88FEpDRjfmBOgHaIE?pid=ImgDet&rs=1' alt='Contact' className='w-75' />
                    </div>
                    <div className='col-md-6'>
                        <form method='POST' onSubmit={handleSubmit}>
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
                            <button type='submit' className='btn btn-outline-primary'>Send Message <SendIcon /></button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact