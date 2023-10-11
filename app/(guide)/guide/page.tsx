import IndiItem from "../_components/Individual-componet";
import { Contact } from "../_components/contact";
import { Hero } from "../_components/hero";

/* eslint-disable react/react-in-jsx-scope */
export default async function GuideHome(){
    return (
            <div className='mx-2 text-light-1 min-h-screen'>
              <Hero />
              <h1 className="head-text ml-5">Components</h1>
              <IndiItem />
              <Contact />
            </div>
          )
}