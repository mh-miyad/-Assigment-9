import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import data from '../Data/jobs.json'
import JobHeader from '../Component/JobHeader'

const Details = () => {

    const jobsId = useLoaderData()

    const userId = parseInt(jobsId)

    console.log(userId);

    const existingData = data.find((ele) => ele.id === userId)



    return (
        <div>
            <JobHeader/>
           <div className='container mx-auto '>
           <div className='flex  justify-around'>
                     <div className=' border w-1/2'> 
                        <p className=' text-xl lg:text-2xl font-bold'> Job Description : <span className=' text-sm lg:text-lg font-normal'> {existingData.job_description}</span></p>
                        <p className=' text-xl lg:text-2xl font-bold'> Job Responsibility: <span className=' text-sm lg:text-lg font-normal'> {existingData.job_responsibility}</span></p>
                      
                     </div>
                     <div className='border  bg-fuchsia-500/20 p-10'> 


                        <div>
                        Job Details

                        </div>
                        <hr  className='h-0.5 my-5 bg-slate-600'/>
                        <div>
                          
                           <p> $ salary: {existingData.salary}</p>
                           <p> <span className='font-bold'> Job Title</span>:{existingData.job_title}</p>
                        </div>
                     </div>
            </div>
           </div>
        </div>
    )
}

export default Details