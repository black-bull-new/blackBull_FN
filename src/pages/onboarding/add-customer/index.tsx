import Image from "next/image";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Progressbar from "../../../../components/Progressbar";
import Sidebar from "../../../../components/Sidebar";
import Maininputfield from "../../../../components/Maininputfield";
import DropDownMap from "../../../../components/DropDownMap";
import { useState } from "react";
import Button from "../../../../components/Button";
import FileUpload from "../../../../components/FileUpload";

const AddCustomer = () => {
  const [selectedData, setSelectedData] = useState("");

  return (
    <>
      {/* <Header /> */}
      <div className="flex bg-[#E9EFFF]">
        <div className="sticky top-0">
          <Sidebar />
        </div>
        <div className="ml-[316px] w-full mt-4">
          <div className="bg-white mr-4 flex justify-between items-center rounded-md">
            <h2 className=" w-full p-4 rounded-md font-bold">Add Customer</h2>
            <div className="h-8 w-8 flex justify-center cursor-pointer text-2xl items-center bg-blueGrey-100 rounded-full mr-4">
              <span className="mt-[-2px] ml-[2px] text-[#292D32] rotate-45">
                +
              </span>
            </div>
          </div>
          <div className="bg-white mr-4 px-4 rounded-md mt-4 p-4 rounded-md">
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
          </div>
          <div className="bg-white mr-4 mt-4 rounded-md">
            <h2 className="font-semibold p-4">Company Information</h2>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Company Name"
                value={"Sanket"}
                className="w-full"
              />
              <Maininputfield
                label="Trading Name"
                value={"Raju"}
                className="w-full"
              />
              <Maininputfield
                label="ABN"
                value={"08548445"}
                className="w-full"
              />
              <Maininputfield
                label="Legal Name"
                value={"Raju"}
                className="w-full"
              />
              <Maininputfield
                label="Website Address"
                value={"xyz.com"}
                className="w-full"
              />
              <Maininputfield
                label="Customer ID"
                value={"BBT - 1200"}
                className="w-full"
              />
              <Maininputfield
                label="First Name"
                value={"Jordan"}
                className="w-full"
              />
              <Maininputfield
                label="Last Name"
                value={"Wheatley"}
                className="w-full"
              />
              <Maininputfield
                label="Designation"
                value={"CEO"}
                className="w-full"
              />
            </div>
          </div>
          <div className="bg-white mr-4 mt-4 rounded-md">
            <h2 className="font-semibold p-4">Company Address</h2>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Street 1"
                value={"Payne Street"}
                className="w-full"
              />
              <Maininputfield
                label="Street 2"
                value={"Payne Street"}
                className="w-full"
              />
              <Maininputfield
                label="Suburb"
                value={"Caulfield"}
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
                mapOption={countryCollection}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
              />
              <Maininputfield
                label="Post Code"
                value={"3161"}
                className="w-full"
              />
            </div>
          </div>
          <div className="bg-white mr-4 mt-4 rounded-md">
            <h2 className="font-semibold p-4">Contact Information</h2>
            <h3 className="font-semibold px-4 text-sm">Accounts Payable</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={"Sanket"}
                className="w-full"
              />
              <Maininputfield
                label="Designation"
                value={"CEO"}
                className="w-full"
              />
              <Maininputfield
                label="Contact Number"
                value={"045489548"}
                className="w-full"
              />

              <Maininputfield
                label="Accounts Payable Email"
                value={"sanket.salve@gmail.com"}
                className="w-full"
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">Accounts Receivable</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={"Sanket"}
                className="w-full"
              />
              <Maininputfield
                label="Designation"
                value={"CEO"}
                className="w-full"
              />
              <Maininputfield
                label="Contact Number"
                value={"045489548"}
                className="w-full"
              />

              <Maininputfield
                label="Accounts Receivable Email"
                value={"sanket.salve@gmail.com"}
                className="w-full"
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">Operations</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={"Sanket"}
                className="w-full"
              />
              <Maininputfield
                label="Designation"
                value={"CEO"}
                className="w-full"
              />
              <Maininputfield
                label="Contact Number"
                value={"045489548"}
                className="w-full"
              />

              <Maininputfield
                label="Operations Email"
                value={"sanket.salve@gmail.com"}
                className="w-full"
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">Compliance</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={"Sanket"}
                className="w-full"
              />
              <Maininputfield
                label="Designation"
                value={"CEO"}
                className="w-full"
              />
              <Maininputfield
                label="Contact Number"
                value={"045489548"}
                className="w-full"
              />

              <Maininputfield
                label="Compliance Email"
                value={"sanket.salve@gmail.com"}
                className="w-full"
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">Admin</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={"Sanket"}
                className="w-full"
              />
              <Maininputfield
                label="Designation"
                value={"CEO"}
                className="w-full"
              />
              <Maininputfield
                label="Contact Number"
                value={"045489548"}
                className="w-full"
              />

              <Maininputfield
                label="Admin Email"
                value={"sanket.salve@gmail.com"}
                className="w-full"
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">Invoice Preferences</h3>

            <div className="grid grid-cols-3 gap-4 p-4">
              <DropDownMap
                label="Invoice Preferences"
                mapOption={invoiceColletion}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">
              Invoice Communication Preferences
            </h3>

            <div className="grid grid-cols-3 gap-4 p-4">
              <DropDownMap
                label="Select Email"
                mapOption={invoiceComuColletion}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">
              Company C-Suite Details
            </h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Designation"
                value={"CEO"}
                className="w-full"
              />
              <Maininputfield
                label="Director Email Address"
                value={"sanket.salve@gmail.com"}
                className="w-full"
              />
              <Maininputfield
                label="Director Contact Number"
                value={"045489548"}
                className="w-full"
              />
            </div>
            <div className="flex justify-end py-2 px-4">
              <Button
                text="Add More Director"
                className="!w-fit bg-accent3 !px-4"
              />
            </div>
            <h2 className="font-semibold p-4"> Payment</h2>

            <h3 className="font-semibold px-4 text-sm">Bank Details</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Account Name"
                value={"Rentals Pty Ltd"}
                className="w-full"
              />
              <Maininputfield
                label="Bank Name"
                value={"St George Bank"}
                className="w-full"
              />
              <Maininputfield
                label="BSB"
                value={"113 100"}
                className="w-full"
              />
              <Maininputfield
                label="Account Number"
                value={"1234-5678-9012"}
                className="w-full"
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">Payment Terms</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <DropDownMap
                label="Term"
                mapOption={paymentTermsCollection}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
              />
            </div>
            <h2 className="font-semibold p-4">
              {" "}
              Warehouse Locations & Address
            </h2>

            <h3 className="font-semibold px-4 text-sm">Address 1</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Street 1"
                value={"Payne Street"}
                className="w-full"
              />
              <Maininputfield
                label="Street 2"
                value={"Payne Street"}
                className="w-full"
              />
              <Maininputfield
                label="Suburb"
                value={"Caulfield"}
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
                mapOption={countryCollection}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
              />
              <Maininputfield
                label="Post Code"
                value={"3161"}
                className="w-full"
              />
            </div>
            <div className="flex justify-end py-2 px-4">
              <Button
                text="Add More Addresses"
                className="!w-fit bg-accent3 !px-4"
              />
            </div>
            <h2 className="font-semibold p-4"> Contract Document</h2>

            <div className="grid grid-cols-3 gap-4 p-4">
              <FileUpload file="Choose Contract Document" />
            </div>
          </div>
          <div className="flex justify-end gap-4 my-4 px-4">
            <Button
              text="Save"
              className="!bg-transparent !w-fit border border-[#e5e5e5] !text-black px-8"
            />
            <Button text="Create" className="!w-fit px-8" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddCustomer;
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
const invoiceColletion = [
  {
    value: "Mail",
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
];
const invoiceComuColletion = [
  {
    value: "Accounts Payable Email, Operations Email",
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
];
const paymentTermsCollection = [
  {
    value: "Net 30",
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
    value: "item4",
  },
];
