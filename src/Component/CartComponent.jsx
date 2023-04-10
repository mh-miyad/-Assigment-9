import React from 'react'
import ButtonCom from './ButtonCom'
import logo from '../assets/img/Location Icon.png'
import { Button } from 'flowbite-react'

const CartComponent = ({jobTitle,img,location ,place ,salry,remote}) => {
  return (
    <div className='mx-5'>
         <div className='container mx-auto '>
           <div className='border p-5 my-5 space-y-3 rounded-lg shadow'>
           <div className='w-full'>
           <img src={img} alt=""  className='h-12'/>
           </div>
            <p className='font-bold'>{jobTitle}</p>
            <div className='flex justify-start gap-5'>
              <ButtonCom location={location}/>
              <ButtonCom location={remote}/>
            </div>
            <div className='flex gap-3'>
              <img src={logo} alt="" className='w-5 h-5 sm:w-auto sm:h-auto' />
              <p> {place} </p>
              <p>  $ salary:{salry} </p>
            </div>
            <Button className='bg-btn '> View Details </Button>       
                </div>


         </div>



    </div>
  )
}

export default CartComponent