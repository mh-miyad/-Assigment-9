import React from 'react'
import Header from '../Component/Header'
import CatagoryJob from '../Component/CatagoryJob'
import CartComponent from '../Component/CartComponent'

const Home = () => {
  return (
    <div className='container mx-auto  '>
         <Header/>
      <CatagoryJob/>

      <CartComponent/>

    </div>
  )
}

export default Home