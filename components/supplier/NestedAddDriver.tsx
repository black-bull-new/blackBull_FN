import React, { useState } from "react";
import Progressbar from "../Progressbar";
import Image from "next/image";
import Maininputfield from "../Maininputfield";
import DateWithoutDropdown from "../DateWithoutDropdown";
import DropDownMap from "../DropDownMap";
import FileUpload from "../FileUpload";
import Checkbox from "../Checkbox";
import Button from "../Button";

const NestedAddDriver = () => {
    const [selectedData, setSelectedData] = useState();
  return (
    <div>
      <div className="font-semibold text-xl mt-4 bg-white p-4 mr-4 rounded-md">
        <h2 className="text-black">Add Driver</h2>
      </div>
      <div className="font-semibold text-xl mt-4 bg-white p-4 mr-4 rounded-md mb-20">
        <Progressbar />
        <div className="relative w-fit mt-4">
          <Image src="/driverImage.svg" alt="driver" width={100} height={100} />
          <span className="w-6 h-6 rounded-full bg-accent3 block text-white flex justify-center items-end text-xl absolute right-2 bottom-2">
            +
          </span>
        </div>
        <h2 className="text-black font-semibold p-4 mt-6">
          Personal Information
        </h2>
        <div className="grid grid-cols-3 gap-4 p-4">
          <Maininputfield
            label="First Name"
            value={"Sanket"}
            className="w-full"
          />
          <Maininputfield
            label="Middle Name"
            value={"Raju"}
            className="w-full"
          />
          <Maininputfield
            label="Last Name"
            value={"Salve"}
            className="w-full"
          />

          <DateWithoutDropdown label="DOB" value="12/12/1984" />
          <Maininputfield
            label="Email"
            value={"sanket.r.salve@gmail.com"}
            className="w-full"
          />
          <Maininputfield
            label="Mobile"
            value={"+91 9584586482"}
            className="w-full"
          />
          <Maininputfield
            label="Nationality"
            value={"Indian"}
            className="w-full"
          />
        </div>
        <h2 className="text-black font-semibold p-4 mt-6">
          Address Information
        </h2>
        <h3 className="text-black font-semibold text-sm pl-4">
          Current Address
        </h3>
        <div className="grid grid-cols-3 gap-4 p-4">
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
          <Maininputfield label="Post Code" value={"3161"} className="w-full" />
        </div>
        <Checkbox
          className="!pl-4"
          content="Same as above"
          color="text-blueGrey-900"
        />
        <h3 className="text-black font-semibold text-sm pl-4">
          Permanent Address
        </h3>
        <div className="grid grid-cols-3 gap-4 p-4">
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
          <Maininputfield label="Post Code" value={"3145"} className="w-full" />
        </div>
        <h2 className="text-black font-semibold p-4 mt-6">
          Emergency Contact Information
        </h2>
        <div className="grid grid-cols-3 gap-4 p-4">
          <Maininputfield
            label="Contact Name"
            value={"Jaxon Cashin"}
            className="w-full"
          />
          <Maininputfield
            label="Contact Numbere"
            value={"0491 570 156"}
            className="w-full"
          />
          <Maininputfield
            label="Relationship"
            value={"Brother"}
            className="w-full"
          />
        </div>
        <h2 className="text-black font-semibold p-4 mt-6">
          Employment History
        </h2>
        <h3 className="text-black font-semibold text-sm pl-4 text-blueGrey-900">
          Experience
        </h3>
        <div className="grid grid-cols-3 gap-4 p-4">
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
        <h3 className="text-black font-semibold text-sm pl-4 text-blueGrey-900">
          Reference Information
        </h3>
        <div className="grid grid-cols-3 gap-4 p-4">
          <Maininputfield
            label="Company Name"
            value={"Jasper Dyson Pvt. Ltd."}
            className="w-full"
          />
          <Maininputfield
            label="Reference (Contact Name)"
            value={"Jasper Dyson"}
            className="w-full"
          />
          <Maininputfield
            label="Reference (Email ID)"
            value={"jasper.dyson@outlook.com"}
            className="w-full"
          />
          <Maininputfield
            label="Reference (Contact Number)"
            value={"0749519434"}
            className="w-full"
          />
        </div>
        <div className="flex justify-end py-2 px-4">
          <Button
            text="Add More Experiences"
            className="!w-fit bg-accent3 !px-4"
          />
        </div>
        <h2 className="text-black font-semibold p-4 mt-6">License Details</h2>
        <div className="grid grid-cols-3 gap-4 p-4">
          <Maininputfield
            label="Licence Numbere"
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
            selectedData={selectedData}
            setSelectedData={selectedData}
            mapOption={licenceTypes}
          />
          <DropDownMap
            label="State of Issue"
            selectedData={stateCollection}
            setSelectedData={selectedData}
            mapOption={licenceTypes}
          />
          <DateWithoutDropdown label="Date Of Issue" value="12/12/2020" />
          <DateWithoutDropdown label="Expiry Date" value="12/10/2025" />
          <Maininputfield
            label="Days left for renewal"
            value={"50"}
            className="w-full"
          />
          <FileUpload file="Choose License Document " />
        </div>
        <h2 className="text-black font-semibold p-4 mt-4">
          Employment History
        </h2>
        <div className="grid grid-cols-3 gap-4 p-4">
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
        <h2 className="text-black font-semibold p-4 mt-4">
          Special Driving Licence
        </h2>
        <div className="grid grid-cols-3 gap-4 p-4">
          <DropDownMap
            label="Special Driving Licence"
            selectedData={selectedData}
            setSelectedData={setSelectedData}
            mapOption={drivingLicenceCollection}
          />
        </div>
        <div className="mb-4 mt-8">
          <h3 className="text-black w-full mb-6 rounded-md font-semibold pl-4">
            {" "}
            Onboarding Documents
          </h3>

          <div className="text-black grid grid-cols-5 bg-table-header p-4 rounded-md text-center mb-2">
            {documentCollectionHeadingDriver?.map((value, index) => {
              return (
                <>
                  <h4 key={index} className="font-semibold text-sm">
                    {value.heading}
                  </h4>
                </>
              );
            })}
          </div>
          <div className="text-black grid grid-cols-5 p-4 rounded-md text-center font-normal text-[16px] items-center">
            {documentCollectionDataDriver.map((value, index) => {
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
                      className="cursor-pointer"
                    />
                    <Image
                      src={"/trash.svg"}
                      alt="svg"
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedAddDriver;

const documentCollectionDataDriver = [
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


const documentCollectionHeadingDriver = [
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
