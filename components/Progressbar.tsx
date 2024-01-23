import React from "react";
import Image from "next/image";

const Progressbar = () => {
  return (
    <>
      <h4 className="text-[#607D8B] text-[12px] font-semibold">
        Your progress
      </h4>
      <div className="flex justify-between items-center">
        <h5 className="text-primary text-[16px] font-bold">
          80% to complete
        </h5>
        <p className="text-[#8097A2] text-[15px] flex gap-1 items-center">
          <Image src="/clock.svg" alt="clock" width={20} height={20} />
          20min
        </p>
      </div>

      <div>
        <progress value={80} max={100} className="w-full h-2 rounded-full">
          80%
        </progress>
      </div>
    </>
  );
};

export default Progressbar;
