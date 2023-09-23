import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Smile } from "lucide-react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

/* eslint-disable react/react-in-jsx-scope */
interface EmojiPickerProps {
  onChange: (value: string) => void;
}

export const EmojiPicker = ({
  onChange,
}: EmojiPickerProps) => {

  return (
    <Popover>
      <PopoverTrigger>
        <Smile
          className="text-slate-400 hover:text-slate-300 transition"
        />
      </PopoverTrigger>
      <PopoverContent 
        side="right" 
        sideOffset={40}
        className="bg-slate-900 border-none shadow-none drop-shadow-none mb-16"
      >
        <Picker
          set="Facebook"
          theme="dark"
          data={data}
          onEmojiSelect={(emoji: any) => onChange(emoji.native)}
        />
      </PopoverContent>
    </Popover>
  )
}