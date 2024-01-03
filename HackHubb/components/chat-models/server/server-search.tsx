/* eslint-disable react/react-in-jsx-scope */
"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ServerSearchProps {
  data: {
    label: string;
    type: "channel" | "member";
    data:
      | {
          icon: React.ReactNode;
          name: string;
          id: string;
        }[]
      | undefined;
  }[];
}
const ServerSearch = ({ data }: ServerSearchProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const onClick = ({
    id,
    type,
  }: {
    id: string;
    type: "channel" | "member";
  }) => {
    setOpen(false);

    if (type === "member") {
      return router.push(
        `/hackchat/servers/${params?.serverId}/conversations/${id}`,
      );
    }

    if (type === "channel") {
      return router.push(
        `/hackchat/servers/${params?.serverId}/channels/${id}`,
      );
    }
  };
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-slate-700/50 transition"
      >
        <Search className="w-4 h-4 text-slate-400" />
        <p className="font-semibold text-sm text-slate-400 group-hover:text-slate-300 transition">
          Search
        </p>
        <kbd className="text-light-1 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <Command>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput
            className="text-light-3"
            placeholder="Search all channels and members"
          />
          <CommandList>
            <CommandEmpty className="text-light-2">
              No Results found
            </CommandEmpty>
            {data.map(({ label, type, data }) => {
              if (!data?.length) return null;

              return (
                <CommandGroup
                  className="text-light-2"
                  key={label}
                  heading={label}
                >
                  {data?.map(({ id, icon, name }) => {
                    return (
                      <CommandItem
                        key={id}
                        onSelect={() => onClick({ id, type })}
                      >
                        {icon}
                        <span>{name}</span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              );
            })}
          </CommandList>
        </CommandDialog>
      </Command>
    </>
  );
};

export default ServerSearch;
