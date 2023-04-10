import React from 'react'
import Header from '../Component/Header'
import CatagoryJob from '../Component/CatagoryJob'
import CartComponent from '../Component/CartComponent'
 import data from '../Data/jobs.json'
const Home = () => {
  return (
    <div className='container mx-auto  '>
         <Header/>
      <CatagoryJob/>
    <div>
       <p className='text-center text-2xl md:text-5xl my-5'>Featured Jobs</p>
       <p className='text-center text-sm md:text-lg mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
    <div className=' grid grid-cols-1 md:grid-cols-2'>
        
        { data.map((ele)=><CartComponent/>)}
        </div>
  
    </div>
    </div>
  )
}

export default Home