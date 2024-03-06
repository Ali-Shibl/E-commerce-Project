import React from 'react'
import {createHashRouter ,RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Brands from './Components/Brands/Brands'
import Products from './Components/Products/Products'
import Categories from './Components/Categories/Categories'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Notfound from './Components/Notfound/Notfound'
import AuthProvider from './Context/AuthContext'
import ProductRoute from './Components/ProductRoute/ProductRoute'
import AuthProductRouter from './Components/ProductRoute/AuthProductRouter'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import CartContextprovide from './Context/CartContext'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import CodeToEmail from './Components/CodeToEmail/CodeToEmail'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import Address from './Components/Address/Address'
import Orders from './Components/Orders/Orders'
import Profile from './Components/Profile/Profile'
import ChangePassword from './Components/ChangePassword/ChangePassword'
import UpdateUserData from './Components/UpdateUserData/UpdateUserData'
import Wishlist from './Components/Wishlist/Wishlist'



function App() {

let routers=createHashRouter([
{path:'',element:<Layout/>,children:[

  {index:true,element:<AuthProductRouter><Login/></AuthProductRouter>},
  {path:"register",element:<AuthProductRouter><Register/></AuthProductRouter>},
  {path:'forgetpassword',element:<AuthProductRouter><ForgetPassword/></AuthProductRouter>},
  {path:'codetoemail',element:<AuthProductRouter><CodeToEmail/></AuthProductRouter>},
  {path:'resetpassword',element:<AuthProductRouter><ResetPassword/></AuthProductRouter>},



  {path:'home',element:<ProductRoute><Home/></ProductRoute>},
  {path:'cart',element:<ProductRoute><Cart/></ProductRoute>},
  {path:'brands',element:<ProductRoute><Brands/></ProductRoute>},
  {path:'products',element:<ProductRoute><Products/></ProductRoute>},
  {path:'categories',element:<ProductRoute><Categories/></ProductRoute>},
  {path:'allorders',element:<ProductRoute><Orders/></ProductRoute>},
  {path:'address/:cartId',element:<ProductRoute><Address/></ProductRoute>},
  {path:'productdetails/:id',element:<ProductRoute><ProductDetails/></ProductRoute>},
  {path:'profile',element:<ProductRoute><Profile/></ProductRoute>},
  {path:'changepassword',element:<ProductRoute><ChangePassword/></ProductRoute>},
  {path:'updateuserdata',element:<ProductRoute><UpdateUserData/></ProductRoute>},
  {path:'wishlist',element:<ProductRoute><Wishlist/></ProductRoute>},

  {path:'*',element:<Notfound/>},
]}
])
  return<>
    <AuthProvider>
      <CartContextprovide>
         <RouterProvider router={routers}/>
</CartContextprovide>
  </AuthProvider> 
  
  </>
 

  

 
}

export default App