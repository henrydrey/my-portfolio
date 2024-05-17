import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import { UilTelegramAlt } from "@iconscout/react-unicons"
import { UilWhatsapp } from "@iconscout/react-unicons"
import { UilArrowRight } from "@iconscout/react-unicons"
import { Link } from 'react-router-dom'

const Contact = () => {

    const form = useRef();

    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const formData = new FormData(form.current)
        const name = formData.get('name').trim()
        const email = formData.get('email').trim()
        const message = formData.get('message').trim()
        const newErrors = {}

        if (!name) {
            newErrors.name = 'Name is required'
        }
        if (!email) {
            newErrors.email = 'Email is required'
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Email is invalid'
        }
        if (!message) {
            newErrors.message = 'Message is required'
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_k0jzikd', 'template_5qkwvza', form.current, {
                publicKey: 'J3hZ9obBUrwswQcDM',
            })
            e.target.reset()
            // .then(
            //     (result) => {
            //         console.log(result.text);
            //     },
            //     (error) => {
            //         console.log('FAILED...', error.text);
            //     },
            // );
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            sendEmail(e)
        }
    }

    return (
        <section className='contact pt-[6rem] px-0 pb-[2rem] md:px-0 md:pb-[4rem] md:mx-auto ' id='contact'>
            <h2 className=' text-h1-font-size text-title-color text-center justify-center content-center sm:mx-auto md:ml-0'>Get in touch</h2>
            <span className='block text-small-font-size mb-[4rem] text-center md:mb-mb-3 sm:mx-auto md:ml-0'>Contact me</span>

            <div className='sm:grid-cols-[(1fr,_max-content)] sm:w-full md:grid-cols-[repeat(2,_max-content)] justify-center gap-x-[6rem] pb-[3rem] max-w-[968px] md:mx-auto grid gap-[1.5rem]'>
                <div className='contact_content'>
                    <h3 className='text-center text-h3-font-size font-font-medium mb-mb-1-5'>Talk to me</h3>

                    <div className='grid gap-y-[1rem] md:grid-cols-[300px] sm:justify-center sm:grid-cols-[1fr] sm:items-center sm:mr-[-2rem] md:mr-0'>
                        <div className='bg-container-color border-[1px] border-solid border-[#0000001A] p-[1rem] rounded-[0.75rem] text-center items-center'>
                            <UilTelegramAlt className="text-[2rem] text-title-color md:mb-mb-1-5 sm:mb-0" />

                            <h3 className='text-small-font-size font-font-medium'>Email</h3>
                            <span className='text-small-font-size block mb-mb-0-75'>henrydanfulmensah@gmail.com</span>

                            <Link to='mailto:henrydanfulmensah@gmail.com' className='text-text-color text-small-font-size inline-flex flex-row items-center justify-center gap-x-[1rem] translate-x-6'>
                                Send me a mail{""}
                                <UilArrowRight className="text-[2rem] text-title-color items-center" />
                            </Link>
                        </div>

                        <div className='bg-container-color border-[1px] border-solid border-[#0000001A] p-[1rem] rounded-[0.75rem] text-center'>
                            <UilWhatsapp className="text-[2rem] text-title-color md:mb-mb-1-5 sm:mb-0" />

                            <h3 className='text-small-font-size font-font-medium'>Whatsapp</h3>
                            <span className='text-small-font-size block mb-mb-0-75'>+233(0)267711135</span>

                            <Link to={`https://api.whatsapp.com/send?phone=+233267711135&text=Hello, I'm trying to reach out to you from your personal website`} className='text-text-color text-small-font-size inline-flex flex-row items-center justify-center gap-x-[1rem] translate-x-6'>
                                <span>Send me a text{""}</span>
                                <UilArrowRight className="text-[2rem] text-title-color sm:mb-0 items-center" />
                            </Link>
                        </div>

                    </div>
                </div>

                <div className='contact_content'>
                    <h3 className='text-center text-h3-font-size font-font-medium mb-mb-1-5'>Write to me</h3>

                    <form className='w-[360px] md:my-0 md:mx-auto sm:mr-[-2rem] md:mr-0' ref={form} onSubmit={handleSubmit}>
                        <div className='relative mb-mb-2 h-[4rem]'>
                            <label htmlFor='' className='absolute top-[-0.75rem] left-[1.25rem] text-smaller-font-size p-[0.25rem] bg-body-color z-[10]'>Name</label>
                            <input type='text' name='name' className={`absolute top-0 left-0 w-full h-full border-[2px] border-solid ${errors.name ? 'border-red-500' : 'border-[#0000004D]'} bg-none text-text-color outline-none rounded-xl p-[1.5rem] z-[1]`} placeholder='Your name' />
                            {errors.name && <p className='text-red-500 text-smaller-font-size mt-1 pt-16'>{errors.name}</p>}
                        </div>

                        <div className='relative mb-mb-2
                        h-[4rem]'>
                            <label htmlFor='' className='absolute top-[-0.75rem] left-[1.25rem] text-smaller-font-size p-[0.25rem] bg-body-color z-[10]'>Email</label>
                            <input type='email' name='email' className={`absolute top-0 left-0 w-full h-full border-[2px] border-solid ${errors.email ? 'border-red-500' : 'border-[#0000004D]'} bg-none text-text-color outline-none rounded-xl p-[1.5rem] z-[1]`} placeholder='Your email' />
                            {errors.email && <p className='text-red-500 text-smaller-font-size mt-1 pt-16'>{errors.email}</p>}
                        </div>

                        <div className='relative mb-mb-2 h-[11rem]'>
                            <label htmlFor='' className='absolute top-[-0.75rem] left-[1.25rem] text-smaller-font-size p-[0.25rem] bg-body-color z-[10]'>Message</label>
                            <textarea name='message' cols={`30`} rows={`10`} className={`absolute top-0 left-0 w-full h-full border-[2px] border-solid ${errors.message ? 'border-red-500' : 'border-[#0000004D]'} bg-none text-text-color outline-none rounded-xl p-[1.5rem] z-[1] resize-none`} placeholder='Write your message' 
                            />
                            {errors.message && <p className='text-red-500 text-smaller-font-size mt-1 pt-44'>{errors.message}</p>}
                        </div>

                        <div className='items-center content-center'>
                            <button type='submit' className='inline-block w-full bg-title-color hover:bg-title-color-dark text-container-color py-3 px-8 font-font-medium rounded-xl items-center'>
                                Send mesage
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact