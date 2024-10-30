import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {CartContext} from '../../Context/CartContext'
import { Auth } from '../../Context/AuthContext'
import { Fav } from '../../Context/WishListContext'

const Product = ({product}) => {

const {AddToCart}=useContext(CartContext)
const {AddWishlist}=useContext(Fav)
const {userIsLogiedin}=useContext(Auth)

let navigate=useNavigate()



function addcart(id){
  if (userIsLogiedin) {
    AddToCart(id)
  }else{
    navigate('/login')
  }

}
function addWishList(id){
  if (userIsLogiedin) {
    AddWishlist(id)

  }else{
    navigate('/login')
  }

}


  const {imageCover,price,category,title,ratingsAverage ,id}=product


return (
    <>

    <div className='col-sm-6 col-md-4 col-lg-3 col-xxl-2'>
      
      <div className='product cursor-pointer overflow-hidden p-2 position-relative'>


<i  className=" fa-regular fa-heart fs-5 position-absolute wishlist " onClick={()=>addWishList(id)}></i>


     <Link to={`/productdetails/${id}`}>
     <img src={imageCover} alt={title} className='w-100' />
     <h1 className='h5 font-sm text-main mt-2'>{category.name}</h1>
      <h2 className='h6 fw-bolder'>{title.split(' ').splice(0,2).join(' ')}</h2> 
      <p className='d-flex justify-content-between'>
        <span>{price}</span>
        <span>
          <i className='fas fa-star rating-color me-1'></i>
          {ratingsAverage}

        </span>
      </p>
     </Link>
      <button className='btn bg-main text-white w-100' onClick={()=>addcart(id)}>+Add to Cart</button>

            

      </div>

    </div>

      
    
    
    
    </>
  )
}

export default Product