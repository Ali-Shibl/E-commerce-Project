import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Assets/images/freshcart-logo.svg'
import './Navbar.css';
import { Auth } from '../../Context/AuthContext';
import { CartContext } from '../../Context/CartContext';
import imgProfile from '../../Assets/images/user_male.webp'

const Navbar = () => {

    const pathactive=window.location.hash
const {cart} = useContext(CartContext);


//user login

const {userIsLogiedin,setuserIsLogiedin}=useContext(Auth)


// logout
const navigate=useNavigate()
function logout() {
    setuserIsLogiedin(false)
    localStorage.removeItem('Token')
    navigate('/')

    
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
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link to={'home'}>
                        <img src={logo} alt="Fresh Cart logo" className='me-3' />
                    </Link>

                    {showNav ? <i className="fa-solid fa-x close" onClick={hide}></i> : <i className="fa-solid fa-bars-staggered open" onClick={show}></i>}

                   
                    <ul className={showNav ? ' list-show' : ''} >
                        {userIsLogiedin?<ul className="navbar-nav  mb-2 mb-lg-0 ">
                            <li className="nav-item" onClick={hide}>
                                <Link className={`nav-link text-center ${pathactive === '#/home'?'active':''}`} to={'home'}>Home</Link>
                            </li>
                            <li className="nav-item" onClick={hide}>
                                <Link className={`nav-link text-center ${pathactive === '#/cart'?'active':''}`} to={'cart'}>Cart</Link>
                            </li>
                            <li className="nav-item" onClick={hide}>
                                <Link className={`nav-link text-center ${pathactive === '#/products'?'active':''}`} to={'products'}>Products</Link>
                            </li>
                            <li className="nav-item" onClick={hide}>
                                <Link className={`nav-link text-center ${pathactive === '#/categories'?'active':''}`} to={'categories'}>Categories</Link>
                            </li>
                            <li className="nav-item" onClick={hide}>
                                <Link className={`nav-link text-center ${pathactive === '#/brands'?'active':''}`} to={'brands'}>Brends</Link>
                            </li>
                            <li className="nav-item" onClick={hide}>
                                <Link className={`nav-link text-center ${pathactive === '#/allorders'?'active':''}`} to={'allorders'}>Orders</Link>
                            </li>
                            <li className="nav-item" onClick={hide}>
                                <Link className={`nav-link text-center ${pathactive === '#/wishlist'?'active':''}`} to={'wishlist'}>WishList</Link>
                            </li>

                        </ul>:''
                    }

                        <ul className="navbar-nav  ms-lg-auto  mb-2 mb-lg-0  d-flex flex-column flex-lg-row gap-2">
                        
                           
                           
                           {userIsLogiedin?<>
                            
                          
                           <li className="social-media nav-item d-flex  align-items-center gap-2 gap-lg-1">
                                
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
                            <li className="nav-item" onClick={hide}> <Link className={`nav-link text-center ${pathactive === '#/register'?'active':''}`} to={'register'}>Register</Link></li>

                            <li className="nav-item" onClick={hide}> <Link className={`nav-link text-center ${pathactive === '#/'?'active':''}`} to={''}>Login</Link></li>

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
                      <Link to='/profile' onClick={hide} className={`nav-link text-center ${pathactive === '#/profile'?'active':''}`}>
                          <li ><button className="dropdown-item  text-center cursor-pointer text-black" >Profile</button></li>                   
                       </Link>  

                      <li className="nav-item dropdown-item px-0" onClick={hide}>
                           <span onClick={logout} className=" nav-link text-center cursor-pointer text-black">logout</span>
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