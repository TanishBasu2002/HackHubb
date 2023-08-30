/* eslint-disable react/react-in-jsx-scope */
"use client";
import { useEffect, useState } from "react";
import { CreateServerModal } from "../create-server-modal";

export const ModalProvider =()=>{
    const [isMounted,setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[]);
    if (!isMounted) {
        return null;
    }
    return(<>
        <CreateServerModal />
    </>)
}