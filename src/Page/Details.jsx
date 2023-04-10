import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import data from '../Data/jobs.json'

const Details = () => {

    const jobsId = useLoaderData()

    const userId = parseInt(jobsId)

    console.log(userId);

    const existingData = data.find((ele) => ele.id === userId)



    return (
        <div>
            <div>

            </div>
        </div>
    )
}

export default Details