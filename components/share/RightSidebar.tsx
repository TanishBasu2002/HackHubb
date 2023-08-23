"use client"
import { usePathname } from "next/navigation";


export default function RightSidebar() {
    const pathname = usePathname();
    const isHackstoreRoute = pathname === '/hackstore';
  
    return (<>
    {isHackstoreRoute ? null : (
      <section className="custom-scrollbar rightsidebar">
        
            <div className="flex flex-1 flex-col justify-start">
            <h3 className="text-heading4-medium text-light-1">Suggested Communities</h3>
          </div>
          <div className="flex flex-1 flex-col justify-start">
            <h3 className="text-heading4-medium text-light-1">Suggested Users for you</h3>
          </div>
      
      </section>
        )}
    </>);
}