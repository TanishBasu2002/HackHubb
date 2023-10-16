import { Button, Image } from "@nextui-org/react";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Intro() {
    return (
    <div className='flex gap-3 justify-between items-center'>
      <div>
      <Image
        isBlurred
        width={300}
        height={200}
        src="/assets/logo.svg"
        alt="NextUI Album Cover"
        className="static max-xl:hidden"
      />
      </div>
      <div className=" sticky right-5 z-20 flex h-screen w-fit flex-col justify-center gap-10 overflow-auto border-l border-none px-5 pb-6 pt-28 max-xl:flex-col ">
      <h1 className="font-bold text-[50px]">
        Welcome to HackHubb A Guide to all of it.
      </h1>
      <div className="flex justify-between items-center">
      <Button as={Link} radius="md" className="w-28 bg-gradient-to-tr from-pink-700 to-orange-500 text-white shadow-lg" href="/" variant="flat">
            Go To Home
      </Button>
      <Button as={Link} radius="md" className="w-28 bg-gradient-to-tr from-black via-slate-800 to-black text-white shadow-lg" href="https://github.com/TanishBasu2002/HackHubb" variant="flat">
          <Github /> See code
      </Button>
      </div>
      </div>
    </div>
    );
  }