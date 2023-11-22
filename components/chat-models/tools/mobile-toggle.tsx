/* eslint-disable react/react-in-jsx-scope */

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavigationSidebar from "../navigation/navigation-sidebar";
import { ServerTopbar } from "../server/server-topbar";

const MobileToggle = ({ serverId }: { serverId: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="md:hidden bg-slate-800">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 flex gap-0">
        <div className="w-[72px]">
          <NavigationSidebar />
        </div>
        <ServerTopbar serverId={serverId} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileToggle;
