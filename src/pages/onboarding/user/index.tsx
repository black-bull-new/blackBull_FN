import Image from "next/image";
import Progressbar from "../../../../components/Progressbar";

import Maininputfield from "../../../../components/Maininputfield";
import DropDownMap from "../../../../components/DropDownMap";
import { useState } from "react";
import Checkbox from "../../../../components/Checkbox";
import PasswordField from "../../../../components/password-field/PasswordFlied";
import Button from "../../../../components/Button";

const User = () => {
  const [selectedData, setSelectedData] = useState("");

  return (
    <>
      <div className="flex bg-[#E9EFFF]">
        <div className="ml-[316px] w-full mt-4">
          <div className="bg-white mr-4 flex justify-between items-center rounded-md">
            <h2 className=" w-full p-4 rounded-md font-bold">Create User</h2>
            <div className="h-8 w-8 flex justify-center cursor-pointer text-2xl items-center bg-blueGrey-100 rounded-full mr-4">
              <span className="mt-[-2px] ml-[2px] text-[#292D32] rotate-45">
                +
              </span>
            </div>
          </div>
          <div className="bg-white mr-4 px-4 rounded-md mt-4 p-4 mb-20">
            <div className="mx-2">
              <Progressbar />
            </div>
            <div className="relative w-fit">
              <Image
                src="/driverImage.svg"
                alt="driver"
                width={100}
                height={100}
              />
              <span className="w-6 h-6 rounded-full bg-accent3 block text-white flex justify-center items-end text-xl absolute right-2 bottom-2">
                +
              </span>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold mb-4">Personal Information</h2>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="First Name"
                  value={"Sanket"}
                  className="w-full"
                />
                <Maininputfield
                  label="Last Name"
                  value={"Salve"}
                  className="w-full"
                />
                <Maininputfield
                  label="Display Name"
                  value={"Company ABC"}
                  className="w-full"
                />
                <Maininputfield
                  label="Email Address"
                  value={"sanket.r.salve@gmail.com"}
                  className="w-full"
                />
                <Maininputfield
                  label="Contact Number"
                  value={"0484586482"}
                  className="w-full"
                />
              </div>
              <div className="grid mt-4 grid-cols-3 gap-4 ">
                <div className="relative">
                  <Maininputfield
                    label="Username"
                    value={"sanket"}
                    className="w-full"
                  />
                  <span className="absolute right-[-15px] bottom-2">@</span>
                </div>
                <DropDownMap
                  label="Domains"
                  mapOption={domainsCollection}
                  selectedData={selectedData}
                  setSelectedData={selectedData}
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold mb-4">Professional Information</h2>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Employee ID"
                  value={"148795"}
                  className="w-full"
                />
                <Maininputfield
                  label="Access Level"
                  value={"Salve"}
                  className="w-full"
                />
                <Maininputfield
                  label="Designation"
                  value={"Manager"}
                  className="w-full"
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold mb-4">User Role</h2>

              <div className="grid grid-cols-3 gap-4">
                <DropDownMap
                  label="Role Selected"
                  mapOption={roleCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
              </div>
            </div>
            <div className="mt-8">
              <Checkbox content="Auto create a temporary password" />
            </div>
            <div className="mt-4">
              <PasswordField confirmPassword={true} />
            </div>
            <div className="mt-4 grid gap-2">
              <Checkbox content="Require a password change for this user upon their initial login" />
              <Checkbox content="Send a password in email upon completion" />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button
                text="Cancel"
                className="!bg-transparent !text-black border border-[#e5e5e5] px-6"
              />
              <Button text="Create" className="px-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
const domainsCollection = [
  {
    value: "blackbulltrans.com.au",
  },
  {
    value: "domain1",
  },
  {
    value: "domain2",
  },
];
const roleCollection = [
  {
    value: "Global Administrator",
  },
  {
    value: "Account Administrator",
  },
  {
    value: "Operations Administrator",
  },
  { value: "Booking Administrator" },
  {
    value: "Dispatch Administrator",
  },
  {
    value: "User Administrator",
  },
  {
    value: "Compliance Administrator",
  },
  {
    value: "Supplier Administrator",
  },
  {
    value: "Customer Administrator",
  },
  {
    value: "Custom Access",
  },
];
