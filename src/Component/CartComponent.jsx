import React from 'react'
import ButtonCom from './ButtonCom'
import logo from '../assets/img/Location Icon.png'
import { Button } from 'flowbite-react'

const CartComponent = () => {
  return (
    <div className='mx-5'>
         <div className='container mx-auto '>
           <div className='border p-5 my-5 space-y-2'>
            <img src='https://i.ibb.co/nm14Wjc/google-1-1-1-1.png' alt="" />
            <p>Technical Database Engineer</p>
            <div className='flex justify-evenly'>
              <ButtonCom/>
              <ButtonCom/>
            </div>
            <div className='flex gap-3'>
              <img src={logo} alt="" />
              <p> Dhaka Bangladesh </p>
              <p>  $ salary:100k-300k </p>
            </div>
            <Button className='bg-btn'> View Details </Button>       
                </div>


         </div>



    </div>
  )
}

export default CartComponent