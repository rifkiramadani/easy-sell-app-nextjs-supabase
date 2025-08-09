import { getCannonicalUrl } from '@/app/utils';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Easy Sell - Add Product",
    description: 'Add your product here and sell it',
    openGraph: {
        images: [`${getCannonicalUrl}/assets/og-image.png`]
    },
    alternates: {
        canonical: `${getCannonicalUrl}/product/addProduct`
    }
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>
}