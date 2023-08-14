"use client";

import { ScaleLoader} from "react-spinners";


const Loading = () => {
  return (
    <div className="w-full min-h-screen container flex justify-center items-center">
        <ScaleLoader color="#9370DB"/>
    </div>
  )
}

export default Loading