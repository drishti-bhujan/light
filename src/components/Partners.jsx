import React from 'react'
import logo from '../assets/logo.png'
import Fade from 'react-reveal/Fade';

const Partners = () => {
    return (
        <div className='w-full md:mt-12 bg-zinc-800'>
            <div className='max-w-[800px] md:mx-auto'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='pt-20 md:pt-[150px] md:pb-12'>
                        <h2 className='text-amber-400 uppercase text-2xl'>Brand Partners</h2>
                    </div>
                    <div className='py-10 md:py-[50px] pb-12 flex flex-col md:flex-row md:mb-20'>
                        <Fade bottom>
                            <div className='my-5 md:mx-12'>
                                <h2 className='text-white uppercase text-3xl'>Partner 1</h2>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className='my-5 md:mx-12'>
                                <h2 className='text-white uppercase text-3xl'>Partner 2</h2>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className='my-5 md:mx-12'>
                                <h2 className='text-white uppercase text-3xl'>Partner 3</h2>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners