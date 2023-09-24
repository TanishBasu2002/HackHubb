/* eslint-disable react/react-in-jsx-scope */
"use client";

import { ScaleLoader} from "react-spinners";


const Loading = () => {
  return (
    <div className="w-full container flex justify-center items-center min-h-screen">
        <ScaleLoader color="#9370DB"/>
    </div>
  )
}

export default Loading