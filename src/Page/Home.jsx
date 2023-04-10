import React, { useState } from 'react'
import Header from '../Component/Header'
import CatagoryJob from '../Component/CatagoryJob'
import CartComponent from '../Component/CartComponent'
 import data from '../Data/jobs.json'
const Home = () => {

  const [ showMore , setShowMore] = useState(false)
  const eventHandler = (id)=>{

    alert(id)
  }
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const visibleData = showMore ? data : data.slice(0, 4);

  return (
    <div className='container mx-auto  '>
         <Header/>
      <CatagoryJob/>
    <div>
       <p className='text-center text-2xl md:text-5xl my-5'>Featured Jobs</p>
       <p className='text-center text-sm md:text-lg mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
   <div className='text-center'>
   <div className=' grid grid-cols-1 md:grid-cols-2 text-start'>
        
        { visibleData.map((ele)=><CartComponent key={ele.id} img={ele.company_logo} jobTitle={ele.job_title} location={ele.fulltime_or_parttime}
        remote={ele.remote_or_onsite} salry={ele.salary} place={ele.location} data={ele.id} eventHandler={eventHandler}/>)}
        </div>
        <button
          onClick={toggleShowMore}
          className="my-5 rounded-md  font-bold text-white bg-btn py-3 px-5 shadow-2xl shadow-red-600/20 "
        >
          {showMore ? "Show less" : "Show more"}
        </button>
   </div>
    </div>
    </div>
  )
}

export default Home