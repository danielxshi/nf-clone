import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            console.log("scrolling")
            if (window.scrollY > 0) {
                setIsScrolled(true)

            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className='flex items-center space-x-2 md:space-x-10'>
                <Image alt="" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" width={100} height={100} className="cursor-pointer object-contain" />
                <ul className='hidden space-x-4 md:flex'>
                    <li className='headerLink'>Home</li>
                    <li className='headerLink'>TV Shows</li>
                    <li className='headerLink'>Movies</li>
                    <li className='headerLink'>New & Popular</li>
                    <li className='headerLink'>My List</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <MagnifyingGlassIcon className='hidden sm:inline h-6 w-6' />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className='h-6 w-6' />
                <Link href="/account">
                    <Image className="cursor-pointer rounded" src="/images/Netflix-avatar.png" width={35} height={35} alt=""></Image>
                </Link>
            </div>
        </header>

    )
}

export default Header