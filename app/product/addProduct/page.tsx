"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState } from 'react'
import { sellYourItemsAction } from '@/app/actions'
import {
    Card as UICard,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { stat } from 'fs'
import SubmitButton from '@/app/components/submit-button'

const AddProduct = () => {

    // No initial state needed for useActionState when state is void
    const [state, formAction] = useActionState(sellYourItemsAction, undefined);
    return (
        <div className='container mx-auto py-15 px-45'>
            <div className='flex justify-between items-center'>
                <div className='w-sm animate__animated animate__fadeInLeft'>
                    <span className='text-6xl font-bold bg-linear-to-bl from-sky-500 to-violet-300 text-transparent bg-clip-text'>Sell Your Items</span>
                    <p className='text-2xl mt-4'>Enter details of your items to start selling your items </p>
                </div>
                <div className='ms-20 animate__animated animate__fadeInRight'>
                    <UICard className='w-3xl h-auto'>
                        <CardHeader>
                            <CardTitle className='text-2xl'>Add Your Items!</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {state?.type == 'error' && (
                                <span className='text-md font-medium text-red-600 bg-red-200 py-3 px-6 rounded-lg'>{state.message}</span>
                            )}
                            <form action={formAction}>
                                <div className='mb-2 mt-6'>
                                    <Label htmlFor='name' className='mb-2'>Name</Label>
                                    <Input id='name' type='text' name='name' />
                                    {state?.error?.name && (
                                        <span className='text-md font-light text-red-400'>{state.error.name}</span>
                                    )}
                                </div>
                                <div className='mb-2'>
                                    <Label htmlFor='price' className='mb-2'>Price</Label>
                                    <Input id='price' type='number' name='price' />
                                    {state?.error?.price && (
                                        <span className='text-md font-light text-red-400'>{state.error.price}</span>
                                    )}
                                </div>
                                <div className='mb-2'>
                                    <Label htmlFor='description' className='mb-2'>Description</Label>
                                    <Input id='description' type='text' name='description' />
                                    {state?.error?.description && (
                                        <span className='text-md font-light text-red-400'>{state.error.description}</span>
                                    )}
                                </div>
                                <div className='mb-3'>
                                    <Label htmlFor='image' className='mb-2'>Image</Label>
                                    <Input id='image' type='file' name='imageUrl' />
                                    {state?.error?.imageUrl && (
                                        <span className='text-md font-light text-red-400'>{state.error.imageUrl}</span>
                                    )}
                                </div>
                                <SubmitButton />
                            </form>
                        </CardContent>
                    </UICard>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
