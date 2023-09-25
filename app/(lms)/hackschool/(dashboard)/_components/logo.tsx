/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image"

export const Logo =()=>{
    return(<div className="flex items-center gap-4">
        <Image 
        height={30} width={30} alt="logo" src="/assets/logo.svg"/>
        <p className="text-heading3-bold md:block text-light-1 max-lg:hidden">HackSchool</p>
        </div>
    )
}