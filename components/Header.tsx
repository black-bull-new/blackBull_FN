import React, { useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { logoutUser } from "@/network-request/api";
import { useRouter } from "next/router";
import { destroyCookie } from 'nookies';
const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const logoutHandler = async () => {
    try {
      const response = await logoutUser();
      if (response.success) {
        toast("Logout Successfully Done...", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setTimeout(() => {
          destroyCookie(null,"token")
          router.push("/login");
        }, 2000)
      }
    } catch (error) {
      toast("Something went wrong", {
        icon: "⚠️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      console.log("error", error);
    }
  };

  return (
    <React.Fragment>
      <header>
        <div>
          <Toaster />
        </div>
        <div className="p-4 bg-white flex items-center justify-end gap-6">
          <Image
            src="/notifications.png"
            alt="notification"
            width={20}
            height={16}
          />
          <div className="flex gap relative">
            <span className="bg-primary9 w-8 h-8 flex justify-center items-center rounded-full text-sm font-bold text-primary">
              R
            </span>
            <Image
              className="cursor-pointer"
              onClick={toggleDropdown}
              src="/dropdown.svg"
              alt="dropdown"
              width={18}
              height={14}
            />
            {isDropdownOpen && (
              <div className="absolute top-full right-0 bg-white border rounded shadow mt-2">
                <button
                  onClick={logoutHandler}
                  className="text-[red] font-semibold py-2 px-4 block w-full text-left hover:bg-gray-100 focus:outline-none"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
