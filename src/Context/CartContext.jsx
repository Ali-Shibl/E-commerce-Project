import axios from "axios"
import {createContext,  useState} from "react"
import toast from 'react-hot-toast';



export const CartContext=createContext('')


export default function CartContextprovide(props) {

    const [cart, setCart] = useState({})
    const [isloading, setisloading] = useState(true)
    


async function getLoggedInCartProducts(){
  
        try {

          const {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
          headers:{
            token:localStorage.getItem('Token')
          }
          
        })
        setCart(data)
        } catch (error) {
          console.log(error)
        }

        setisloading(false)

}

      

async function AddToCart(id) {
    try {
        const {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
        productId:id
    },{
        headers:{
            token:localStorage.getItem('Token')
        }
    })
    console.log(data)
    setCart(data)
    toast.success(data.message,{
        duration: 1500,
    })

    
    } catch (error) {
        console.log(error)
        toast.error('error')

    }
 
}





    return <CartContext.Provider value={{AddToCart,cart,setCart,isloading, setisloading,getLoggedInCartProducts}}>
        {props.children}
    </CartContext.Provider>
    
}