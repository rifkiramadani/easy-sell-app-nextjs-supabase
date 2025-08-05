import React from 'react'
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
        <UICard className='w-65 h-90 md:w-75 md:h-115
         shadow-violet-500'>
            <CardHeader>
                <Image className='rounded-lg ' src={imageUrl} alt={imageUrl} width={500} height={500} style={{ objectFit: "cover" }} />
            </CardHeader>
            <CardContent>
                <CardTitle className='text-2xl md:text-4xl mb-3'>{name}</CardTitle>
                <CardDescription className='mb-3 line-clamp-2'>{description}</CardDescription>
                <p className={`text-2xl md:text-5xl ${ubuntu.className}`}>${price}</p>
            </CardContent>
        </UICard>
    )
}

export default Card
