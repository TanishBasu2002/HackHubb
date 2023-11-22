/* eslint-disable react/react-in-jsx-scope */

import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div
      suppressHydrationWarning
      className="min-w-full container flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-700 via-slate-950 to-black"
    >
      <Loader2 className="animate-spin text-slate-400 w-10 h-10" />
    </div>
  );
};

export default Loading;
