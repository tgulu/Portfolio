import React from "react";

const Blur = () => {
  return (
    <div className="absolute inset-0 -z-10 flex items-center justify-center">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-20 -left-8 md:w-60 md:h-[200px] w-36 h-44 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blobScaleDelay6000"></div>
        <div className="absolute top-0 right-8 md:-right-20 md:w-60 md:h-[200px] w-36 h-44 bg-pink-400  rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blobScaleDelay2000"></div>
        <div className="absolute -bottom-8 left-4 md:left-20 md:w-60 md:h-[200px] w-36 h-44 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blobScaleDelay4000"></div>
        <div className="absolute bottom-28 md:-bottom-32 right-16 md:left-96 md:w-60 md:h-[200px] w-36 h-44 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blobScaleDelay4000"></div>
      </div>
    </div>
  );
};

export default Blur;
