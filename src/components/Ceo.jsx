import React from 'react'
import logo from '../assets/logo.png'

const Ceo = () => {
    return (
        <div className='w-full md:my-12'>
            <div className='max-w-[800px] mx-3 md:mx-auto'>
                <div className='flex flex-col items-center justify-center text-center mt-8 md:mt-[150px]'>
                    <div>
                        <img className='w-32 h-32 mb-8' src={logo} alt="logoImg" />
                    </div>
                    <div>
                        <p className='md:text-lg text-black'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse ut leo sed sapien suscipit aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse ut leo sed sapien suscipit aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse ut leo sed sapien suscipit aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse ut leo sed sapien suscipit aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse ut leo sed sapien suscipit aliquet.
                        </p>
                        <p className='text-base text-gray-500 mt-4'>Lorem ipsum dolor sit amet</p>
                        <p className='text-xl font-semibold text-gray-800 mb-7'>Lorem ipsum</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ceo