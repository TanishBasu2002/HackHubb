/* eslint-disable react/react-in-jsx-scope */

import MobileToggle from "@/components/share/MobileToggle";
import { Sidebar } from "./_components/sidebar";


const DashboardLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <MobileToggle />
      </div>
      <div className="max-md:hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">
        {children}
      </main>
    </div>
   );
}
 
export default DashboardLayout;