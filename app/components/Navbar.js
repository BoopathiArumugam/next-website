'use client'
import Logo from "@/app/components/logo.jpeg"
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='fixed w-full h-24 shadow-xl bg-white'> 
    <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <Link href='/'>
      <lmage
      src={Logo}
      alt="logo"
      width="205"
      height="75"
      className="cursor-pointer"
      />
      </Link>
    <div className='hidden sm:flex'>
        <ul className='hidden sm:flex'>
            <Link href="/Home">
            <li className='ml-10 uppercase hover:border-b text-xl'>Home</li>
            </Link>
            <Link href="/About">
            <li className='ml-10 uppercase hover:border-b text-xl'> About us</li>
            </Link>
            <Link href="/services">
            <li className='ml-10 uppercase hover:border-b text-xl'> services</li>
            </Link> 
            <Link href="/contact">
            <li className='ml-10 uppercase hover:border-b text-xl'> contact us</li>
            </Link>
        </ul>
    </div>
    </div>
    </nav>
  )
}

export default Navbar