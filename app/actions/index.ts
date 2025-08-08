"use server"

import z, { success } from "zod";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
];


export const sellYourItemsAction = async (prevState: unknown, formData: FormData) => {
    console.log(formData.get('name'));
    console.log(formData.get('price'));
    console.log(formData.get('description'));
    console.log(formData.get('imageUrl'));

    const schema = z.object({
        name: z.string().min(5),
        price: z.string().min(1),
        description: z.string().min(5),
        imageUrl: z
            .any()
            .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
            .refine(
                (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
                'Only .jpg, .jpeg, .png and .webp formats are supported.'
            ),
    })

    const validationFields = schema.safeParse({
        name: formData.get('name'),
        price: formData.get('price'),
        description: formData.get('description'),
        imageUrl: formData.get('imageUrl')
    });

    if (!validationFields.success) {

        console.log('error', validationFields.error)

        return {
            type: 'error',
            error: validationFields.error.flatten().fieldErrors,
            message: "Missing Fields, Failed to create Product"
        }  // ZodError instance
    }

    const { name, price, description, imageUrl } = validationFields.data;

    try {
        // Upload a file / image
        const fileName = `${Math.random()}-${imageUrl.name}` // ✅ pakai await
        const supabase = createServerActionClient({ cookies });
        const { data, error } = await supabase
            .storage
            .from('image')
            .upload(fileName, imageUrl, {
                cacheControl: '3600',
                upsert: false
            })

        if (error) {
            console.log(error)
            return {
                type: 'error',
                message: "Database Error : Failed to upload Image"
            }
        }

        if (data) {
            const path = data.path;

            // insert data
            const { error: addProductError } = await supabase
                .from('easy-sell-products')
                .insert({ name, price, description, imageUrl: path })

            if (addProductError) {
                console.log(addProductError)
                return {
                    type: 'error',
                    message: 'Database Error : Failed to add Product'
                }
            }
        }

    } catch (error) {
        console.error(error)
        return {
            type: 'error',
            message: "Database Error : Failed to create or adding product"
        }
    }

    revalidatePath('/');

}