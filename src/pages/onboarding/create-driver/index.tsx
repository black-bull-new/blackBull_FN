import { useState } from "react";
import DropDownMap from "../../../../components/DropDownMap";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Maindatefield from "../../../../components/Maindatefield";
import Maininputfield from "../../../../components/Maininputfield";
import Progressbar from "../../../../components/Progressbar";
import Sidebar from "../../../../components/Sidebar";
import Image from "next/image";

const CreateDriver = () => {
  const [selectedData, setSelectedData] = useState("");
  return (
    <>
      <Header />
      <div className="flex bg-[#E9EFFF]">
        <div className="sticky top-0">
          <Sidebar />
        </div>
        <div className="ml-[316px] w-full mt-4">
          <div className="bg-white mr-4 flex justify-between items-center rounded-md">
            <h2 className=" w-full p-4 rounded-md font-bold">Create Driver</h2>
            <div className="h-8 w-8 flex justify-center cursor-pointer text-2xl items-center bg-blueGrey-100 rounded-full mr-4">
              <span className="mt-[-2px] ml-[2px] text-[#292D32] rotate-45">
                +
              </span>
            </div>
          </div>
          <div className="bg-white mr-4 px-4 rounded-md mt-4 p-4">
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
            <div>
              <h3 className=" w-full my-4 rounded-md font-semibold">
                Vehicle Information
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="House Number"
                  value={"12/20"}
                  className="w-full"
                />
                <Maininputfield
                  label="Middle Name"
                  value={"Raju"}
                  className="w-full"
                />
                <Maininputfield
                  label="Last Name"
                  value="Salve"
                  className="w-full"
                />
                <Maindatefield label="DOB" className="w-full" />

                <Maininputfield
                  label="Email"
                  value="sanket.r.salve@gmail.com"
                  className="w-full"
                />
                <Maininputfield
                  label="Mobile"
                  value="+91 9584586482"
                  className="w-full"
                />
                <Maininputfield
                  label="Nationality"
                  value="Indian"
                  className="w-full"
                />

                {/* <FileUpload /> */}
              </div>
            </div>
            <div className="mb-4 mt-8">
              <h3 className=" w-full mb-4 rounded-md font-semibold">
                Address Information
              </h3>
              <h4 className="text-sm font-semibold mb-4">Current Address</h4>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="House Number"
                  value={"12/20"}
                  className="w-full"
                />
                <Maininputfield
                  label="Street"
                  value={"Payne Street"}
                  className="w-full"
                />
                <Maininputfield
                  label="Suburb"
                  value="Caulfield"
                  className="w-full"
                />
                <DropDownMap
                  label="State"
                  mapOption={stateCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
                <DropDownMap
                  label="Country"
                  mapOption={stateCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />

                {/* <DropDownMap
                  label="Vehicle Type"
                  mapOption={vehicleTypeColleciton}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                /> */}

                {/* <FileUpload /> */}
              </div>
            </div>
          </div>
          {/* <div className="mr-4 px-4 rounded-md mt-4 p-4 flex justify-end gap-2">
            <Button
              text="Save"
              className="!bg-transparent !text-[#000] border px-8 !rounded-xl text-sm border-[#032272]"
            />
            <Button text="Create" className="px-8 !rounded-xl text-sm" />
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CreateDriver;
const stateCollection = [
  {
    value: "Victoria",
  },
  {
    value: "items1",
  },
  {
    value: "items2",
  },
  {
    value: "items3",
  },
  {
    value: "items4",
  },
  {
    value: "items5",
  },
];
const countryCollection = [
  {
    value: "Australia",
  },
  {
    value: "item1",
  },
  {
    value: "item2",
  },
  {
    value: "item3",
  },
  {
    value: "item1",
  },
  {
    value: "item1",
  },
];
