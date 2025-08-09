export const getCannonicalUrl = () => {
    return process.env.NODE_ENV !== "production"
        ? "http://localhost:3000"
        : "https://next-js-crash-course-easy-sell-app.vercel.app"
}

export const getImageUrl = (imageUrl: string) => {
    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/image/${imageUrl}`
}