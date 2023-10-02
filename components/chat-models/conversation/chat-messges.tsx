/* eslint-disable react/react-in-jsx-scope */
"use client";

import { Member, Message, Profile } from "@prisma/client";
import { ChatWelcome } from "./chat-welcome";
import { ElementRef, Fragment, useRef } from "react";
import { useChatQuery } from "@/hooks/use-chat-query";
import { Loader2, ServerCrash } from "lucide-react";
import { ChatItem } from "./chat-item";
import {format} from "date-fns";
import { useChatSocket } from "@/hooks/use-chat-socket";
import { useChatScroll } from "@/hooks/use-chat-scroll";

const DATE_FORMAT ="d MMM yyyy,HH:mm";

type MessageWithMemberWithProfile = Message & {
    member: Member & {
      profile: Profile
    }
  }


interface ChatMessagesProps{
    name:string;
    member:Member;
    chatId:string;
    apiUrl:string;
    socketUrl:string;
    socketQuery:Record<string, string>;
    paramKey:"channelId"|"conversationId";
    paramValue:string;
    type:"channel"|"conversation";
}
export const ChatMessages = ({name,member,chatId,apiUrl,socketUrl,socketQuery,paramKey,paramValue,type,}:ChatMessagesProps) => {
    const queryKey = `chat:${chatId}`;
    const addKey = `chat:${chatId}:messages`;
    const updateKey = `chat:${chatId}:messages:update` 

    const chatRef = useRef<ElementRef<"div">>(null);
    const bottomRef = useRef<ElementRef<"div">>(null);

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useChatQuery({
        queryKey,
        apiUrl,
        paramKey,
        paramValue,
    });
    useChatSocket({queryKey,addKey,updateKey});
    useChatScroll({chatRef,bottomRef,loadMore:fetchNextPage,shouldLoadMore:!isFetchingNextPage && !!hasNextPage,count:data?.pages?.[0]?.items?.length ?? 0,})
    if (status === "loading") {
        return(
            <div className="flex flex-col flex-1 justify-center items-center">
                <Loader2 className="h-7 w-7 text-slate-500 animate-spin my-4"/>
                <p className="text-xs text-slate-400">
                    Loading messages...
                </p>
            </div>
        )
    }
    if (status === "error") {
        return(
            <div className="flex flex-col flex-1 justify-center items-center">
                <ServerCrash className="h-7 w-7 text-slate-500 my-4"/>
                <p className="text-xs text-slate-400">
                    Something Went Wrong
                </p>
            </div>
        )
    }
    return (
    <div ref={chatRef} className="flex-1 flex flex-col py-4 overflow-y-auto" >
      {!hasNextPage && <div className="flex-1"/>}
      {!hasNextPage && <ChatWelcome type={type} name={name}/>}
      {hasNextPage  && (
        <div className="flex justify-center">
          {isFetchingNextPage?(
              <Loader2 className="h-6 w-6 text-slate-500 animate-spin my-4"/>
          ):(
            <button onClick={()=>fetchNextPage()} className="text-slate-400 text-xs my-4 hover:text-slate-300 transition">
              Load Prvious Pages
            </button>
          )}
        </div>
      )}
      <div className="flex flex-col-reverse mt-auto">
        {data?.pages?.map((group, i) => (
          <Fragment key={i}>
            {group.items?.map((message: MessageWithMemberWithProfile) => (
              <div key={message.id}>
                 <ChatItem
                key={message.id}
                id={message.id}
                currentMember={member}
                member={message.member}
                content={message.content}
                fileUrl={message.fileUrl}
                deleted={message.deleted}
                timestamp={format(new Date(message.createdAt), DATE_FORMAT)}
                isUpdated={message.updatedAt !== message.createdAt}
                socketUrl={socketUrl}
                socketQuery={socketQuery}
              />
              </div>
            ))}
          </Fragment>
        ))}
      </div>
      <div ref={bottomRef} />
    </div>
  )
}

