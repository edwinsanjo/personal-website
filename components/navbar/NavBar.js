import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className='flex items-center justify-center lg:justify-between pt-4  lg:px-32 lg:py-6'>
            <div className=''>
                <Link href="/" className='text-lg font-bold text-white'>Edwin Sanjo Soji</Link>
            </div>
            <div className='hidden lg:block'>
                <ul className="text-white md:flex space-x-7">
                    <li className="font-semibold font-sm"><Link href="">Home</Link></li>
                    <li className="font-semibold font-sm"><Link href="">About</Link></li>
                    <li className="font-semibold font-sm"><Link href=''>Projects</Link></li>
                    <li className="font-semibold font-sm"><Link href="">Contact</Link></li>
                </ul>
            </div>
        </nav >
    );
}
