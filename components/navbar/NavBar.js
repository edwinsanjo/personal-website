import Head from 'next/head'
import Image from 'next/image'

export default function NavBar() {
    return (
        <nav className='flex items-center justify-center lg:justify-between pt-4  lg:px-32 lg:py-6'>
            <div className=''>
                <a href="/" className='text-lg font-bold text-white'>Edwin Sanjo Soji</a>
            </div>
            <div className='hidden lg:block'>
                <ul class="text-white md:flex space-x-7">
                    <li class="font-semibold font-sm"><a href="">Home</a></li>
                    <li class="font-semibold font-sm"><a href="">About</a></li>
                    <li class="font-semibold font-sm"><a href="#Projects">Projects</a></li>
                    <li class="font-semibold font-sm"><a href="">Contact</a></li>
                </ul>
            </div>
        </nav >
    );
}