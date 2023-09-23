/* eslint-disable react/react-in-jsx-scope */

import Link from "next/link"
import Container from "./ui/container"
import MainNav from "./main-nav"
import getCategory from "@/constants/get-categories"
import NavbarActions from "./navbar-actions"


const Navbar = async() => {
  const categories = await getCategory();
    return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <Link href="/hackstore" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-bold text-white text-xl">HackStore</p>
        </Link>
        <MainNav data={categories}/>
        <NavbarActions />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
