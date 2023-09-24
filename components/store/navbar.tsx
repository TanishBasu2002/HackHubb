/* eslint-disable react/react-in-jsx-scope */

import Link from "next/link"
import Container from "./ui/container"
import MainNav from "./main-nav"
import getCategory from "@/lib/actions/get-categories"
import NavbarActions from "./navbar-actions"
import Image from "next/image"

const Navbar = async() => {
  const categories = await getCategory();
    return (
    <div className="bg-gradient-to-b from-slate-600 to-slate-950">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <Link href="/" className="ml-0 flex items-center gap-4">
                <Image src="/assets/logo.svg" alt="logo" width={28} height={28}/>
        </Link>
        <Link href="/hackstore" className="ml-4 flex gap-x-2">
          <p className="font-bold text-white text-xl max-lg:hidden">HackStore</p>
        </Link>
        <MainNav data={categories}/>
        <NavbarActions />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
