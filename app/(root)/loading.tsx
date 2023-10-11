/* eslint-disable react/react-in-jsx-scope */

import { Loader2 } from "lucide-react"



const Loading = () => {
  return (
    <div suppressHydrationWarning className="min-w-full container flex justify-center items-center min-h-screen">
        <Loader2 className="animate-spin text-fuchsia-800 w-10 h-10" />
    </div>
  )
}

export default Loading