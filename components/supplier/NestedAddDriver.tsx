import React, { useState } from "react";
import Progressbar from "../Progressbar";
import Image from "next/image";
import Maininputfield from "../Maininputfield";
import DateWithoutDropdown from "../DateWithoutDropdown";
import DropDownMap from "../DropDownMap";
import FileUpload from "../FileUpload";
import Checkbox from "../Checkbox";
import Button from "../Button";

const NestedAddDriver = (props: any) => {
  const [selectedData, setSelectedData] = useState();
  const { addDriver, setAddDriver, error, setError } = props;
  console.log("AddDriver state", addDriver);
  console.log("Error State", error);

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
            value={addDriver?.firstName}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                firstName: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({ ...error, firstNameError: "" });
              }
            }}
            errorMessage={error.firstNameError}
          />
          <Maininputfield
            label="Middle Name"
            value={addDriver?.middleName}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                middleName: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({ ...error, middleNameError: "" });
              }
            }}
            errorMessage={error.middleNameError}
          />
          <Maininputfield
            label="Last Name"
            value={addDriver?.lastName}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                lastName: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({ ...error, lastNameError: "" });
              }
            }}
            errorMessage={error.lastNameError}
          />

          <DateWithoutDropdown
            label="DOB"
            value={addDriver?.dateOfBirth}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                dateOfBirth: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({ ...error, dateOfBirthError: "" });
              }
            }}
            errorMessage={error.dateOfBirthError}
          />
          <Maininputfield
            label="Email"
            value={addDriver?.email}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                email: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({ ...error, emailError: "" });
              }
            }}
            errorMessage={error.emailError}
          />
          <Maininputfield
            label="Mobile"
            value={addDriver?.mobile}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                mobile: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({ ...error, mobileError: "" });
              }
            }}
            errorMessage={error.mobileError}
          />
          <Maininputfield
            label="Nationality"
            value={addDriver?.nationality}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                nationality: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({ ...error, nationalityError: "" });
              }
            }}
            errorMessage={error.nationalityError}
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
            value={addDriver?.currentAddress?.houseNumber}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                currentAddress: {
                  ...addDriver.currentAddress,
                  houseNumber: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  currentAddressError: {
                    ...error.currentAddressError,
                    houseNumber: "",
                  },
                });
              }
            }}
            errorMessage={error.currentAddressError?.houseNumber}
          />
          <Maininputfield
            label="Street"
            value={addDriver?.currentAddress?.street}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                currentAddress: {
                  ...addDriver.currentAddress,
                  street: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  currentAddressError: {
                    ...error.currentAddressError,
                    street: "",
                  },
                });
              }
            }}
            errorMessage={error.currentAddressError?.street}
          />
          <Maininputfield
            label="Suburb"
            value={addDriver?.currentAddress?.suburb}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                currentAddress: {
                  ...addDriver.currentAddress,
                  suburb: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  currentAddressError: {
                    ...error.currentAddressError,
                    suburb: "",
                  },
                });
              }
            }}
            errorMessage={error.currentAddressError?.suburb}
          />

          <DropDownMap
            label="State"
            mapOption={stateCollection}
            selectedData={selectedData}
            setSelectedData={setSelectedData}
            value={addDriver?.currentAddress?.state}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                currentAddress: {
                  ...addDriver.currentAddress,
                  state: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  currentAddressError: {
                    ...error.currentAddressError,
                    state: "",
                  },
                });
              }
            }}
            errorMessage={error.currentAddressError?.state}
          />
          <DropDownMap
            label="Country"
            mapOption={countryCollection}
            selectedData={selectedData}
            setSelectedData={setSelectedData}
            value={addDriver?.currentAddress?.country}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                currentAddress: {
                  ...addDriver.currentAddress,
                  country: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  currentAddressError: {
                    ...error.currentAddressError,
                    country: "",
                  },
                });
              }
            }}
            errorMessage={error.currentAddressError?.country}
          />
          <Maininputfield
            label="Post Code"
            value={addDriver?.currentAddress?.pincode}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                currentAddress: {
                  ...addDriver.currentAddress,
                  pincode: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  currentAddressError: {
                    ...error.currentAddressError,
                    pincode: "",
                  },
                });
              }
            }}
            className="w-full"
            errorMessage={error.currentAddressError?.pincode}
          />
        </div>
        {/* <Checkbox
          className="!pl-4"
          content="Same as above"
          color="text-blueGrey-900"
        /> */}
        <h3 className="text-black font-semibold text-sm pl-4">
          Permanent Address
        </h3>
        <div className="grid grid-cols-3 gap-4 p-4">
          <Maininputfield
            label="House Number"
            value={addDriver?.permanentAddress?.houseNumber}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                permanentAddress: {
                  ...addDriver.permanentAddress,
                  houseNumber: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  permanentAddressError: {
                    ...error.permanentAddressError,
                    houseNumber: "",
                  },
                });
              }
            }}
            errorMessage={error.permanentAddressError?.houseNumber}
          />
          <Maininputfield
            label="Street"
            className="w-full"
            value={addDriver?.permanentAddress?.street}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                permanentAddress: {
                  ...addDriver.permanentAddress,
                  street: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  permanentAddressError: {
                    ...error.permanentAddressError,
                    street: "",
                  },
                });
              }
            }}
            errorMessage={error.permanentAddressError?.street}
          />
          <Maininputfield
            label="Suburb"
            className="w-full"
            value={addDriver?.permanentAddress?.suburb}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                permanentAddress: {
                  ...addDriver.permanentAddress,
                  suburb: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  permanentAddressError: {
                    ...error.permanentAddressError,
                    suburb: "",
                  },
                });
              }
            }}
            errorMessage={error.permanentAddressError?.suburb}
          />

          <DropDownMap
            label="State"
            mapOption={stateCollection}
            selectedData={selectedData}
            setSelectedData={setSelectedData}
            value={addDriver?.permanentAddress?.state}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                permanentAddress: {
                  ...addDriver.permanentAddress,
                  state: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  permanentAddressError: {
                    ...error.permanentAddressError,
                    state: "",
                  },
                });
              }
            }}
            errorMessage={error.permanentAddressError?.state}
          />
          <DropDownMap
            label="Country"
            mapOption={countryCollection}
            selectedData={selectedData}
            setSelectedData={setSelectedData}
            value={addDriver?.permanentAddress?.country}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                permanentAddress: {
                  ...addDriver.permanentAddress,
                  country: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  permanentAddressError: {
                    ...error.permanentAddressError,
                    country: "",
                  },
                });
              }
            }}
            errorMessage={error.permanentAddressError?.country}
          />
          <Maininputfield
            label="Post Code"
            value={addDriver?.permanentAddress?.pincode}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                permanentAddress: {
                  ...addDriver.permanentAddress,
                  pincode: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  permanentAddressError: {
                    ...error.permanentAddressError,
                    pincode: "",
                  },
                });
              }
            }}
            className="w-full"
            errorMessage={error.permanentAddressError?.pincode}
          />
        </div>
        <h2 className="text-black font-semibold p-4 mt-6">
          Emergency Contact Information
        </h2>
        <div className="grid grid-cols-3 gap-4 p-4">
          <Maininputfield
            label="Contact Name"
            value={addDriver?.emergencyContactInformation?.contactName}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                emergencyContactInformation: {
                  ...addDriver.emergencyContactInformation,
                  contactName: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  emergencyContactInformationError: {
                    ...error.permanentAddressError,
                    contactName: "",
                  },
                });
              }
            }}
            errorMessage={error.emergencyContactInformationError?.contactName}
          />
          <Maininputfield
            label="Contact Numbere"
            value={addDriver?.emergencyContactInformation?.contactNumber}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                emergencyContactInformation: {
                  ...addDriver.emergencyContactInformation,
                  contactNumber: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  emergencyContactInformationError: {
                    ...error.emergencyContactInformationError,
                    contactNumber: "",
                  },
                });
              }
            }}
            errorMessage={error.emergencyContactInformationError?.contactNumber}
          />
          <Maininputfield
            label="Relationship"
            value={addDriver?.emergencyContactInformation?.relationship}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                emergencyContactInformation: {
                  ...addDriver.emergencyContactInformation,
                  relationship: e.target.value,
                },
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  emergencyContactInformationError: {
                    ...error.emergencyContactInformationError,
                    relationship: "",
                  },
                });
              }
            }}
            errorMessage={error.emergencyContactInformationError?.relationship}
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
            value={addDriver?.employmentHistory?.previousEmployer}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                employmentHistory: {
                  ...addDriver.employmentHistory,
                  previousEmployer: e.target.value,
                },
              });
            }}
          />
          <Maininputfield
            label="Years Of Experience"
            value={addDriver?.employmentHistory?.yearsOfExperience}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                employmentHistory: {
                  ...addDriver.employmentHistory,
                  yearsOfExperience: e.target.value,
                },
              });
            }}
          />
          <Maininputfield
            label="Reason for leaving"
            value={addDriver?.employmentHistory?.reasonOfLeaving}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                employmentHistory: {
                  ...addDriver.employmentHistory,
                  reasonOfLeaving: e.target.value,
                },
              });
            }}
          />
        </div>
        <h3 className="text-black font-semibold text-sm pl-4 text-blueGrey-900">
          Reference Information
        </h3>
        <div className="grid grid-cols-3 gap-4 p-4">
          <Maininputfield
            label="Company Name"
            className="w-full"
            value={addDriver?.employmentHistory?.companyName}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                employmentHistory: {
                  ...addDriver.employmentHistory,
                  companyName: e.target.value,
                },
              });
            }}
          />
          <Maininputfield
            label="Reference (Contact Name)"
            value={addDriver?.employmentHistory?.referenceContactName}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                employmentHistory: {
                  ...addDriver.employmentHistory,
                  referenceContactName: e.target.value,
                },
              });
            }}
          />
          <Maininputfield
            label="Reference (Email ID)"
            value={addDriver?.employmentHistory?.referenceEmailId}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                employmentHistory: {
                  ...addDriver.employmentHistory,
                  referenceEmailId: e.target.value,
                },
              });
            }}
          />
          <Maininputfield
            label="Reference (Contact Number)"
            value={addDriver?.employmentHistory?.referenceContactNumber}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                employmentHistory: {
                  ...addDriver.employmentHistory,
                  referenceContactNumber: e.target.value,
                },
              });
            }}
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
            className="w-full"
            value={addDriver?.licenseDetails?.licenseNumber}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                licenseDetails: {
                  ...addDriver.licenseDetails,
                  licenseNumber: e.target.value,
                },
              });
            }}
          />
          <Maininputfield
            label="Licence Card Number"
            className="w-full"
            value={addDriver?.licenseDetails?.licenseCardNumber}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                licenseDetails: {
                  ...addDriver.licenseDetails,
                  licenseCardNumber: e.target.value,
                },
              });
            }}
          />
          <DropDownMap
            label="Licence Type"
            selectedData={addDriver}
            setSelectedData={setSelectedData}
            mapOption={licenceTypes}
            value={addDriver?.licenseDetails?.licenseType}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                licenseDetails: {
                  ...addDriver.licenseDetails,
                  licenseType: e.target.value,
                },
              });
            }}
          />
          <DropDownMap
            label="State of Issue"
            selectedData={stateCollection}
            setSelectedData={setSelectedData}
            mapOption={licenceTypes}
            value={addDriver?.licenseDetails?.state}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                licenseDetails: {
                  ...addDriver.licenseDetails,
                  state: e.target.value,
                },
              });
            }}
          />
          <DateWithoutDropdown
            label="Date Of Issue"
            value={addDriver?.licenseDetails?.dateOfIssue}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                licenseDetails: {
                  ...addDriver.licenseDetails,
                  dateOfIssue: e.target.value,
                },
              });
            }}
          />
          <DateWithoutDropdown
            label="Expiry Date"
            value={addDriver?.licenseDetails?.expiryDate}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                licenseDetails: {
                  ...addDriver.licenseDetails,
                  expiryDate: e.target.value,
                },
              });
            }}
          />
          <Maininputfield
            label="Days left for renewal"
            value={addDriver?.licenseDetails?.daysLeftForRenewal}
            className="w-full"
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                licenseDetails: {
                  ...addDriver.licenseDetails,
                  daysLeftForRenewal: e.target.value,
                },
              });
            }}
          />
          <FileUpload file="Choose License Document " />
        </div>
        {/* <h2 className="text-black font-semibold p-4 mt-4">
          Employment History
        </h2> */}
        {/* <div className="grid grid-cols-3 gap-4 p-4">
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
        </div> */}
        <h2 className="text-black font-semibold p-4 mt-4">
          Special Driving Licence
        </h2>
        <div className="grid grid-cols-3 gap-4 p-4">
          <DropDownMap
            label="Special Driving Licence"
            selectedData={addDriver}
            setSelectedData={setAddDriver}
            mapOption={drivingLicenceCollection}
            value={addDriver?.specialDrivingLicense}
            onChange={(e: any) => {
              setAddDriver({
                ...addDriver,
                specialDrivingLicense: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  specialDrivingLicenseError: "",
                });
              }
            }}
            errorMessage={error.specialDrivingLicenseError}
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
