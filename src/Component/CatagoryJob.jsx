import React from 'react'
import BoxCom from './BoxCom'
import logo1 from '../assets/img/accounts 1.png'
import logo2 from '../assets/img/business 1.png'
import logo3 from '../assets/img/social-media 1.png'
import logo4 from '../assets/img/chip 1.png'

const CatagoryJob = () => {

    const catagory = [
        {   logo:logo1,
            field:'Account & Finance',
            seats:'300 Jobs Available'
        },
        {   logo:logo2,
            field:'Creative Design',
            seats:'100+ Jobs Available'
        },
        {   logo:logo3,
            field:'Marketing & Sales',
            seats:'150 Jobs Available'
        },
        {   logo:logo4,
            field:'Engineering Job',
            seats:'224 Jobs Available'
        },
    ]
  return (
    <div className='my-10'>





        <div className='container mx-auto '>
             <div className='text-center my-10 '>
          <span className=' text-3xl lg:text-[48px]  font-semibold my-6 '>   Job Category List</span>
            
             </div>
            <div className='mx-auto'>
            <div className='flex  justify-evenly flex-wrap gap-3'>
                
                {  catagory.map((ele ,id)=>  <BoxCom jobs={ele.seats} logo={ele.logo} title={ele.field} key={id}/>)  
                
               }
                
                   </div>  
            </div>
        </div>
    </div>
  )
}

export default CatagoryJob