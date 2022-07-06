import React from 'react'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import nature from '../assets/nature.jpg'
import Fade from 'react-reveal/Fade';

const Nature = () => {
    return (
        <div name='support' className='w-full mt-24'>
            <div className='w-full h-[700px] bg-gray-900/50 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={nature} alt="natureImg" />
            </div>
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className="flex flex-col md:items-start w-full px-8 py-32">
                    <div className='px-4 py-2'>
                        <Fade bottom cascade>
                            <h2 className='text-xl py-8 text-slate-300 uppercase text-left'>Nature</h2>
                            <p className='py-4 text-2xl text-slate-300 uppercase'>Lorem ipsum dolor sit amet,</p>
                            <p className='pb-6 text-2xl text-slate-300 uppercase'>consectetur adipiscing elit.</p>
                            <p className='pt-4 text-xl text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <p className='pb-4 text-xl text-slate-300'>Praesent imperdiet vitae est vitae volutpat. Aliquam consequat sapien.
                            </p>
                        </Fade>
                        <button className='w-[200px] px-8 py-4 mt-8'>Learn More</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Nature