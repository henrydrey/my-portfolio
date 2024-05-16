import React from 'react'
import { Link } from 'react-router-dom'
import littlelemon from "../../assets/littlelemon.png"
import { UilGithub } from "@iconscout/react-unicons"
import { UilLink } from "@iconscout/react-unicons"


const projectsList = [
    {
        src: littlelemon,
        name: `Little Lemon Restaurant`,
        description: `A restaurant site with table reservations feature via custom backend. Modular, real-time updates, mobile-friendly, reliable, scalable deployment.`,
        stack: [`React`, `CSS`],
        demo: `https://lemonrestaurant.vercel.app`,
        repo: `https://github.com/henrydrey/littlelemon.git`,
        position: 1
    },
    // {
    //     src: littlelemon,
    //     name: `EuroWeather`,
    //     description: `A restaurant site with table reservations feature via custom backend. Modular, real-time updates, mobile-friendly, reliable, scalable deployment.`,
    //     stack: [`React`, `CSS`],
    //     demo: `https://lemonrestaurant.vercel.app`,
    //     repo: `https://github.com/henrydrey/littlelemon.git`,
    //     position: 0
    // },
]

const Projects = () => {
    return (
        <section className='pt-[6rem] px-0 pb-[2rem] md:pb-[4rem]' id='projects'>
            <h2 className='text-h1-font-size text-title-color text-center'>Projects</h2>
            <span className='block text-small-font-size mb-[4rem] text-center md:mb-mb-3'>Each project is a unique piece of development</span>

            <div className=' grid-row-[repeat(3,_270px)] max-w-[968px] md:mx-auto sm:mx-mb-1 grid gap-[1.5rem]'>
                <div className='flex py-[1rem] px-[2rem]'>
                    <div className='flex flex-col gap-y-[2rem] w-full'>
                        {projectsList.map((project) => {
                            if (project.position === 1) {
                                return (
                                    <div className='md:py-0 md:px-[0rem] md:gap-[5rem] flex md:flex-row w-full sm:flex-col sm:py-[0.5rem] sm:gap-[1.5rem] bg-container-color rounded-lg '>
                                        <div className='md:w-1/2 content-center justify-center sm:w-full'>
                                            <img src={project.src} alt='project-visual' className='rounded-lg' />
                                        </div>
                                        <div className='md:w-1/2 flex flex-col lg:p-[0.2rem] items-center justify-center content-center sm:w-full sm:p-[10px]'>
                                            <h3 className=" text-h3-font-size md:mb-mb-2 sm:mb-mb-0-75 text-title-color-dark">{project.name}</h3>
                                            <div className=" md:text-small-font-size sm:text-smaller-font-size text-title-color-dark mb-mb-1 sm:px-[1rem] md:px-0">
                                                <p>{project.description}</p>
                                            </div>
                                            <div className='flex w-full py-[10px] md:px-[5rem] sm:px-[4rem] justify-between text-title-color-dark font-font-semi-bold text-smaller-font-size'>
                                                {project.stack.map((tech) => {
                                                    return (
                                                        <span>{tech}</span>
                                                    )
                                                })}
                                            </div>
                                            <div className='flex w-full justify-evenly lg:py-[20px] md:px-[5rem] sm:py-[10px] text-smaller-font-size text-title-color-dark font-font-medium'>
                                                <Link to={project.repo} className='flex flex-row justify-evenly hover:underline'>
                                                    <UilGithub size="18" color="black" />
                                                    <span className='px-1'>Code</span>
                                                </Link>
                                                <Link to={project.demo} className='flex flex-row justify-evenly hover:underline'>
                                                    <span className='px-1'>Live demo</span>
                                                    <UilLink size="18" color="black" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            else {
                                return (
                                    <div className='md:py-0 md:px-[0rem] md:gap-[5rem] flex md:flex-row w-full sm:flex-col sm:py-[0.5rem] sm:gap-[1.5rem] bg-container-color rounded-lg '>
                                        
                                        <div className='md:w-1/2 flex flex-col lg:p-[0.2rem] items-center justify-center content-center sm:w-full sm:p-[10px]'>
                                            <h3 className=" text-h3-font-size md:mb-mb-2 sm:mb-mb-0-75 text-title-color-dark">{project.name}</h3>
                                            <div className=" md:text-small-font-size sm:text-smaller-font-size text-title-color-dark mb-mb-1 sm:px-[1rem] md:px-[1rem]">
                                                <p>{project.description}</p>
                                            </div>
                                            <div className='flex w-full py-[10px] md:px-[5rem] sm:px-[4rem] justify-between text-title-color-dark font-font-semi-bold text-smaller-font-size'>
                                                {project.stack.map((tech) => {
                                                    return (
                                                        <span>{tech}</span>
                                                    )
                                                })}
                                            </div>
                                            <div className='flex w-full justify-evenly lg:py-[20px] md:px-[5rem] sm:py-[10px] text-smaller-font-size text-title-color-dark font-font-medium'>
                                                <Link to={project.repo} className='flex flex-row justify-evenly hover:underline'>
                                                    <UilGithub size="18" color="black" />
                                                    <span className='px-1'>Code</span>
                                                </Link>
                                                <Link to={project.demo} className='flex flex-row justify-evenly hover:underline'>
                                                    <span className='px-1'>Live demo</span>
                                                    <UilLink size="18" color="black" />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className='md:w-1/2 content-center justify-center sm:w-full'>
                                            <img src={project.src} alt='project-visual' className='rounded-lg' />
                                        </div>
                                    </div>
                                )
                            }
                            
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects