/* eslint-disable react/react-in-jsx-scope */
"use client";

import { Toaster } from "react-hot-toast";

export const ToasterProvider =()=>{
    return <Toaster 
    reverseOrder={true}/>
}