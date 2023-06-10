import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password } = user;
        try {
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username, email, password
                })
            })
            if (res.status === 400 || !res) {
                window.alert("Already Used Details")
            } else {
                window.alert("Registered Successfully")
                navigate("/login");
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className='container shadow my-5'>
                <div className='row justify-content-end'>
                    <div className='col-md-5 d-flex flex-column align-items-center text-white justify-content-center order-2 form'>
                        <h1 className='display-4 fw-bolder'>Hello , Friend</h1>
                        <p className=' text-center'> Enter Your Details To Register  </p>
                        <h4 className='mb-4'>OR</h4>
                        <NavLink to="/login" className='btn btn-outline-light pb-1 mb-4 w-50'>Login</NavLink>
                    </div>
                    <div className='col-md-6 p-5'>

                        <form onSubmit={handleSubmit} method='POST'>
                            <div class="mb-3">
                                <label for="name" class="form-label">Username</label>
                                <input type="text" class="form-control" id="name" name='username' value={user.username} onChange={handleInput} />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" name='email' value={user.email} onChange={handleInput} />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={user.password} onChange={handleInput} />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">I Agree Terms and Conditions</label>
                            </div>
                            <button type="submit" class="btn btn-outline-primary w-100 mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register