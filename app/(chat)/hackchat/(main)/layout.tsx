/* eslint-disable react/react-in-jsx-scope */
import NavigationSidebar from "@/components/chat-models/navigation/navigation-sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chatrooms",
};
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="max-md:hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
