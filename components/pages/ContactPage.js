import Image from 'next/image'
import image from '../../public/contact.svg'
import { FaInstagram, FaGithub, FaSpotify, FaDiscord, FaCodepen, FaTwitter } from "react-icons/fa";

export default function Home() {
    return (
        <div className="bg-[#55aca4] h-[75vh] w-screen">
            <h2 className='text-white font-bold text-4xl text-center pb-10 pt-10'>Contact Me</h2>
            <div className='flex items-center justify-center'>

                <div className='flex items-center flex-col lg:flex-row gap-32 justify-center'>
                    {/* <div className='hidden lg:block'>
                        <Image className='opacity-30' src={image} />
                    </div> */}
                    <div>
                        <h3 className='text-xl text-white font-semibold mb-2'>Newsletter</h3>
                        <p className='text-white mb-2'>Subscribe to my newsletter </p>
                        <input placeholder='Email' className='px-3 py-2 placeholder-slate-300 text-slate-600 bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full' />
                    </div>
                    <div>
                        <h3 className='text-xl text-white mb-2 font-semibold'>Follow Me</h3>
                        <p className='text-white mb-2'>Connect me on social</p>
                        <div className='grid grid-cols-6 gap-4 place-items-center'>

                            <a href='https://discord.com/users/763978445847658527' className='text-white'>
                                <FaDiscord className='w-7 h-7' />
                            </a>
                            <a href='https://github.com/edwinsanjo' className='text-white'>
                                <FaGithub className='w-7 h-7' />
                            </a>
                            <a href='https://open.spotify.com/user/o85ngdvgkddg8jxv6xijsberc' className='text-white'>
                                <FaSpotify className='w-7 h-7' />
                            </a>
                            <a href='https://www.instagram.com/edwinsanjo/' className='text-white'>
                                <FaInstagram className='w-7 h-7' />
                            </a>
                            <a href='https://twitter.com/edwinSanjo/' className='text-white'>
                                <FaTwitter className='w-7 h-7' />
                            </a>
                            <a href='https://codepen.io/edwinsanjo' className='text-white'>
                                <FaCodepen className='w-7 h-7' />
                            </a>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
