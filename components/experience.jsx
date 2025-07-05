import React from 'react'
import { experience } from '../constants/data/experience'
import { Timeline } from './timeline'

const Experience = () => {
  return (
    <div className='min-h-screen w-full'>
        <div className='absolute w-full'>
            <Timeline data={experience} />
        </div>
    </div>
  )
}

export default Experience