import React from 'react'
import { Button } from "@/components/ui/button"
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const { pending } = useFormStatus()
    console.log(pending)

    return (
        <div>
            <Button
                type='submit'
                className='bg-linear-to-bl from-sky-500 to-violet-300 hover:text-white hover:scale-110'
                disabled={pending}
            >{pending! ? "Loading..." : "Add+"}</Button>
        </div>
    )
}

export default SubmitButton
