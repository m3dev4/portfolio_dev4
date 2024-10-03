import React from 'react'

import { BentoGrid, BentoGridItem } from './ui/bentoGrid'
import { BentoItems } from '@/constants/data'

const GridComponents = () => {
  return (
    <section>
        <BentoGrid>
            {BentoItems.map((item) => (
                <BentoGridItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default GridComponents