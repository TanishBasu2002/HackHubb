/* eslint-disable react/react-in-jsx-scope */
"use client";
import { Plus } from 'lucide-react';

import { ActionTooltip } from '../tools/action-tooltip';
import { useModal } from '@/hooks/use-modal-store';

const NavigationAction = () => {
  const {onOpen}=useModal();
  return (
    <div>
        <ActionTooltip side='right' align='center' label='Create New ChatRoom'> 
        <button onClick={()=>onOpen("createServer")} className='group flex items-center'>
        <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-slate-700 group-hover:bg-primary-500">
            <Plus className='group-hover:text-white transition text-primary-500' size={25}/>
        </div>
        </button>
        </ActionTooltip>
    </div>
  )
}

export default NavigationAction
