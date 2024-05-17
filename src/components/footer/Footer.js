import React from 'react'
import { Link } from 'react-router-dom'
import { UilLinkedin } from "@iconscout/react-unicons"
import { UilGithub } from "@iconscout/react-unicons"
import { UilTwitterAlt } from "@iconscout/react-unicons"
import { UilInstagramAlt } from "@iconscout/react-unicons"
import { UilTelegram } from "@iconscout/react-unicons"

const Footer = () => {
    return (
        <footer className='bg-container-color border-t-[1px] border-solid border-[#0000001A]' id='contact'>
            <div className='py-[2rem] px-0 pb-[6rem] max-w-[968px] md:mx-auto sm:mx-mb-1-5'>
                <h1 className='text-title-color text-center mb-mb-2'>Mensah</h1>

                <ul className='flex justify-center gap-x-[1.5rem] mb-mb-2'>
                    <li>
                        <a href='#about' className='text-title-color hover:text-title-color-dark'>
                            About
                        </a>
                    </li>

                    <li>
                        <a href='#projects' className='text-title-color hover:text-title-color-dark'>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href='#contact' className='text-title-color hover:text-title-color-dark'>
                            Contact
                        </a>
                    </li>

                </ul>

                <div className='flex justify-center gap-x-[1.25rem]'>
                    <Link to='https://www.linkedin.com/in/henrykofimensah/' className=' p-[0.4rem] lg:p-[0.25rem] text-title-color hover:text-title-color-dark' target='_blank'>
                        <UilLinkedin size="25"/>
                    </Link>
                    <Link to='https://www.github.com/henrydrey_/' className='p-[0.4rem] lg:p-[0.25rem] text-title-color hover:text-title-color-dark' target='_blank'>
                        <UilGithub size="25" />
                    </Link>
                    <Link to='https://twitter.com/henrydrey_' className='p-[0.4rem] lg:p-[0.25rem] text-title-color hover:text-title-color-dark' target='_blank'>
                        <UilTwitterAlt size="25" />
                    </Link>
                    <Link to='https://www.instagram.com/henrydrey_/' className='p-[0.4rem] lg:p-[0.25rem] text-title-color hover:text-title-color-dark' target='_blank'>
                        <UilInstagramAlt size="25" />
                    </Link>
                    <Link to='https://www.t.me/henrydrey' className='p-[0.4rem] lg:p-[0.25rem] text-title-color hover:text-title-color-dark' target='_blank'>
                        <UilTelegram size="25" />
                    </Link>
                </div>

                <span className='block mt-[4.5rem] text-title-color text-center text-smaller-font-size'>&#169; dkmensah. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer