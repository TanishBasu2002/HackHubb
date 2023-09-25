/* eslint-disable react/react-in-jsx-scope */
"use client";

import { Member, Message, Profile } from "@prisma/client";
import { ChatWelcome } from "./chat-welcome";
import { ElementRef, Fragment, useRef } from "react";
import { useChatQuery } from "@/hooks/use-chat-query";
import { Loader2, ServerCrash } from "lucide-react";

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
    socketuery:Record<string, string>;
    paramKey:"channelId"|"conversationId";
    paramValue:string;
    type:"channel"|"conversation";
}
export const ChatMessages = ({name,member,chatId,apiUrl,socketUrl,socketuery,paramKey,paramValue,type,}:ChatMessagesProps) => {
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
    <div className="flex-1 flex flex-col py-4 overflow-y-auto" >
      <div className="flex-1"/>
      <ChatWelcome type={type} name={name}/>
      <div className="flex flex-col-reverse mt-auto">
        {data?.pages?.map((group, i) => (
          <Fragment key={i}>
            {group.items.map((message: MessageWithMemberWithProfile) => (
              <div key={message.id}>
                {message.content}
              </div>
            ))}
          </Fragment>
        ))}
      </div>
      <div ref={bottomRef} />
    </div>
  )
}

