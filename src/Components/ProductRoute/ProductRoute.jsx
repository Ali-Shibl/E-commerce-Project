import React, { useContext } from 'react'
import { Auth } from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProductRoute = ({children}) => {
    
const{userIsLogiedin}=useContext(Auth)
return <>
{userIsLogiedin ? children : <Navigate to={'/login'} />}

</>
}

export default ProductRoute