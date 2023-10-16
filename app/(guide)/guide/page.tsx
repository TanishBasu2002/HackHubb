import { ScrollArea } from "@/components/ui/scroll-area";
import IndiItem from "../_components/Individual-componet";
import { Contact } from "../_components/contact";
import { Hero } from "../_components/hero";
import { Footer } from "../_components/Footer";
import { Tech } from "../_components/technologies";
import { Contributors } from "../_components/contributor";

/* eslint-disable react/react-in-jsx-scope */
export default async function GuideHome(){
    return (
            <ScrollArea className="bg-slate-950 gap-5 text-center">
              <div className='mx-2 text-light-1 min-h-screen'>
              <Hero />
              <Tech />
              <IndiItem />
              <Contributors />
              <Contact />
              <Footer/>
            </div>
            </ScrollArea>
          )
}