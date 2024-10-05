import React from 'react'

import { BentoGrid, BentoGridItem } from './ui/bentoGrid'
import { BentoItems } from '@/constants/data'

const GridComponents = () => {
  return (
    <section id='about'>
        <BentoGrid className='w-full h-full'>
            {BentoItems.map((item) => (
                <BentoGridItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default GridComponents