"use client"
import MobileToggle from "@/components/share/MobileToggle"
import { Button } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="w-full backdrop-blur-md bg-slate-950 bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/" className="flex items-center gap-4">
        <Image
          alt="logo"
          className="cursor-pointer"
          src="/assets/logo.svg"
          height={50}
          width={50}
        />
        <p className="text-heading3-bold md:block text-light-1 max-lg:hidden">Guide</p>
      </Link>
      <MobileToggle />
    </nav>
  )
}
