import { createContext,  useState } from "react";
import axios from 'axios'
import toast from 'react-hot-toast'

export let Fav=createContext('')


export default function FavProvide({children}) {


  const [Favourit, setFavourit] = useState([])
  const [isloading, setisloading] = useState(true)

    async function AddWishlist(id){

    
          
       try {
      
        const {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
          productId: id
      },{
        headers:{
          token:localStorage.getItem('Token')
        }
      })
      if (data.status === 'success') {
        toast.success(data.message)
      
      
      
      }
       } catch (error) {
        console.log(error.response.data.message)
       }
      
     
      }
      
      async function getAllFavouriteWishlist() {
        setisloading(true)
        const {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
          headers:{
            token:localStorage.getItem('Token')
          }
        })
        console.log(data.data)
        setFavourit(data.data)
        setisloading(false)
      }   

      async function removeFavourite(id) {

        try {
         const {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
           headers:{
             token:localStorage.getItem('Token')
           }
         })
        
       
         if (data.status === 'success') {
            getAllFavouriteWishlist()
          toast.success(data.message)
         }
        } catch (error) {
         console.log(error.response.data.message)
        }
       
       }



    return <Fav.Provider value={{AddWishlist,Favourit,isloading,removeFavourite,getAllFavouriteWishlist}}>

        {children}

    </Fav.Provider>
}