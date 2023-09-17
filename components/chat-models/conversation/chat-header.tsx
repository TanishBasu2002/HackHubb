/* eslint-disable react/react-in-jsx-scope */

import { Hash} from "lucide-react";
import MobileToggle from "../tools/mobile-toggle";
import UserAvatar from "../tools/user-avatar";
import { SocketIndicator } from "../tools/socket-indicator";

interface ChatHeaderProps{
    serverId:string;
    name:string;
    type:"channel"| "conversation";
    imageUrl?:string;
}
const ChatHeader = ({serverId,name,type,imageUrl}:ChatHeaderProps) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-slate-800 border-b-2">
      <MobileToggle serverId={serverId}/>
      {type === "channel" &&(
        <Hash className="w-5 h-5 text-slate-400"/>
      )}
      {type === "conversation" && (
        <UserAvatar src={imageUrl} className="h-8 w-8 m-2" />
      )}
      <p className="font-semibold text-md text-white">
        {name}
      </p>
      <div className="ml-auto flex items-center">
        <SocketIndicator />
      </div>
    </div>
  )
}

export default ChatHeader
