import Image from "next/image";
import Button from "./Button";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { deleteUser, getAllUser } from "@/network-request/user/createUser";
import CommonUI from "@/pages/onboarding/utility/CommonUI";
import { getAllSupplier } from "@/network-request/supplier/supplier";
import FileBulkUpload from "./FileBulkUpload";

const SupplierDetails = () => {
  const [deletePopUp, setDelete] = useState(false);
  const router = useRouter();
  const token = getCookie("token");
  const [userToDelete, setUserToDelete] = useState("");
  const [bulkUpload, setBulkUpload] = useState(false);
  const [supplier, setSupplier] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20); // Number of items to display per page

  // Get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = supplier.slice(indexOfFirstItem, indexOfLastItem);

  // Render vehicle items
  const renderSupplierItems = () => {
    return currentItems.map((item: any, index) => (
      <div
        key={index}
        className="grid text-center grid-cols-[17%_17%_17%_17%_17%_17%] p-4 border"
      >
        <React.Fragment key={item?._id}>
          <p className="mb-4">{index + 1}</p>
          <p className="mb-4">{item?.companyName}</p>
          <p className="mb-4">{item?.tradingName}</p>
          <p className="mb-4">{item?.abn}</p>
          <p className="mb-4">{item?.legalName}</p>
          <p className="mb-4">
            <CommonUI status="Active" />
          </p>
          {/* <div className="flex justify-center gap-2 mb-4">
                        <Image
                          src={"/edit.svg"}
                          alt="edit"
                          width={18}
                          height={18}
                          onClick={() => {
                            router.push({
                              pathname: "/onboarding/edit-user",
                              query: { id: item?._id },
                            });
                          }}
                          className="cursor-pointer"
                        />
                        <Image
                          src={"/trash.svg"}
                          alt="edit"
                          width={18}
                          height={18}
                          className="cursor-pointer"
                          onClick={() => {
                            setDelete(true);
                            setUserToDelete(item?._id);
                          }}
                        />
                      </div> */}
        </React.Fragment>
      </div>
    ));
  };

  const getUsers = async () => {
    const data = await getAllSupplier(token || "");
    if (data) {
      setSupplier(data.data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async () => {
    const response = await deleteUser(token || "", userToDelete);
    if (response) {
      setUserToDelete("");
      setDelete(false);
      getUsers();
    } else {
      setDelete(false);
      setUserToDelete("");
    }
  };

  console.log("supplier :", supplier);

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  return (
    <>
      <div className="mr-4">
        <div>
          <div className="mt-4 mb-20 bg-white p-4 rounded-md items-center ">
            <div className="flex items-center justify-between">
              <h3 className="leading-loose font-semibold">
                Existing Supplier List
              </h3>
              <div className="flex gap-2 relative">
                <button
                  onClick={() => setBulkUpload(true)}
                  className="text-[#2B36D9] font-semibold mx-2"
                >
                  Bulk Upload
                </button>
                <Button
                  text="Add Supplier"
                  className="px-4 rounded-full"
                  onClick={() => router.push("/onboarding/add-supplier")}
                />
              </div>
            </div>
            <div>
              <div className="grid items-center text-center justify-center grid-cols-[17%_17%_17%_17%_17%_17%] bg-[#EFF2F3] p-4 rounded-md mt-4">
                {supplierDetailsHeading?.map((value, index) => {
                  return (
                    <>
                      <div className="font-semibold text-sm" key={index}>
                        {value.heading}
                      </div>
                    </>
                  );
                })}
              </div>
              {/* <div className="grid items-center text-center grid-cols-[17%_17%_17%_17%_17%_17%] p-4 border justify-center">
                {supplier?.map((item: any, ind: number) => {
                  return (
                    <React.Fragment key={item?._id}>
                      <p className="mb-4">{ind + 1}</p>
                      <p className="mb-4">{item?.companyName}</p>
                      <p className="mb-4">{item?.tradingName}</p>
                      <p className="mb-4">{item?.abn}</p>
                      <p className="mb-4">{item?.legalName}</p>
                      <p className="mb-4">
                        <CommonUI status="Active" />
                      </p>
                    </React.Fragment>
                  );
                })}
              </div> */}
              {renderSupplierItems()}
              {deletePopUp === true ? (
                <>
                  <div className="w-screen h-screen  fixed top-0 left-0 backdrop-blur-md flex">
                    <div className="w-[440px] h-[120px] bg-white m-auto rounded-xl relative border">
                      <p className="text-center mt-4 mb-2">
                        Are you sure you want to delete this user details?
                      </p>
                      <div className="flex justify-end absolute bottom-4 right-4 gap-2">
                        <Button
                          text="Cancel"
                          className="!bg-transparent border !text-[#000] !py-[4px] !px-[8px]"
                          onClick={() => {
                            setDelete(false);
                            setUserToDelete("");
                          }}
                        />
                        <Button
                          text="Confirm"
                          className=" !py-[4px] !px-[8px] !bg-red-500"
                          onClick={() => handleDelete()}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            {/* Pagination */}
            <div className="flex justify-between pt-4 bg-white  p-4">
              <div>
                Showing {indexOfFirstItem + 1} to{" "}
                {Math.min(indexOfLastItem, supplier.length)} of{" "}
                {supplier.length} entries
              </div>
              <div className="flex gap-2">
                <div
                  className={`bg-[#CED7DB] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                    currentPage === 1
                      ? "bg-gray-100 cursor-not-allowed"
                      : "bg-[#D9D9D9]"
                  }`}
                  onClick={() => {
                    if (currentPage > 1) {
                      setCurrentPage(currentPage - 1);
                    }
                  }}
                >
                  <Image
                    src="/chevron_right.png"
                    alt="chevron right"
                    width={22}
                    height={22}
                    className="transform rotate-180"
                  />
                </div>
                <div
                  className={`bg-[#CED7DB] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                    currentPage === Math.ceil(supplier.length / itemsPerPage)
                      ? "bg-gray-100 cursor-not-allowed"
                      : "bg-[#D9D9D9]"
                  }`}
                  onClick={() => {
                    if (
                      currentPage !== Math.ceil(supplier.length / itemsPerPage)
                    ) {
                      setCurrentPage(currentPage + 1);
                    }
                  }}
                >
                  <Image
                    src="/chevron_right.png"
                    alt="chevron right"
                    width={22}
                    height={22}
                  />
                </div>
              </div>
            </div>
            {bulkUpload === true && (
              <div className="w-screen h-screen  fixed top-0 left-0 backdrop-blur-md flex">
                <div className="w-[450px] h-fit p-4 bg-white m-auto rounded-xl relative border">
                  <div
                    className="flex justify-end cursor-pointer"
                    onClick={() => setBulkUpload(false)}
                  >
                    <Image
                      src="/add.svg"
                      alt="calender"
                      width={42}
                      height={42}
                    />
                  </div>
                  <h4 className="text-center mt-[-1.5em] font-bold p-4">
                    Streamline Your Fleet
                  </h4>
                  <p className="mb-4 text-center">
                    Upload your list in bulk for a seamless and time-saving
                    experience.
                  </p>
                  <div className="grid gap-2 justify-center">
                    <FileBulkUpload
                      file="Upload Vehicle Document"
                      className="font-semibold"
                      fileName="Upload Vehicle Document"
                    />
                  </div>
                  <div className="flex justify-end mt-4 gap-2">
                    <Button
                      text="Download Template"
                      className="!bg-transparent border-[null] font-semibold !text-[#000] !py-[6px] !px-4"
                      // onClick={() => setLink(false)}
                    />
                    <Button
                      text="Upload"
                      className="rounded-md !py-[6px] !px-4"
                      onClick={() => router.push("/onboarding/create-vehicle")}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default SupplierDetails;
const supplierDetailsHeading = [
  {
    heading: "Customer ID",
  },
  {
    heading: "Company Name",
  },
  {
    heading: "Trading Name",
  },
  {
    heading: "ABN",
  },
  {
    heading: "Legal Name",
  },
  {
    heading: "Status",
  },
];
const userDetailsData = [
  {
    fullName: "Mohd Kaif",
    username: "Kaif",
    role: "Admin",
    lastLogin: "20/02/2024",
    primaryGroup: "Entire Fleet",
    status: "Active",
  },
  {
    fullName: "Mohd Shadab",
    username: "Shadab",
    role: "Admin",
    lastLogin: "20/02/2024",
    primaryGroup: "Entire Fleet",
    status: "Active",
  },
  {
    fullName: "Mohd Sheeban",
    username: "Sheeban",
    role: "Admin",
    lastLogin: "20/02/2024",
    primaryGroup: "Entire Fleet",
    status: "Active",
  },
];
