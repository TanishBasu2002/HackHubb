import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const NotFound = async () => {
  const Icon = () => {
    return <p> HackHubb </p>;
  };
  return (
    <>
      <nav className="w-full backdrop-blur-md bg-slate-950 bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <Link href="/" className="flex items-center gap-4">
          <Image
            alt="logo"
            className="cursor-pointer"
            src="/assets/logo.svg"
            height={50}
            width={50}
          />
          <p className="text-heading3-bold md:block text-light-1 max-lg:hidden">
            HackHubb
          </p>
        </Link>
      </nav>
      <section className="text-white min-w-full container flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-700 via-slate-950 to-black">
        <div className={cn("main-container", "bg-transparent")}>
          <div>
            <span className="head-text justify-center text-center items-center">
              <h1>
                <Icon />
              </h1>{" "}
              <h1>|</h1> <h1>{404}</h1> <h1>|</h1> <h1>Page not found</h1>
            </span>
            <div className="m-5">
              <p className="font-bold ">
                The page you are looking for might have been removed, had its
                name changed,dose not exist, or is temporarily unavailable.
              </p>
            </div>
            <div className="justify-between text-light-2 flex py-2 items-center p-2 gap-2 w-full">
              <Link
                href="/"
                className="bg-rose-700 hover:bg-rose-900 hover:text-light-1 font-bold py-2 px-4 border-none rounded"
              >
                Back to home
              </Link>
              <Link
                href="/guide"
                className="bg-sky-700 hover:bg-sky-900 hover:text-light-1 font-bold py-2 px-4 border-none rounded"
              >
                Read the guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
