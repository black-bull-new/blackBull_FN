import { useState } from "react";
import DropDownMap from "../../../../components/DropDownMap";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Maindatefield from "../../../../components/Maindatefield";
import Maininputfield from "../../../../components/Maininputfield";
import Progressbar from "../../../../components/Progressbar";
import Sidebar from "../../../../components/Sidebar";
import Image from "next/image";
import Checkbox from "../../../../components/Checkbox";
import Button from "../../../../components/Button";
import DateWithoutDropdown from "../../../../components/DateWithoutDropdown";
import FileUpload from "../../../../components/FileUpload";
import ImageUpload from "../../../../components/imageUpload/ImageUpload";
import CustomFileInput from "../../../../components/imageUpload/ImageUpload";

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
              <h4 className="text-sm font-semibold mb-4 text-blueGrey-900">
                Current Address
              </h4>
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
                  mapOption={countryCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
                <Maininputfield
                  label="Post Code"
                  value="3161"
                  className="w-full"
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
            <Checkbox content="Same as above" />

            <div className="mb-4 mt-8">
              <h4 className="text-sm font-semibold mb-4 text-blueGrey-900">
                {" "}
                Permanent Address
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="House Number"
                  value={"10/15"}
                  className="w-full"
                />
                <Maininputfield
                  label="Street"
                  value={"57 Waverley Rd"}
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
                  mapOption={countryCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
                <Maininputfield
                  label="Post Code"
                  value="3145"
                  className="w-full"
                />
              </div>
            </div>
            <div className="mb-4 mt-8">
              <h3 className="w-full mb-4 rounded-md font-semibold">
                {" "}
                Emergency Contact Information
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Contact Name"
                  value={"Jaxon Cashin"}
                  className="w-full"
                />
                <Maininputfield
                  label="Contact Number"
                  value={"0491 570 156"}
                  className="w-full"
                />
                <Maininputfield
                  label="Relationship"
                  value="Brother"
                  className="w-full"
                />
              </div>
            </div>
            <div className="mb-4 mt-8">
              <h3 className="w-full mb-4 rounded-md font-semibold">
                {" "}
                Employment History
              </h3>
              <h4 className="text-sm font-semibold mb-4 text-blueGrey-900">
                Experience
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Pervious Employer"
                  value={"Dominic Jensen"}
                  className="w-full"
                />
                <Maininputfield
                  label="Years Of Experience"
                  value={"2.5yrs"}
                  className="w-full"
                />
                <Maininputfield
                  label="Reason for leaving"
                  value="NA"
                  className="w-full"
                />
              </div>
              <div className="mb-4 mt-8">
                <h4 className="text-sm font-semibold mb-4 text-blueGrey-900">
                  Reference Information
                </h4>

                <div className="grid grid-cols-3 gap-4">
                  <Maininputfield
                    label="Company Name"
                    value="Jasper Dyson Pvt. Ltd."
                    className="w-full"
                  />
                  <Maininputfield
                    label="Reference (Contact Name)"
                    value="Jasper Dyson"
                    className="w-full"
                  />
                  <Maininputfield
                    label="Reference (Email ID)"
                    value="jasper.dyson@outlook.com"
                    className="w-full"
                  />
                  <Maininputfield
                    label="Reference (Contact Number)"
                    value="0749519434"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="mb-8 mt-8 flex justify-end">
              <Button
                text="Add More Experiences"
                className="bg-accent3 px-4 !w-fit"
              />
            </div>
            <div className="mb-4 mt-8">
              <h3 className="w-full mb-4 rounded-md font-semibold">
                {" "}
                License Details
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Licence Number"
                  value={"504984"}
                  className="w-full"
                />
                <Maininputfield
                  label="Licence Card Number"
                  value={"A07G5N47"}
                  className="w-full"
                />
                <DropDownMap
                  label="Licence Type"
                  mapOption={licenceTypes}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
                <DropDownMap
                  label="State of Issue"
                  mapOption={stateCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
                <DateWithoutDropdown
                  label="Date Of Issue "
                  value="12/12/2020"
                />
                <DateWithoutDropdown label="Expiry Date " value="12/10/2025" />
                <Maininputfield
                  label="Days left for renewal"
                  value={"50"}
                  className="w-full"
                />
                <FileUpload file="Choose License Document " />
              </div>
            </div>
            <div className="mb-4 mt-8">
              <h3 className="w-full mb-4 rounded-md font-semibold">
                {" "}
                Employment History
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Pervious Employer"
                  value={"Dominic Jensen"}
                  className="w-full"
                />
                <Maininputfield
                  label="Years Of Experience"
                  value={"2.5yrs"}
                  className="w-full"
                />

                <Maininputfield
                  label="Reason for leaving"
                  value={"NA"}
                  className="w-full"
                />
              </div>
            </div>
            <div className="mb-4 mt-8">
              <h3 className="w-full mb-4 rounded-md font-semibold">
                {" "}
                Special Driving Licence
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <DropDownMap
                  label="Special Driving Licence"
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                  mapOption={drivingLicenceCollection}
                />
              </div>
            </div>
          </div>
          <div className="bg-white mr-4 px-4 rounded-md mt-4 p-4">
            <div className="mb-4 mt-8">
              <h3 className="w-full mb-4 rounded-md font-semibold">
                {" "}
                Onboarding Documents
              </h3>

              <div className="grid grid-cols-5 bg-table-header p-4 rounded-md text-center mb-2">
                {documentCollectionHeading?.map((value, index) => {
                  return (
                    <>
                      <h4 key={index} className="font-semibold">
                        {value.heading}
                      </h4>
                    </>
                  );
                })}
              </div>
              <div className="grid grid-cols-5 p-4 rounded-md text-center items-center">
                {documentCollectionData.map((value, index) => {
                  return (
                    <>
                      <div className="mb-6">{value.documentType}</div>
                      <div className="text-center ">
                        <Button
                          text="Upload"
                          className="!w-fit m-auto bg-accent3 px-6 rounded-md mb-6 py-[4px]"
                        />
                      </div>
                      <div className="mb-6">{value.uploadedDocument}</div>
                      <div className="mb-6">{value.uploadDate}</div>
                      <div className="mb-6 flex gap-2 justify-center">
                        <Image
                          src={"/edit.svg"}
                          alt="svg"
                          width={24}
                          height={24}
                        />
                        <Image
                          src={"/trash.svg"}
                          alt="svg"
                          width={24}
                          height={24}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          {/* <div className="w-full flex flex-col gap-4 items-end justify-end p-4 mb-4">
            <div className="w-[343px] h-[180px] bg-white border border-[#CED7DB] rounded-md"></div>
            <Button
              signatureIcon={true}
              text="Upload Signature"
              className="bg-accent3 px-4 rounded-[8px]"
            />
            <div className="flex gap-2">
              <Button
              
                text="Save"
                className="!bg-transparent !text-black px-4 border border-[#e5e5e5] rounded-[8px]"
              />
              <Button text="Create" className="bg-primary px-4 rounded-[8px]" />
            </div>
          </div> */}
          <div>
            <ImageUpload />
          </div>
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
const licenceTypes = [
  {
    value: "HR (Heavy Rigid Licence)",
  },
  {
    value: "item1",
  },
  {
    value: "item2",
  },
];
const drivingLicenceCollection = [
  {
    value: "Dangerous Goods",
  },

  {
    value: "item1",
  },
  {
    value: "item2",
  },
];
const documentCollectionHeading = [
  {
    heading: "Document type",
  },
  {
    heading: "Attach files",
  },
  {
    heading: "Uploaded Documents",
  },
  {
    heading: "Date of upload",
  },
];
const documentCollectionData = [
  {
    documentType: "Visa Status",
    uploadedDocument: "visa-status.pdf",
    uploadDate: "20/12/2023",
  },
  {
    documentType: "Driver License (Front) ",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Driver License (Back) ",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "License History",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Police Verification",
    uploadedDocument: "police-verification.pdf",
    uploadDate: "20/12/2023",
  },
  {
    documentType: "Passport (Front)",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Passport (Back)",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Health Insurance",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Driver Certificate",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Fitness",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Drug Test",
    uploadedDocument: "-",
    uploadDate: "-",
  },
];
