"use client"
import Image from "next/image";
import Link from "next/link";
interface UserCardProps {
    id:string;
    name:string;
    username:string;
    imgUrl:string;
    personType:string;
}

const UserCard = ({id,name,username,imgUrl,personType,}:UserCardProps) => {
    const isCommunity = personType === "Community";

    return (
        <Link href={isCommunity?`/communities/${id}`:`/profile/${id}`}>
        <article className="user-card">
        <div className="user-card_avatar">
        <Image src={imgUrl} alt="profile picture" className="rounded-full object-contain" width={48} height={48} />
            <div className="flex-1 text-ellipsis">
            <h4 className="text-base-semibold text-light-1">{name}</h4>
            <p className="text-small-medium text-gray-1">@{username}</p>
        </div>
        </div>
        </article>
        </Link>
    
  )
}

export default UserCard
