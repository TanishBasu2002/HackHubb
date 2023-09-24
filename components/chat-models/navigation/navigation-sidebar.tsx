import { currentProfile } from '@/lib/chat/current-profile'
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import React from 'react'
import NavigationAction from './navigation-action';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NavigationItem } from './navigation-item'; 
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { dark } from '@clerk/themes';
import { ActionTooltip } from '../tools/action-tooltip';
import MobileToggle from '@/components/share/MobileToggle';

const NavigationSidebar = async() => {
    const profile =await currentProfile();

    if (!profile) {
        return redirect('/');
    }
    const servers= await db.server.findMany({
        where:{
            members:{
                some:{
                    profileId:profile.id
                }
            }
        }
    })
  return (
    <div className='space-y-4 flex flex-col items-center h-full text-primary w-full border-spacing-1 border-r border-r-dark-4 bg-gradient-to-t from-black via-gray-950 to-gray-900 py-3'>
      <NavigationAction />
      <Separator className='h-[2px] bg-zinc-500 rounded-md w-10 mx-auto'/>
      <ScrollArea className='flex-1 w-full'>
        {servers.map((server)=>(
          <div key={server.id} className="mb-4">
            <NavigationItem id={server.id} name={server.name} imageUrl={server.imageUrl
            }/>
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
       <ActionTooltip label='Navbar' side='left' align='center'>
       <MobileToggle className='bg-transparent' />
       </ActionTooltip>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            baseTheme: dark,
            elements: {
              avatarBox: "h-[36px] w-[36px]"
            }
          }}
        />
      </div>
    </div>
  )
}

export default NavigationSidebar
