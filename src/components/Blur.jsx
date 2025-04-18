import React from "react";

const Blur = () => {
  return (
    <div className="absolute inset-0 -z-10 flex items-center justify-center">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-8 md:w-60 md:h-[250px] w-36 h-44 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blobScaleDelay6000"></div>
        <div className="absolute top-0 -right-4 md:w-60 md:h-[250px] w-36 h-44 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blobScaleDelay2000"></div>
        <div className="absolute -bottom-8 left-20 md:w-60 md:h-[250px] w-36 h-44 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blobScaleDelay4000"></div>
        <div className="absolute -bottom-8 right-64 md:w-60 md:h-[250px] w-36 h-44 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blobScaleDelay4000"></div>
      </div>
    </div>
  );
};

export default Blur;
