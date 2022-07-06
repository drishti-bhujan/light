import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 200) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    
    return (
        <div className={colorChange || nav ? 'bg-zinc-800 w-screen h-[150px] z-10 fixed border-b border-b-amber-600' : 'bg-transparent w-screen h-[150px] z-10 fixed border-b border-b-amber-600'}>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center flex-col ml-10'>
                    <img className='w-20 h-20' src={logo} alt="heroImg" />
                    <h3 className='text-xs font-bold mr-4 text-center pt-2 text-white'>LIGHT</h3>
                </div>
                <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <li>ABOUT</li>
                        <li>REGION</li>
                        <li>SECTORS</li>
                        <li>NEWS</li>
                        <li>PARTNERS</li>
                        <li>INVEST</li>
                        <li>SUPPLIERS</li>
                        <li>CAREER</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-20'>
                    <select className='bg-transparent text-white'>
                        <option selected value="ENG">EN</option>
                    </select>
                </div>
                <div className='md:hidden mr-6' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5 cursor-pointer text-white' /> : <XIcon className='w-5 cursor-pointer text-white' />}
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-800 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full py-5'>ABOUT</li>
                <li className='border-b-2 border-zinc-300 w-full py-5'>REGION</li>
                <li className='border-b-2 border-zinc-300 w-full py-5'>SECTORS</li>
                <li className='border-b-2 border-zinc-300 w-full py-5'>NEWS</li>
                <li className='border-b-2 border-zinc-300 w-full py-5'>PARTNERS</li>
                <li className='border-b-2 border-zinc-300 w-full py-5'>INVEST</li>
                <li className='border-b-2 border-zinc-300 w-full py-5'>SUPPLIERS</li>
                <div className='flex flex-col my-4'>
                    <select className='bg-transparent text-white ml-3'>
                        <option selected value="ENG">EN</option>
                    </select>
                </div>
            </ul>
        </div>
    )
}

export default Navbar