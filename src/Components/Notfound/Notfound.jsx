import React from 'react'
import NotfImg from '../../Assets/images/error.svg'
import { Helmet } from 'react-helmet'
const Notfound = () => {
  return (
    <>
     <Helmet>
  <meta charSet="utf-8" />
  <title>notfound Page</title>
  <meta name="description" content="notfound" />

</Helmet>
    

    <div className='text-center py-5'>
      <img src={NotfImg} alt="" className='img-fluid'/>
    </div>
     </> )
}

export default Notfound