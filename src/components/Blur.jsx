import React from "react";

const Blur = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Top Left */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] lg:w-[25vw] lg:h-[25vw] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blobScaleDelay2000" />

        {/* Top Right */}
        <div className="absolute top-[-15%] right-[-10%] w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] lg:w-[25vw] lg:h-[25vw] bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blobScaleDelay4000" />

        {/* Bottom Left */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] lg:w-[25vw] lg:h-[25vw] bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blobScaleDelay6000" />

        {/* Bottom Right */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] lg:w-[25vw] lg:h-[25vw] bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blobScaleDelay2000" />

        {/* Center Behind Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] lg:w-[40vw] lg:h-[40vw] bg-blue-500 rounded-full mix-blend-multiply filter blur-[140px] opacity-40 animate-blobScaleDelay4000" />
      </div>
    </div>
  );
};

export default Blur;
