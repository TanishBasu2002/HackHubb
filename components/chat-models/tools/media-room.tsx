"use client";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface MediaRoomProps {
    chatId: string;
    video: boolean;
    audio: boolean;
    screen?:boolean;
  };
  
  export const MediaRoom = ({
    chatId,
    video,
    audio,
    screen,
  }: MediaRoomProps) => {
    const { user } = useUser();
    const [token, setToken] = useState("");
  
    useEffect(() => {
      if (!user?.firstName || !user?.lastName) return;
  
      const name = `${user.firstName} ${user.lastName}`;
  
      (async () => {
        try {
          const resp = await fetch(`/api/livekit?room=${chatId}&username=${name}`);
          const data = await resp.json();
          setToken(data.token);
        } catch (e) {
          console.log(e);
        }
      })()
    }, [user?.firstName, user?.lastName, chatId]);
  
    if (token === "") {
      return (
        <div className="flex flex-col flex-1 justify-center items-center">
          <Loader2
            className="h-7 w-7 text-slate-500 animate-spin my-4"
          />
          <p className="text-xs text-slate-400">
            Loading...
          </p>
        </div>
      )
    }
  
    return (
      <LiveKitRoom
        data-lk-theme="default"
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        token={token}
        connect={true}
        screen={screen}
        video={video}
        audio={audio}
      >
        <VideoConference />
      </LiveKitRoom>
    )
  }