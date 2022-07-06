import React from 'react'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import career from '../assets/career.jpg'
import Fade from 'react-reveal/Fade';

const Career = () => {
    return (
        <div name='support' className='w-full'>
            <div className='w-full h-[700px] bg-gray-900/80 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={career} alt="careerImg" />
            </div>
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className="flex flex-col md:items-start w-full px-8 pt-32 pb-16">
                    <div className='px-4 py-2'>
                        <Fade bottom>
                            <h2 className='text-xl py-8 text-slate-300 uppercase text-left'>Career</h2>
                            <p className='py-4 text-2xl text-slate-300 uppercase'>Lorem ipsum dolor sit amet,</p>
                            <p className='pb-6 text-2xl text-slate-300 uppercase'>consectetur adipiscing elit.</p>
                            <p className='pt-4 text-xl text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <p className='pb-4 text-xl text-slate-300'>Praesent imperdiet vitae est vitae volutpat. Aliquam consequat sapien.
                            </p>
                        </Fade>
                        <button className='w-[200px] px-8 py-4 mt-8'>Careers</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Career