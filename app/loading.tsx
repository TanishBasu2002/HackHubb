/* eslint-disable react/react-in-jsx-scope */


import { ScaleLoader} from "react-spinners";

const Loading = () => {
  return (
    <div suppressHydrationWarning className="min-w-full container flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-700 via-slate-950 to-black">
        <ScaleLoader color="#9370DB"/>
    </div>
  )
}

export default Loading