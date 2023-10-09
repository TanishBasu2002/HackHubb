import IndiItem from "../_components/Individual-componet";
import { Contact } from "../_components/contact";

/* eslint-disable react/react-in-jsx-scope */
export default async function GuideHome(){
    return (
            <div className='mx-2 text-light-1 min-h-screen'>
              Hack guide
              <h1 className="head-text ml-5">Components</h1>
              <IndiItem />
              <Contact />
            </div>
          )
}