'use client';

import React, { useCallback } from 'react'
import Model from '../../models/Model'
import useRentModel from "@/app/hooks/useRentModel";


function AddListing() {
  const rentModel=useRentModel();

  const onRent =useCallback(()=>{

    rentModel.onOpen();
      //check if user is loged in


  },[ /* pass current loged in user and login method*/])
  return (
    <div>
      {/* <Model isOpen/> */}
      <input
                           type="submit"
                           value="Upload"
                           id="newslettersubmit"
                           className='rounded-md bg-indigo-600 px-4 py-2 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                           onClick={(onRent)}                      
                          />
    </div>
  )
}

export default AddListing