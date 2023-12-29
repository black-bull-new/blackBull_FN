import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="p-4 bg-white flex items-center justify-end gap-6">
          <Image
            src="/notifications.png"
            alt="notification"
            width={20}
            height={16}
          />
          <div className="flex gap">
            <span className="bg-[#E9EFFF] w-8 h-8 flex justify-center items-center rounded-full text-sm font-bold text-primary">
              R
            </span>
            <Image src="/dropdown.svg" alt="dropdown" width={18} height={14} />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
