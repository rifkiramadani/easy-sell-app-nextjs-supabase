"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { useFormStatus } from 'react-dom'

const DetailsButton = () => {
    const { pending } = useFormStatus()

    return (
        <div>
            <Button
                className='bg-linear-to-bl from-sky-500 to-violet-300 hover:text-white hover:scale-110'
                disabled={pending}
            >{pending! ? "Details" : "Loading..."}</Button>
        </div>
    )
}

export default DetailsButton
