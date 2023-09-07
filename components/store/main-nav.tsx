/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface MainNavProps{
    data:any
}
const MainNav = ({data}:MainNavProps) => {
    const pathname = usePathname();
    const routes = data.map((route)=>({
        href:`/hackstore/ctegory/${route.id}`,
        label:route.name,
        active:pathname === `/hackstore/xcategory/${route.id}`
    }))
  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
      {routes.map((route)=>(
        <Link key={route.href} href={route.href} className={cn("text-sm font-medium transition-colors hover:text-white",route.active ? "text-white":"text-neutral-400")}>
            {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
