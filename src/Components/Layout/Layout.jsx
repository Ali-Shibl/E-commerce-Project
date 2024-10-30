import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';


const Layout = () => {
  return (
    <>
    <Toaster  position='top right'/>

    
    <Navbar/>

    <div className='container' >
    <Outlet></Outlet>    
    </div>
    
    <Footer/>
    
    
    </>
  )
}

export default Layout