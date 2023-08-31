import NavigationSidebar from '@/components/chat-models/navigation/navigation-sidebar'
import Bottombar from '@/components/share/Bottombar'
import LeftSidebar from '@/components/share/LeftSidebar'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Chatrooms',
  }
const MainLayout = async({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full'>
        <div className='hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0'>
        <LeftSidebar />
        </div>
        <div className="ml-[100px] hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar/>
        </div>
      <main className="md:pl-[172px] h-full">
      {children}
      </main>
        <Bottombar />
    </div>
  )
}

export default MainLayout
