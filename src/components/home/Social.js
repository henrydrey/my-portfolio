import React from 'react'
import { Link } from 'react-router-dom'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'

const Social = () => {
  return (
    <div className='grid grid-cols-[max-content] gap-y-4'>
      <Link to='https://www.linkedin.com/in/henrykofimensah/' className='text-[1.5rem] text-title-color hover:text-title-color-dark' target='_blank'>
        <UilLinkedin size="25" />
      </Link>
      <Link to='https://www.github.com/henrydrey/' className='text-[1.5rem] text-title-color hover:text-title-color-dark' target='_blank'>
        <UilGithub size="25" />
      </Link>
      <Link to='mailto:henrydanfulmensah@gmail.com' className='text-[1.5rem] text-title-color hover:text-title-color-dark' target='_blank'>
        <UilEnvelope size="25" />
      </Link>
    </div>
  )
}

export default Social
