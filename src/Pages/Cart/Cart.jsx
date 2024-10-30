import axios from 'axios'
import React, { useContext,  useEffect,  useState } from 'react'
import CartProduct from '../../Components/CartProduct/CartProduct'
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { Helmet } from 'react-helmet';


const Cart = () => {
  const {cart,setCart,isloading, setisloading,getLoggedInCartProducts}=useContext( CartContext)

  const [timeOutId, settimeOutId] = useState()
  
function removeProductFromCart(id) {
const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then(async(result) => {
      if (result.isConfirmed) {
        setisloading(true)
  
        const {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
          headers:{
            token:localStorage.getItem('Token')
          }
        })
        setCart(data)
      
        setisloading(false)
  
  
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  
  
}
  
function clearCart() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then(async(result) => {
      if (result.isConfirmed) {
        setisloading(true)
        const {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
          headers:{
            token:localStorage.getItem('Token')
          }
        })
        setCart(data)
      
        toast.success(' remove All products Successfully !',{
          duration: 1500,
      })
        setisloading(false)
  
  
  
  
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your All Products has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }
  
function updataCartProductCount(id,count) {
  
  clearTimeout(timeOutId)
  
   let x =setTimeout(async() => {
    if (count > 0) {
      
      const {data}=await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      
          count: count
    
      },{
        headers:{
          token:localStorage.getItem('Token')
        }
      })
      console.log(data)
      setCart(data)
    
    }else{
      removeProductFromCart(id)
     }
  }, 500);
  settimeOutId(x)
  }
  
useEffect(()=>{
  setisloading(true)
          
    getLoggedInCartProducts()
    
    },[])

  return (<>
<Helmet>
  <meta charSet="utf-8" />
  <title>Cart Page</title>
</Helmet>



{isloading?


<div className=' d-flex justify-content-center align-items-center py-5 my-3'>
<i className=' fas fa-spinner fa-spin fa-2x'></i>

</div>

:
<>

{cart?.data?.products.length >0 ?<div className='my-5'>
<button className='btn btn-danger d-block ms-auto mb-4' onClick={clearCart}>Clear Cart</button>
{cart?.data?.products?.map((product,index)=><CartProduct key={index} productcart={product} removeproduct={removeProductFromCart} updataCartProductCount={updataCartProductCount}  />)}
<div className='d-flex justify-content-between align-items-center'>
  <Link to={`/address/${cart?.data?._id}`} className='btn bg-main text-white'>CheckOut</Link>
  <p className='m-0 p-0'><span className='fw-bolder'> cart Price</span>  : {cart?.data?.totalCartPrice} EGP</p>
</div>
</div>
:<div className=' bg-success-subtle py-3 my-5'>
<h2 className='text-center text-muted'>No products in Your Cart</h2>
</div>}

</>

}




 
 
 </> )}

export default Cart