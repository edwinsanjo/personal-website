import Image from 'next/image'
import image from '../../public/Computer.svg';


export default function ProjectsPage() {

    return (
        <div id='Projects' className='bg-[#009787] h-[200vh] lg:h-[115vh] w-screen'>
            <h1 className='text-4xl text-gray-100 text-center mb-32 font-extrabold pt-9'>Projects</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center h-56'>

                <a href='https://github.com/edwinsanjo/shopping-website' className='bg-[#127369] h-[11.5rem] mb-10 rounded-[6px] border-2 border-white text-white py-5 px-10'>
                    <h2 className='font-semibold text-base mb-2'>Shopping Website</h2>
                    <p className='w-96 text-sm'>This is One Of my Longest Solo Project i made the shopping app with express handlebars mongodb (mongodb native js module) this is a lightweight applicaion whihc require svery less computing power and a huge…</p>
                    <div className='flex gap-1 items-center mt-2'>
                        <div className='rounded-full bg-orange-500 h-3 w-3'></div><p className='text-xs'>Handlebars</p>
                    </div>
                </a>

                <a href='https://github.com/edwinsanjo/Todo-App' className='bg-[#127369] mb-10 h-[11.5rem] rounded-[6px] border-2 border-white text-white py-5 px-10'>
                    <h2 className='font-semibold text-base mb-2'>Todo-App</h2>
                    <p className='w-96 text-sm'>This is A very Simple And Easy To use todo app mad with tailwdincss and next.js (React.js) this has a very friendly ui and it is very easy and simple to use and this reading this code teaches you h…</p>
                    <div className='flex gap-1 items-center mt-2'>
                        <div className='rounded-full bg-yellow-500 h-3 w-3'></div><p className='text-xs'>Javscript</p>
                    </div>
                </a>

                <a href='https://github.com/edwinsanjo/Calculator' className='bg-[#127369] mb-10 h-[11.5rem] rounded-[6px] border-2 border-white text-white py-5 px-10'>
                    <h2 className='font-semibold text-base mb-2'>Calculator</h2>
                    <p className='w-96 text-sm'>A very SImple Calculator app with Next.js (React.js) and tailwdincss wer use the useReducer react hook and css grid with tailwdincss and havent even used an component this is a on file project (the…</p>
                    <div className='flex gap-1 items-center mt-2'>
                        <div className='rounded-full text-sm bg-yellow-500 h-3 w-3'></div><p className='text-xs'>Javascript</p>
                    </div>
                </a>

                <a href='https://github.com/edwinsanjo/discord.js-v13-command-handler' className='bg-[#127369] h-[11.5rem] mb-10 rounded-[6px] border-2 border-white text-white py-5 px-10'>
                    <h2 className='font-semibold text-base mb-3'>Discord Command Handler</h2>
                    <p className='w-96 text-sm'>This is the SImplest command hander availabe on the entire internet and ive tried to provide custome prefix enable/disable commands and custom prefix here we use the database mongodb</p>
                    <div className='flex gap-1 items-center mt-5'>
                        <div className='rounded-full bg-blue-500 h-3 w-3'></div><p className='text-xs'>Python</p>
                    </div>
                </a>

            </div>

        </div>
    )
}
