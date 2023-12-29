import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { useRouter } from "next/router";

const VehiDetails = () => {
  const [action, setAction] = useState(false);
  const [addPopUp, setAddPop] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="mr-4">
        <h2 className="bg-white w-full p-4 rounded-md font-bold">
          Vehicle Details
        </h2>
        <div>
          <div className="mt-4 bg-white p-4 rounded-md items-center ">
            <div className="flex items-center justify-between">
              <h3 className="leading-loose font-semibold">
                Existing Vehicle List
              </h3>
              <div className="flex gap-2 relative">
                <Button
                  text="Bulk Upload"
                  className="bg-transparent !text-[#6599FF] border border-[#6599FF] tracking-wide"
                />
                <Button
                  text="Choose Action"
                  className=""
                  dropDownIcon
                  onClick={() => setAction(!action)}
                />
                {action === true && (
                  <>
                    <div className="absolute top-[40px] right-0 w-[142px] text-center bg-white font-semibold">
                      <div
                        className="py-2 rounded cursor-pointer hover:bg-[#032272] hover:text-white"
                        onClick={() => setAddPop(true)}
                      >
                        Add Vehicle
                      </div>
                      <div className="py-2 rounded cursor-pointer hover:bg-[#032272] hover:text-white">
                        Send Form Link
                      </div>
                      <div className="py-2 rounded cursor-pointer hover:bg-[#032272] hover:text-white">
                        Pending Reviews
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div>
              <div className="grid text-center grid-cols-[14%_14%_14%_14%_14%_14%_16%] bg-[#EFF2F3] p-4 rounded-md mt-4">
                {vehicleDetailsHeading.map((value, index) => {
                  return (
                    <div className="text-primary font-semibold" key={index}>
                      {value.heading}
                    </div>
                  );
                })}
              </div>
              <div className="grid text-center grid-cols-[14%_14%_14%_14%_14%_14%_16%] p-4 border">
                {vehicleDetailsCollection.map((items, ind) => {
                  return (
                    <>
                      <div key={ind} className="mb-4">
                        {items.regoNumber}
                      </div>
                      <div key={ind} className="mb-4">
                        {items.type}
                      </div>
                      <div key={ind} className="mb-4">
                        {items.category}
                      </div>
                      <div key={ind} className="mb-4">
                        {items.expiry}
                      </div>
                      <div key={ind} className="mb-4">
                        {items.regoDoc}
                      </div>
                      <div key={ind} className="mb-4">
                        {items.status}
                      </div>
                      <div key={ind} className="mb-4">
                        {items.complaints}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between pt-4 bg-white  p-4">
              <div>Showing 1 to 7 of 56 entries</div>
              <div className="bg-[#CED7DB] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                <Image
                  src="/chevron_right.png"
                  alt="chevron right"
                  width={22}
                  height={22}
                />
              </div>
            </div>
          </div>
        </div>
        {addPopUp === true ? (
          <>
            <div className="w-screen h-screen  fixed top-0 left-0 backdrop-blur-md flex">
              <div className="w-[440px] h-[176px] bg-white m-auto rounded-xl relative border">
                <h4 className="text-center font-semibold p-4">
                  Add a New Vehicle
                </h4>
                <p className="text-center">
                  Are you sure you want to add a vehicle?
                </p>
                <div className="flex justify-end absolute bottom-4 right-4 gap-2">
                  <Button
                    text="Cancel"
                    className="bg-transparent border !text-[#000] !py-[4px] !px-[8px]"
                    onClick={() => setAddPop(false)}
                  />
                  <Button
                    text="Add Vehicle"
                    className=" !py-[4px] !px-[8px]"
                    onClick={() => router.push("/create-vehicle")}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default VehiDetails;
const vehicleDetailsHeading = [
  {
    heading: "Rego number",
  },
  {
    heading: "Vehicle type",
  },
  {
    heading: "Category",
  },
  {
    heading: "Expiry date",
  },
  {
    heading: "Rego Doc.",
  },
  {
    heading: "Status",
  },
  {
    heading: "Complaints",
  },
];
const vehicleDetailsCollection = [
  {
    regoNumber: "xb656k",
    type: "Prime Mover",
    category: "Sleeper cab",
    expiry: "20/12/2023",
    regoDoc: "view",
    status: "status",
    complaints: "No",
  },
  {
    regoNumber: "xw30cp",
    type: "Prime Mover",
    category: "Sleeper cab",
    expiry: "20/12/2023",
    regoDoc: "view",
    status: "status",
    complaints: "No",
  },
  {
    regoNumber: "xb656k",
    type: "Prime Mover",
    category: "Sleeper cab",
    expiry: "20/12/2023",
    regoDoc: "view",
    status: "status",
    complaints: "No",
  },
  {
    regoNumber: "xb656k",
    type: "Prime Mover",
    category: "Sleeper cab",
    expiry: "20/12/2023",
    regoDoc: "view",
    status: "status",
    complaints: "No",
  },
  {
    regoNumber: "xb656k",
    type: "Prime Mover",
    category: "Sleeper cab",
    expiry: "20/12/2023",
    regoDoc: "view",
    status: "status",
    complaints: "No",
  },
  {
    regoNumber: "xb656k",
    type: "Prime Mover",
    category: "Sleeper cab",
    expiry: "20/12/2023",
    regoDoc: "view",
    status: "status",
    complaints: "No",
  },
  {
    regoNumber: "xb656k",
    type: "Prime Mover",
    category: "Sleeper cab",
    expiry: "20/12/2023",
    regoDoc: "view",
    status: "status",
    complaints: "No",
  },
];
