import React from 'react'
import Sitting from '../../assets/service/Group 18007.svg'
import Grooming from '../../assets/service/Grooming white.svg'
import Walking from '../../assets/service/Walking White.svg'
import Breading from '../../assets/service/Breeding White.svg'
import Training from '../../assets/service/Path 27524.svg'
import Photography from '../../assets/service/Photography White.svg'


const Provider = () => {
  return (
    <div className="my-6 mx-12 mx-auto  px-8">
    <div className="mb-9">
       <h1 className="text-2xl text-gray-600 ">Pet Service Providers</h1>
    
    </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-8 text-white">

          <div className='bg-gradient-to-r from-green-500 to-green-500  flex flex-col p-4 justify-center items-center'  >
            <img src={Sitting} alt="Sitting"  />
            <h1  className="text-2xl py-2">Sitting</h1>
         
          </div>
          <div className='bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col p-4 justify-center items-center'>
            <img src={Grooming} alt="Grooming" />
            <h1  className="text-2xl py-2">Grooming</h1>
          </div>
          <div className='bg-gradient-to-r from-red-500 to-red-500 flex flex-col p-4 justify-center items-center'>
            <img src={Walking} alt="Walking" />
            <h1  className="text-2xl py-2">Walking</h1>
          </div>
          <div className='bg-gradient-to-r from-yellow-500 to-yellow-500 flex flex-col pt-8 justify-center items-center'>
            <img src={Breading} alt="Breading" />
            <h1  className="text-2xl py-2">Breading</h1>
          </div>
          <div className='bg-gradient-to-r from-sky-500 to-sky-500 flex flex-col p-4 justify-center items-center'>
            <img src={Training} alt="Training" />
            <h1  className="text-2xl py-2">Training</h1>
          </div>
          <div className='bg-gradient-to-r from-blue-500 to-blue-500 flex flex-col p-4 justify-center items-center'>
            <img src={Photography} alt="Photography" />
            <h1  className="text-2xl py-2">Photography</h1>
          </div>
        
        </div>
    
     
</div>
  )
}

export default Provider