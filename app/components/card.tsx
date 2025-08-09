import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
    Card as UICard,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import ubuntu from '../utils/fonts/ubuntu'
import SubmitButton from './submit-button'

interface CardProps {
    id: number,
    name: string,
    price: number,
    description: string,
    imageUrl: string
}

const Card: React.FC<CardProps> = ({
    id,
    name,
    price,
    description,
    imageUrl
}) => {
    return (
        <UICard className='w-65 h-95 md:w-75 md:h-127
         shadow-violet-500 hover:scale-107 transition duration-150 ease-in-out'>
            <CardHeader>
                <Image className='rounded-lg ' src={imageUrl} alt={imageUrl} width={500} height={500} style={{ objectFit: "cover" }} />
            </CardHeader>
            <CardContent>
                <CardTitle className='text-2xl md:text-4xl mb-3'>{name}</CardTitle>
                <CardDescription className='mb-3 line-clamp-2'>{description}</CardDescription>
                <p className={`text-2xl md:text-5xl mb-3 ${ubuntu.className}`}>${price}</p>
                <Link href={`product/${id}`}><Button
                    className='bg-linear-to-bl from-sky-500 to-violet-300 hover:text-white hover:scale-110'
                >Details</Button></Link>
            </CardContent>
        </UICard>
    )
}

export default Card
