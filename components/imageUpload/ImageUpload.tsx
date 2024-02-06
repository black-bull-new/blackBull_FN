// components/ImageUpload.js

import Image from "next/image";
import { useState } from "react";
import Button from "../Button";
import React from "react";
import { addDriver } from "@/network-request/driver-api";
import DriverDetails from "../DriverDetails";

const dummyPayload: any = {
  firstName: "John",
  middleName: "Doe",
  lastName: "Smith",
  dateOfBirth: "1990-05-15",
  avatar: "avatar.jpg",
  email: "john1.doe@example.com",
  mobile: "98991887722",
  currentAddress: {
    houseNumber: 123,
    street: "Main Street",
    suburb: "Downtown",
    state: "California",
    country: "USA",
    pincode: "12345",
  },
  permanentAddress: {
    houseNumber: 456,
    street: "Oak Avenue",
    suburb: "Suburbia",
    state: "California",
    country: "USA",
    pincode: "67890",
  },
  emergencyContactInformation: {
    contactName: "Jane Doe",
    contactNumber: "9876543210",
    relationship: "Spouse",
  },
  employmentHistory: [
    {
      previousEmployer: "ABC Corp",
      yearsOfExperience: "5",
      reasonOfLeaving: "Career growth",
      companyName: "XYZ Inc",
      referenceContactName: "Manager Smith",
      referenceEmailId: "manager@xyz.com",
      referenceContactNumber: "9876543210",
    },
  ],
  licenseDetails: {
    licenseNumber: "1L123456789",
    licenseCardNumber: "1LC987654321",
    licenseType: "Class D",
    state: "California",
    dateOfIssue: "2015-01-01",
    expiryDate: "2025-01-01",
    daysLeftForRenewal: "365",
    documents: [],
  },
  specialDrivingLicense: "Special License XYZ",
  visaStatus: {
    type: "Work",
    uploadDate: "2023-01-15",
  },
  driverLicenseFront: {
    type: "Front",
    uploadDate: "2023-02-01",
  },
  driverLicenseBack: {
    type: "Back",
    uploadDate: "2023-02-05",
  },
  licenseHistory: {
    type: "History",
    uploadDate: "2023-03-01",
  },
  policeVerification: {
    type: "Verification",
    uploadDate: "2023-03-15",
  },
  passportFront: {
    type: "Front",
    uploadDate: "2023-04-01",
  },
  passportBack: {
    type: "Back",
    uploadDate: "2023-04-05",
  },
  healthInsurance: {
    type: "Insurance",
    uploadDate: "2023-05-01",
  },
  driverCertificate: {
    type: "Certificate",
    uploadDate: "2023-05-15",
  },
  fitness: {
    type: "Fitness",
    uploadDate: "2023-06-01",
  },
  drugTest: {
    type: "Drug Test",
    uploadDate: "2023-06-15",
  },
};

const ImageUpload = () => {
  const [image, setImage] = useState("");

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const onAddDriver = React.useCallback(async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYTA1YTAzMjdmNzY2NmVlNjQ0YzU2IiwiZmlyc3ROYW1lIjoiQWJpZCIsImxhc3ROYW1lIjoiSHVzYWluIiwicm9sZSI6IkFkbWluIiwiZW1haWwiOiJhYmlkLmh1c2FpbkBnbWFpbC5jb20iLCJleHBpcmVzSW4iOiI2MDQ4MDAwMDAifSwiaWF0IjoxNzA2OTY3NjgyLCJleHAiOjE3MDc1NzI0ODJ9.MNuFCYP9TW5b2hi_Zo5vUfWV0Ga94Z9Y16D0Hy-BLyc";
    try {
      const response = await addDriver(dummyPayload, token);
      console.log("onAddDriver", { response });
    } catch (error: any) {
      console.log({ error });
    }
  }, []);

  return (
    <div className="grid gap-4 justify-end mt-4">
      <div>
        <div className="bg-white border border-[#e5e5e5] rounded-md w-[343px] h-[180px]">
          {image && (
            <Image
              src={image}
              alt="Preview"
              width={200}
              height={200}
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </div>
      </div>
      <div className="relative">
        <label
          htmlFor="file-upload"
          className="flex gap-2 bg-accent3 w-fit text-white items-center py-2 px-4 rounded-md absolute right-0"
        >
          <Image src={"/signature.svg"} alt="signature" width={25} height={8} />
          <span>Upload Signature</span>
        </label>
        <input
          type="file"
          style={{
            visibility: "hidden",
          }}
          id="file-upload"
          onChange={handleImageChange}
        />
        <div className="flex justify-end my-6 gap-2">
          <Button
            text="Save"
            className="!bg-transparent !text-black border border-[#e5e5e5] !px-8"
          />
          <Button
            onClick={onAddDriver}
            text="Create"
            className="!px-8 bg-[#2B36D9]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
