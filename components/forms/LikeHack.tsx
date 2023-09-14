/* eslint-disable react/react-in-jsx-scope */
"use client";


import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface LikeHackProps{
    hackId:string;
    currentUserId:string;
}
export const LikeHack=({hackId,currentUserId}:LikeHackProps)=>{
    const [isLiked, setIsLiked] = useState(false);
    const router= useRouter();
    const handelLike = ()=>{
        if(isLiked){
          setIsLiked(false);
        }else{
            setIsLiked(true);
        }
    }
    const pathname = usePathname();
    /**const [loading, setLoading] = useState(false);
    const h =async()=>{
     try {
      setLoading(true);
      if(isLiked){
        await deleteLikeFromHack(
          hackId,
          JSON.parse(currentUserId),
          pathname); 
        setIsLiked(false);
      }else{
        await addLikeToHack(
          hackId,
          JSON.parse(currentUserId)); 
        setIsLiked(true);
      }
      toast.success("Commented",{
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
     } catch (error:any) {
      toast.error(error);
     }finally{
      setLoading(false);
      router.refresh();
     }
    }; */
    const [isMounted,setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[]);
    
      if (!isMounted) {
          return null;
      }

    return(
        <button 
        className="cursor-pointer hover:opacity-75  transition"
        onClick={handelLike}
        >
        {isLiked ? <Image src="/assets/heart-filled.svg"  alt="logo" width={28} height={28}/> : <Image src="/assets/heart-gray.svg"  alt="logo" width={24} height={24}/>}
        </button>
    )

}
