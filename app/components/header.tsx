import React from 'react'
import Link from 'next/link'
import ubuntu from '../utils/fonts/ubuntu'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"


const Header = () => {
    return (
        <header className='w-full h-15 py-2 px-5 shadow-md  bg-linear-to-bl from-sky-500 to-violet-500'>
            <div className='flex items-center justify-between'>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`text-2xl text-white font-semibold ${ubuntu.className}`}> Royal Enfield Easy Sell</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuLink className={`text-1xl text-white font-semibold ${ubuntu.className}`}>Add Products+</NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header >

    )
}

export default Header
