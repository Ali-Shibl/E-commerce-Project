import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../Assets/images/freshcart-logo.svg'
import './Navbar.css';
import { Auth } from '../../Context/AuthContext';
import { CartContext } from '../../Context/CartContext';
import imgProfile from '../../Assets/images/user_male.webp'

const Navbar = () => {

const {cart} = useContext(CartContext);


//user login

const {userIsLogiedin,setuserIsLogiedin}=useContext(Auth)


// logout
const navigate=useNavigate()
function logout() {
    setuserIsLogiedin(false)
    localStorage.removeItem('Token')
    navigate('/login')

    
}

    const [showNav, setshowNav] = useState(false)
    
    function show() {
        setshowNav(true)
    }
    function hide() {
        setshowNav(false)
    }





    return (
        <>
            <div className='mt-6'></div>
            <nav className="navbar navbar-expand-xl bg-light py-3 py-lg-2">
                <div className="container">
                    <Link to={'home'}>
                        <img src={logo} alt="Fresh Cart logo" className='me-3' />
                    </Link>

                    {showNav ? <i className="fa-solid fa-x close" onClick={hide}></i> : <i className="fa-solid fa-bars-staggered open" onClick={show}></i>}

                   
                    <ul className={showNav ? ' list-show' : ''} >
                        {userIsLogiedin?<ul className="navbar-nav  mb-2 mb-xl-0 ">
                            <li className="nav-item" onClick={hide}>
                                <NavLink className={`nav-link text-center `} to={'home'}>Home</NavLink>
                            </li>
                            <li className="nav-item" onClick={hide}>
                                <NavLink className={`nav-link text-center `} to={'cart'}>Cart</NavLink>
                            </li>
                            <li className="nav-item" onClick={hide}>
                                <NavLink className={`nav-link text-center `} to={'products'}>Products</NavLink>
                            </li>
                            <li className="nav-item" onClick={hide}>
                                <NavLink className={`nav-link text-center `} to={'categories'}>Categories</NavLink>
                            </li>
                            <li className="nav-item" onClick={hide}>
                                <NavLink className={`nav-link text-center `} to={'brands'}>Brends</NavLink>
                            </li>
                            <li className="nav-item" onClick={hide}>
                                <NavLink className={`nav-link text-center `} to={'allorders'}>Orders</NavLink>
                            </li>
                            <li className="nav-item" onClick={hide}>
                                <NavLink className={`nav-link text-center`} to={'wishlist'}>WishList</NavLink>
                            </li>

                        </ul>:''
                    }

                        <ul className="navbar-nav  ms-xl-auto  mb-2 mb-xl-0  d-flex flex-column flex-xl-row gap-2">
                        
                           
                           
                           {userIsLogiedin?<>
                            
                          
                           <li className="social-media nav-item d-flex  align-items-center gap-2 gap-xl-1">
                                
                                <div>
                                    <i className='fa-brands fa-facebook'></i>
                                </div>
                                <div>
                                    <i className='fa-brands fa-instagram '></i>
                                </div>
                                <div>
                                    <i className='fa-brands  fa-twitter '></i>
                                </div>
                                <div>
                                    <i className='fa-brands  fa-tiktok '></i>
                                </div>
                                <div>
                                    <i className='fab fa-youtube'></i>
                                </div>


                            </li>

                            
                          

                            </>
                            :
                            <>
                            <li className="nav-item" onClick={hide}> <NavLink className={`nav-link text-center `} to={'register'}>Register</NavLink></li>

                            <li className="nav-item" onClick={hide}> <NavLink className={`nav-link text-center `} to={'login'}>Login</NavLink></li>

                            </>
                            
                            }



                            
                        </ul>

                    </ul>

                    {userIsLogiedin?
                    <>
                    <Link to={'cart'} className='mx-2 mx-md-5'>
                    <div className='d-flex align-items-center justify-content-center '>
                       <i className="text-main fa-brands fa-shopify fa-2x   position-relative">
                       <span className='shop  position-absolute top-0 start-100 text-white bg-main  rounded-2'>{cart?.numOfCartItems || 0}</span>  
                       </i>
                        </div> </Link>

                    
                    <div className="btn-group ">
                      <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                         <img src={imgProfile} alt=""  style={{height:'40px'}}/>   
                      </button>

                     <ul className="dropdown-menu dropdown-menu-end">
                      <NavLink to='/profile' onClick={hide} className={`nav-link text-center `}>
                          <li ><button className="dropdown-item  text-center cursor-pointer text-black" >Profile</button></li>                   
                       </NavLink>  

                      <li className="nav-item dropdown-item px-0 text-center" onClick={hide}>
                           <span onClick={logout} className="   cursor-pointer text-black">logout</span>
                      </li>
                       </ul>
                    </div>
                    </>
                    :''}


                    

                </div>
            </nav>



        </>)
}

export default Navbar