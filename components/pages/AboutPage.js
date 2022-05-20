import Image from 'next/image'
import image from '../../public/man-coding.svg'


export default function HomePage() {

    return (
        <div className='bg-[#127369] overflow-y-hidden'>

            <div className='md:hidden h-[80vh] w-screen'>
                <h2 className='text-4xl text-white text-center font-bold mt-9 mb-9'>About</h2>
                <div className='flex flex-col items-center gap-16 justify-center'>
                    <p className='text-lg px-5 text-white'>Hello There i am Edwin Sanjo Soji i am a passonated web developer and i also do android and ios stuff i love coding and i am not a professional programmer i a just a programming hobbysit and i am a big fan of crypto and stock markets. glad you saw my website this is my best design dont be shy to copy this and use as yours dont forget to star me on <a href='https://github.com/edwinsanjo/personal-website' className='text-blue-300'>Github</a></p>
                    <Image className='' alt='image of a computer' src={image} />
                </div>
            </div>

            <div className='hidden md:block md:h-[90vh] md:w-screen'>
                <h2 className='text-4xl text-white my-[3%] font-bold  text-center top-60'>About</h2>
                <div className='md:gap-16 flex-col-2 md:items-center md:justify-center md:flex'>
                    <div className='md:p-5 lg:p-5'>
                        <Image className='' alt='image of a computer' src={image} />
                    </div>
                    <div className='md:p-5 lg:p-10'>
                        <p className='text-lg leading-8 md:w-[24rem] lg:w-[34rem] text-white pb-5'>Hello There i am Edwin Sanjo Soji i am a passonated web developer and i also do android and ios stuff i love coding and i am not a professional programmer i a just a programming hobbysit and i am a big fan of crypto and stock markets. glad you saw my website this is my best design dont be shy to copy this and use as yours dont forget to star me on <a href='https://github.com/edwinsanjo/personal-website' className='text-blue-300'>Github</a></p>
                    </div>
                </div>
            </div>

        </div>

    )
}