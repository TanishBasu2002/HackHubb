import Image from "next/image";
import Link from "next/link";
interface Props{
        id:string;
        currentUserId:string;
        parentId:string | null;
        image?:string|null;
        content:string;
        author:{
            name:string;
            image:string;
            id:string;
        }
        community:{
            id:string;
            name:string;
            image:string;
        } | null;
        createdAt:string;
        comments:{
            author:{
                image:string;
            }
        }[];
        isComment?:boolean;
}
export default function HackCard({  
    id,
    currentUserId,
    parentId,
    content,
    image,
    author,
    community,
    createdAt,
    comments,
    isComment,
}:Props){
    return(
        <article className={`p-7 flex w-full flex-col ${isComment?'px-0 xs:px-7 bg-gradient-to-r mt-2 from-slate-950 via-black to-black rounded-full':'rounded-xl bg-gradient-to-bl from-gray-700 via-gray-800 to-gray-950'}`}>
            <div className="flex items-start justify-between gap-4">
                <div className=" w-full flex-1 flex-row gap-4 flex ">
                    <div className="flex flex-col items-center ">
                        <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
                            <Image src={author.image} alt="Profile Image" fill className="cursor-pointer h-72 w-96 rounded-full"/>
                        </Link>
                        <div className={!isComment?"thread-card_bar":""}/>
                    </div>
                    <div className="flex w-full flex-col">
                        <Link href={`/profile/${author.id}`} className="w-fit">
                            <h4 className="cursor-pointer text-base-semibold text-light-1">
                                {author.name}
                            </h4>
                        </Link>
                        {/**No Image Content */}
                            {!image&&(
                                <p className="mt-1 text-small-regular text-light-2">{content}</p>)}
                        {/* Project Image */}
                        {image && (
                            <Link href={`/hack/${id}`} className="pt-8 sm:pt-2">
                                <Image src={image} width={240} height={180} className="object-fill h-[100%] w-[90%] sm:object-cover sm:h-full sm:w-[90%] rounded-2xl" alt="project image" />
                            </Link>
                        )}
                        <div className={`mt-5 flex flex-col gap-3 `}>
                            <div className="flex gap-3.5">
                            <Image src="/assets/heart-gray.svg" alt="heart" width={24} height={24}
                            className="cursor-pointer object-contain"/>
                            <Link href={`/hack/${id}`}>
                            <Image src="/assets/reply.svg" alt="reply" width={24} height={24}
                            className="cursor-pointer object-contain"/>
                            </Link>
                            <Image src="/assets/share.svg" alt="share" width={24} height={24}
                            className="cursor-pointer object-contain"/>
                            </div>
                            {isComment && comments.length > 0 &&(
                                <Link href={`/hack/${id}`}>
                                    <p className="mt-1 text-subtle-medium text-gray-300">{comments.length} replies</p>
                                </Link>
                            )}
                        </div>
                        {/**Content */}{image&&(
                        <p className="mt-2 text-base-semibold text-light-1">{content}</p>)}
                    </div>
                    <div className="flex flex-col items-center">
                         
                        </div>
                </div>
            </div>
        </article>
    )
}