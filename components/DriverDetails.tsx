import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { useRouter } from "next/router";

const DriverDetails = () => {
  const [action, setAction] = useState(false);
  const [addPopUp, setAddPop] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="mr-4">
        <h2 className="bg-white w-full p-4 rounded-md font-bold">
          Driver Details
        </h2>
        <div>
          <div className="mt-4 bg-white p-4 rounded-md items-center ">
            <div className="flex items-center justify-between">
              <h3 className="leading-loose font-semibold">
                Existing Driver List
              </h3>
              <div className="flex gap-2 relative">
                <Button
                  text="Bulk Upload"
                  className="bg-accent3 border border-[#6599FF] tracking-wide"
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
                        Add Driver
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
              <div className="grid text-center grid-cols-[11%_11%_11%_11%_11%_11%_11%_11%_12%] bg-[#EFF2F3] p-4 rounded-md mt-4">
                {driverDetailsHeading?.map((value, index) => {
                  return (
                    <>
                      <div className="font-semibold text-sm" key={index}>
                        {value.heading}
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="grid text-center grid-cols-[11%_11%_11%_11%_11%_11%_11%_11%_12%] p-4 border">
                {driverDetailsData.map((item, ind) => {
                  return (
                    <>
                      <div className="mb-4">{item.firstName}</div>
                      <div className="mb-4">{item.lastName}</div>
                      <div className="mb-4">{item.licenceNo}</div>
                      <div className="mb-4">{item.licenceType}</div>
                      <div className="mb-4">{item.expiryDate}</div>
                      <div className="mb-4">{item.state}</div>
                      <div className="mb-4">{item.licenceDoc}</div>
                      <div className="mb-4">{item.status}</div>
                      <div className="mb-4">{item.complaint}</div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between pt-4 bg-white  p-4">
              <div>Showing 1 to 6 of 56 entries</div>
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
                  Add a New Driver
                </h4>
                <p className="text-center">
                  Are you sure you want to add a driver?
                </p>
                <div className="flex justify-end absolute bottom-4 right-4 gap-2">
                  <Button
                    text="Cancel"
                    className="!bg-transparent border !text-[#000] !py-[4px] !px-[8px]"
                    onClick={() => setAddPop(false)}
                  />
                  <Button
                    text="Add Driver"
                    className=" !py-[4px] !px-[8px]"
                    onClick={() => router.push("/onboarding/create-vehicle")}
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
export default DriverDetails;
const driverDetailsHeading = [
  {
    heading: "FIRST NAME",
  },
  {
    heading: "LAST NAME",
  },
  {
    heading: "LICENCE NO.",
  },
  {
    heading: "LICENCE TYPE",
  },
  {
    heading: "EXPIRY DATE",
  },
  {
    heading: "STATE",
  },
  {
    heading: "LICENCE DOC.",
  },
  {
    heading: "STATUS",
  },
  {
    heading: "COMPLAINT",
  },
];
const driverDetailsData = [
  {
    firstName: "Gagandeep Singh",
    lastName: "Ranu",
    licenceNo: "038639930",
    licenceType: "Multi Combination",
    expiryDate: "12/08/2025",
    state: "Victoria",
    licenceDoc: "view",
    status: "STATUS",
    complaint: "YES",
  },
  {
    firstName: "Karam Singh",
    lastName: "Deol",
    licenceNo: "049083926",
    licenceType: "Multi Combination",
    expiryDate: "22/05/2024",
    state: "Victoria",
    licenceDoc: "view",
    status: "STATUS",
    complaint: "NO",
  },
  {
    firstName: "Gurpreet Singh",
    lastName: "Sidhu",
    licenceNo: "052468941",
    licenceType: "Multi Combination",
    expiryDate: "17/10/2027",
    state: "Victoria",
    licenceDoc: "view",
    status: "STATUS",
    complaint: "NO",
  },
  {
    firstName: "Gagandeep singh",
    lastName: "Ranu",
    licenceNo: "HN0849",
    licenceType: "Multi Combination",
    expiryDate: "08/12/2025",
    state: "South Australia",
    licenceDoc: "view",
    status: "STATUS",
    complaint: "NO",
  },
  {
    firstName: "Gagandeep Singh",
    lastName: "Ranu",
    licenceNo: "038639930",
    licenceType: "Multi Combination",
    expiryDate: "12/08/2025",
    state: "Victoria",
    licenceDoc: "view",
    status: "STATUS",
    complaint: "YES",
  },
  {
    firstName: "Karam Singh",
    lastName: "Deol",
    licenceNo: "049083926",
    licenceType: "Multi Combination",
    expiryDate: "22/05/2024",
    state: "Victoria",
    licenceDoc: "view",
    status: "STATUS",
    complaint: "NO",
  },
];
