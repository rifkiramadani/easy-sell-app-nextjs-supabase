import { supabase } from '@/supabase/client'
import React from 'react'
import Image from 'next/image'
import {
    Card as UICard,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import type { Metadata, ResolvingMetadata } from 'next'
import { getCannonicalUrl, getImageUrl } from '@/app/utils'

type Props = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = await params.slug

    // fetch data
    const { data: product } = await supabase
        .from("easy-sell-products")
        .select()
        .match({ id })
        .single()

    if (!product) {
        return {
            title: "",
            description: ""
        }
    }

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            images: [getImageUrl(product.imageUrl)],
        },
        alternates: {
            canonical: `${getCannonicalUrl()}/product/${id}`
        }
    }
}


export async function generateStaticParams() {
    const { data: products, error } = await supabase
        .from("easy-sell-products")
        .select()

    return products!.map((product) => ({
        slug: product.id.toString(),
    }))
}

const Page = async ({ params }: Props) => {

    const { data: product } = await supabase
        .from("easy-sell-products")
        .select()
        .match({ id: params.slug })
        .single()

    return (
        <div className='container mx-auto'>
            <div className="flex justify-between px-20 ms-5 mt-7">
                <span className='text-4xl font-semibold'>{product.name}</span>
            </div>
            <div className="flex justify-between py-15 px-20 ms-5">
                <Image
                    className='rounded-lg me-3 animate__animated animate__fadeInLeft'
                    src={getImageUrl(product.imageUrl)}
                    alt={getImageUrl(product.imageUrl)}
                    width={620}
                    height={620}
                />
                <UICard className='w-3xl shadow-violet-500 animate__animated animate__fadeInRight'>
                    <CardHeader>
                        <CardTitle className='text-3xl'>💵 PRICE</CardTitle>
                        <p className='text-4xl font-semibold'>${product.price}</p>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{product.description}</CardDescription>
                    </CardContent>
                    <CardFooter className='flex flex-col items-start'>
                        <p>⭐ PREMIUM PRODUCT</p>
                        <span className='text-2xl ms-7'>{product.boost == true ? "Yes" : "No"}</span>
                    </CardFooter>
                </UICard>
            </div>
        </div>
    )
}

export default Page
