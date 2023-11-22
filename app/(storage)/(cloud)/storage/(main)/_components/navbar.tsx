"use client";
// imports

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const onClick = () => router.push("/storage");
  return (
    <nav className="w-full backdrop-blur-md bg-slate-950 bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/">
        <Image
          alt="logo"
          className="cursor-pointer"
          src="/assets/logo.svg"
          height={50}
          width={50}
        />
      </Link>
      <Button onClick={onClick}>Go Back</Button>
    </nav>
  );
}
