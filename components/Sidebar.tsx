import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Maininputfield from "./Maininputfield";
import Mainselectfield from "./Mainselectfield";
import Maindatefield from "./Maindatefield";
import Maintable from "./Maintable";
import CloseIcon from "./svg/CloseIcon";
import Progressbar from "./Progressbar";
import Image from "next/image";
import DashboardSvgIcon from "./svg/DashboardSvgIcon";
import VehiDetails from "./VehiDetails";

const Sidebar = () => {
  const [state, setState] = useState("");
  const [submenu, setSubmenu] = useState("");
  return (
    <>
      <div className="text-black  flex  relative top-0 h-screen">
        <nav className="fixed top-0 text-black bg-white p-4 w-[300px] h-screen">
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={100}
            className="m-auto"
          />
          <ul className="list-none p-6 mb-4 mt-8">
            {sidebarCollection.map((value, index) => {
              return (
                <>
                  <li
                    className="flex items-center justify-between h-14"
                    key={index}
                    onClick={() => setState(value.value)}
                  >
                    <div className="flex justify-between items-center w-full gap-2 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <Image
                          src={value.imgUrl}
                          alt={value.imageDesc}
                          width={20}
                          height={20}
                        />
                        <div className="font-semibold text-md">
                          {value.value}
                        </div>
                      </div>
                      {value?.dropdownIcon ? (
                        <Image
                          src={value.dropdownIcon}
                          alt={value.imageDesc}
                          width={20}
                          height={20}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </li>
                  {state === "Onboarding" && (
                    <div className="pl-6 font-semibold">
                      {value.submenu?.map((items, ind) => {
                        return (
                          <>
                            <div
                              className="mb-2 cursor-pointer"
                              onClick={() => setSubmenu(items.option)}
                            >
                              {items.option}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  )}
                </>
              );
            })}
          </ul>
        </nav>
        <div className="content flex-grow ml-4 mt-4 ml-[316px]">
          {state === "Dashboard" && <div>dashboard</div>}
          {state === "Bookings" && <div>Bookings</div>}
          {state === "Accounts" && <div>Accounts</div>}
          {state === "Compliances" && <div>Compliances</div>}
          {state === "User Management" && <div>User Management</div>}
          {state === "Onboarding" && submenu === "Vehicle" ? (
            <>
              <VehiDetails />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
const sidebarCollection = [
  {
    imgUrl: "/dashboard.svg",
    imageDesc: "dashboard",
    value: "Dashboard",
  },
  {
    imgUrl: "/calendar.svg",
    imageDesc: "calender",

    value: "Bookings",
    dropdownIcon: "/dropdown.svg",
  },
  {
    imgUrl: "/bank.svg",
    imageDesc: "bank",

    value: "Accounts",
    dropdownIcon: "/dropdown.svg",
  },
  {
    imgUrl: "/note.svg",
    imageDesc: "note",

    value: "Compliances",
  },
  {
    imgUrl: "/profile.svg",
    imageDesc: "profile",

    value: "User Management",
    dropdownIcon: "/dropdown.svg",
  },
  {
    imgUrl: "/personalcard.svg",
    imageDesc: "personalCard",

    value: "Onboarding",
    dropdownIcon: "/dropdown.svg",
    submenu: [
      {
        option: "Vehicle",
      },
      {
        option: "Driver",
      },
      {
        option: "Customer",
      },
      {
        option: "Supplier",
      },
    ],
  },
  {
    imgUrl: "/message-question.svg",
    imageDesc: "Help",

    value: "Help",
  },
  {
    imgUrl: "/setting.svg",
    imageDesc: "settings",

    value: "Settings",
  },
];
