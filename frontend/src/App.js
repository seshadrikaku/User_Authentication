import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import {  Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Service from './Components/Service';
import Footer from './Components/Footer'
import './App.css'
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Logout from './Components/Logout';
import { useEffect } from 'react';




function App() {

  const [auth, setAuth] = useState(false);
  const [auth1, setAuth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch("/auth", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      if (res.status === 200) {
        setAuth(true)
        setAuth1(false)
      }
      if (res.status === 401) {
        setAuth(false)
        setAuth1(true)
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    isLoggedIn();
  })
  return (
    <>

      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />}  />
        <Route exact path='/dashboard' element={<Dashboard />}  />
        <Route exact path='/logout' element={<Logout />}  />
      </Routes>

      <Footer />

    </>
  );
}

export default App;
