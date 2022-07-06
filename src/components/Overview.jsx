import React from 'react'
//import image1 from '../assets/image1.jpg'
import image1 from '../assets/lightImg.jpg'
import image2 from '../assets/plane.jpg'
import image3 from '../assets/solarPanel.jpg'
import image4 from '../assets/woman.jpg'
import Fade from 'react-reveal/Fade';

import { ArrowNarrowRightIcon } from '@heroicons/react/outline'

const Overview = () => {
    return (
        <div name='about' className='w-full mt-[250px] md:mt-[300px] mb-[100px]'>
            <div className='max-w-[1000px] mx-3 md:mx-auto'>
                <div className='text-center'>
                    <Fade bottom>
                        <h2 className='text-5xl font-bold'>WHAT'S HAPPENING</h2>
                        <h2 className='text-5xl mt-5 mb-12'>AT LIGHT</h2>
                    </Fade>
                </div>

                <div className='grid md:grid-cols-2 gap-12 px-2 text-center'>
                    <div className='py-auto'>
                        <img src={image1} alt="image1" />
                        <p className='text-black my-5 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut leo sed sapien suscipit aliquet. </p>
                        <div className={'flex flex-row items-center'}>
                            <div className="text-black"><p>Read More</p></div>
                            <ArrowNarrowRightIcon className={'text-black w-5 ml-3'} />
                        </div>
                    </div>
                    <div className='py-auto'>
                        <img className='w-full' src={image2} alt="image3" />
                        <p className='text-black my-5 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut leo sed sapien suscipit aliquet. </p>
                        <div className={'flex flex-row items-center'}>
                            <div className="text-black"><p>Read More</p></div>
                            <ArrowNarrowRightIcon className={'text-black w-5 ml-3'} />
                        </div>
                    </div>
                    <div className='py-auto'>
                        <img className='w-full' src={image3} alt="image3" />
                        <p className='text-black my-5 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut leo sed sapien suscipit aliquet. </p>
                        <div className={'flex flex-row items-center'}>
                            <div className="text-black"><p>Read More</p></div>
                            <ArrowNarrowRightIcon className={'text-black w-5 ml-3'} />
                        </div>
                    </div>
                    <div className='py-auto'>
                        <img className='w-full' src={image4} alt="image4" />
                        <p className='text-black my-5 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut leo sed sapien suscipit aliquet. </p>
                        <div className={'flex flex-row items-center'}>
                            <div className="text-black"><p>Read More</p></div>
                            <ArrowNarrowRightIcon className={'text-black w-5 ml-3'} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview