import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UilTimes } from '@iconscout/react-unicons'
import { UilApps } from '@iconscout/react-unicons'

const navLinks = [
    { name: `Home`, href: `#home` },
    { name: `About`, href: `#about` },
    { name: `Projects`, href: `#projects` },
    { name: `Contact`, href: `#contact` },
]

const Navbar = ({ toggle, showMenu }) => {
    const [activeNav, setActiveNav] = useState("#home")
    return (
        <nav className='max-w-[968px] md:mx-auto sm:mx-2 flex justify-between items-center space-x-[1rem] md:h-[4.5rem] sm:h-[3rem]'>
            <Link to={`/`} className='nav_logo flex space-x-[0.3rem] text-[1.5rem]'>
                <span className='text-blue font-bold'>dk</span>
                <span className='text-title-color-dark font-bold'>mensah</span>
            </Link>

            <div className={toggle ? `md:rounded-full bg-[#E2E2E2] md:py-2.5 md:px-5 md:top-0 sm:top-0 md:w-auto transition-all sm:shadow-xl md:mt-auto sm:w-full sm:pt-[3rem] sm:px-auto sm:pb-[4rem] rounded-sm sm:mt-auto delay-300` : `md:rounded-full bg-[#E2E2E2] md:py-2.5 md:px-5 md:top-0 md:w-auto sm:shadow-xl sm:hidden md:block sm:w-full `}>
                <ul className='md:flex md:space-x-[2rem] md:list-none sm:grid sm:grid-cols-[repeat(1,_1fr)] sm:gap-[2rem]'>
                    {navLinks.map((link) => {
                        return (
                            <li className=''>
                                <a href={link.href} key={link.name} onClick={() => setActiveNav(link.href)}
                                    className={activeNav === link.href ? `nav_link text-title-color-dark flex flex-col items-center text-small-font-size font-font-medium transition` : `nav_link flex flex-col items-center text-small-font-size text-title-color hover:to-title-color-dark font-font-medium transition`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <UilTimes size="24" color="black" className="md:hidden sm:block sm:absolute right-[5rem] bottom-[0.6rem] text-[1.7rem] cursor-pointer text-title-color hover:text-title-color-dark" onClick={() => showMenu(!toggle)} />
            </div>

            <div className='md:hidden sm:block text-[1.1rem] cursor-pointer pt-[10px] px-[10px] pb-[5px] rounded-xl sm:text-[1.1rem] sm:cursor-pointer sm:py-[10px] sm:px-[10px] sm:rounded-xl' onClick={() => showMenu(!toggle)}>
                <UilApps size="18" color="black" />

            </div>
        </nav>
    )
}

export default Navbar