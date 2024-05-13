import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { HTMLAttributes } from 'react'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

function Phone({ imgSrc, className, dark = false, ...props }: PhoneProps) {
    return (
        <div
            className={cn("relative pointer-events-none z-50 overflow-hidden",
                { ...props })}>
            <Image
                src={dark
                    ? "/phone-template-dark-edges.png"
                    : "/phone-template-white-edges.png"}
                alt='phone image'
                height={250}
                width={250}
                className='pointer-events-none z-50 select-none'
            />
            <div className='absolute -z-10 inset-0'>
                <Image className='object-cover'
                    src={imgSrc}
                    alt=''
                    width={250}
                    height={250}
                />
            </div>
        </div>
    )
}

export default Phone