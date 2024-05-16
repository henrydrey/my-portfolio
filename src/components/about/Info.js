import React from 'react'
import { UilAward } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilHeadphones } from '@iconscout/react-unicons'

const infoTools = [
  { icon: <UilAward size="25" color="black" className=" text-[1.5rem] text-title-color mb-mb-0-5" />, title: `Experience`, detail: `2 years working`},
  { icon: <UilBriefcaseAlt size="25" color="black" className=" text-[1.5rem] text-title-color mb-mb-0-5" />, title: `Completed`, detail: `10+ projects`},
  { icon: <UilHeadphones size="25" color="black" className=" text-[1.5rem] text-title-color mb-mb-0-5" />, title: `Support`, detail: `Online 24h/7days`},
]

const Info = () => {
  return (
    <div className='grid-cols-[repeat(3,_140px)] mb-mb-2 grid gap-[0.5rem] lg:justify-center md:grid-cols-[repeat(3,_1fr)] sm:grid-cols-[repeat(2,_1fr)] items-center'>
      {infoTools.map((details) => {
        return (
          <div className='bg-container-color border-solid border-[1px] border-[#0000001A] rounded-2xl items-center py-[1rem] px-[1.25rem] lg:py-[0.75rem] lg:px-[0.5rem]'>
          {details.icon}
          <h3 className=' text-small-font-size font-font-medium mb-mb-0-25'>{details.title}</h3>
          <span className=' text-small-font-size'>{details.detail}</span>
        </div>
        )
      })}
    </div>
  )
}

export default Info
