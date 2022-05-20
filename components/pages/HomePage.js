import Image from 'next/image'
import image from '../../public/Computer.svg';
import { useCallback, useEffect, useState } from 'react';
import NavBar from '../navbar/NavBar';

const hobbys = ['Programmer', 'Video Editor', "Designer", "Gamer", "Music Lover", "Web Developer"]

export default function HomePage() {

    const [Hobby, setHobbys] = useState("Programmer");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * hobbys.length);
        setHobbys(hobbys[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        <div className='overflow-y-hidden'>

            <NavBar />

            <div className='lg:hidden flex h-screen w-screen items-center justify-center'>
                <div className='relative'>
                    <Image alt='image of a computer' className='opacity-30 bottom-1' src={image} />
                    <div className='absolute top-[50%] left-0 right-0 bottom-0'>
                        <p className='text-lg text-center text-white'>Hello There</p>
                        <p className='text-3xl text-center text-white'>I am <span className='font-[500]'>Edwin Sanjo Soji</span></p>
                        <p className='text-lg text-center text-white'>I am a {Hobby}</p>
                    </div>
                </div>
            </div>

            <div className='hidden lg:flex lg:gap-16 lg:items-center lg:justify-center lg:h-screen lg:w-screen'>
                <div className='lg:p-10'>
                    <p className='text-2xl text-white pb-5'>Hello There</p>
                    <p className='xl:text-5xl lg:text-4xl text-white pb-5'>I am <span className='font-[500]'>Edwin Sanjo Soji</span></p>
                    <p className='text-2xl text-white'>I am a {Hobby}</p>
                </div>
                <div className='lg:p-10'>
                    <Image className='' alt='image of a computer' src={image} />
                </div>
            </div>

        </div>
    )
}
