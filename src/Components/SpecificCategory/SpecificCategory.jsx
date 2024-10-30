import React from 'react'

const SpecificCategory = ({catrgoryData}) => {





  return (


    <>


<div className='row g-3'>


 

{catrgoryData.map((catData,index)=><div key={index} className='col-md-4 '>
    <div className='text-center py-4 px-3 border rounded-2 hover-main'>
    <h5 className='p-0 m-0 fw-bolder'>{catData.name}</h5>


    </div>
   


</div>)}
   </div>
    </>
    
    
    )
}

export default SpecificCategory