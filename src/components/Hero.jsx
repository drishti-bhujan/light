import React from 'react'
import mainPicture from '../assets/lightHero.jpg'
import Fade from 'react-reveal/Fade';

const Hero = () => {
    return (
        <div className='w-full'>
            <div className='w-full h-screen bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={mainPicture} alt="main" />
            </div>
            <div className="flex flex-col md:items-start w-full px-8 py-64">
                <div className="absolute inset-x-0 bottom-0 ml-12 mb-12 md:ml-32 md:mb-12">
                    <Fade bottom>
                        <h1 className='py-3 text-4xl md:text-6xl text-white'>Changing the future</h1>
                        <h1 className='py-3 text-4xl md:text-6xl text-white'>of energy</h1>
                        <button className='w-[85%] px-8 py-4 mt-8 md:w-[200px]'>Learn More</button>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Hero