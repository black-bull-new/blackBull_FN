import React, { useState } from "react";
import Progressbar from "../Progressbar";
import Maininputfield from "../Maininputfield";
import DateWithoutDropdown from "../DateWithoutDropdown";
import Maindatefield from "../Maindatefield";
import FileUpload from "../FileUpload";
import DropDownMap from "../DropDownMap";
import StatusChip from "../StatusChip";

export const NestedAddVehicle = (props: any) => {
  const { addVehicle, setAddVehicle, error, setError } = props;
  console.log("AddVehicle", addVehicle);

  return (
    <div>
      <div>
        <h3 className="text-black font-semibold p-4 bg-white mr-4 mt-4 rounded-md">
          Add Vehicle
        </h3>
      </div>
      <div className="p-4 bg-white mr-4 mt-4 rounded-md">
        <Progressbar />

        <h4 className="text-black font-semibold text-sm my-4">
          Vehicle Information
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <Maininputfield
            label="Registration Number"
            value={addVehicle.registrationNumber}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                registrationNumber: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  registrationNumberError: "",
                });
              }
            }}
            errorMessage={error.registrationNumberError}
          />
          <DateWithoutDropdown
            label="Registration Expiry"
            value={addVehicle.registrationExpiry}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                registrationExpiry: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  registrationExpiryError: "",
                });
              }
            }}
            errorMessage={error.registrationExpiryError}
          />
          <Maininputfield
            label="VIN No."
            value={addVehicle.vinNumber}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                vinNumber: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  vinNumberError: "",
                });
              }
            }}
            errorMessage={error.vinNumberError}
          />
          <Maininputfield
            label="Vehicle Manufacturer"
            value={addVehicle.vehicleManufacturer}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                vehicleManufacturer: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  vehicleManufacturerError: "",
                });
              }
            }}
            errorMessage={error.vehicleManufacturerError}
          />
          <Maininputfield
            label="Vehicle Model"
            value={addVehicle.vehicleModel}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                vehicleModel: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  vehicleModelError: "",
                });
              }
            }}
            errorMessage={error.vehicleModelError}
          />
          <Maindatefield
            label="Vehicle Type"
            value={addVehicle.vehicleType}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                vehicleType: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  vehicleTypeError: "",
                });
              }
            }}
            errorMessage={error.vehicleTypeError}
          />
          <Maindatefield
            label="Type of Trailer"
            value={addVehicle.typeOfTrailer}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                typeOfTrailer: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  typeOfTrailerError: "",
                });
              }
            }}
            errorMessage={error.typeOfTrailerError}
          />
          <Maindatefield
            label="State of Registration"
            value={addVehicle.stateOfRegistration}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                stateOfRegistration: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  stateOfRegistrationError: "",
                });
              }
            }}
            errorMessage={error.stateOfRegistrationError}
          />
          <Maininputfield
            label="Engine Number"
            value={addVehicle.engineNumber}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                engineNumber: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  engineNumberError: "",
                });
              }
            }}
            errorMessage={error.engineNumberError}
          />
          <Maininputfield
            label="Compliance Plate"
            value={addVehicle.compliancePlate}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                compliancePlate: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  compliancePlateError: "",
                });
              }
            }}
            errorMessage={error.compliancePlateError}
          />
          <Maindatefield
            label="Registration Status"
            value={addVehicle.registrationStatus}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                registrationStatus: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  registrationStatusError: "",
                });
              }
            }}
            errorMessage={error.registrationStatusError}
          />
        </div>
        <div className="mt-4 w-fit">
          <FileUpload
            file="Choose Rego Document"
            value={addVehicle.document}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                document: e.target.value,
              });
            }}
          />
        </div>
        <h4 className="text-black font-semibold text-sm my-4">
          Vehicle Insurance
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <Maininputfield
            label="Insurance Company"
            value={addVehicle.insuranceCompanyName}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                insuranceCompanyName: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  insuranceCompanyNameError: "",
                });
              }
            }}
            errorMessage={error.insuranceCompanyNameError}
          />
          <Maininputfield
            label="Policy Number"
            value={addVehicle.policyNumber}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                policyNumber: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  policyNumberError: "",
                });
              }
            }}
            errorMessage={error.policyNumberError}
          />
          <DateWithoutDropdown
            label="Vehicle Insurance Start Date"
            value={addVehicle.vehicleInsuranceStartDate}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                vehicleInsuranceStartDate: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  vehicleInsuranceStartDateError: "",
                });
              }
            }}
            errorMessage={error.vehicleInsuranceStartDateError}
          />
          <DateWithoutDropdown
            label="Renewal Date"
            value={addVehicle.renewalDate}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                renewalDate: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  renewalDateError: "",
                });
              }
            }}
            errorMessage={error.renewalDateError}
          />
          <DateWithoutDropdown
            label="Date Valid Until"
            value={addVehicle.dateValidUntil}
            className="w-full"
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                dateValidUntil: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  dateValidUntilError: "",
                });
              }
            }}
            errorMessage={error.dateValidUntilError}
          />

          <Maininputfield
            label="Days Left"
            value={addVehicle.daysLeft === undefined ? "" : addVehicle.daysLeft}
            className="w-full"
            onChange={(e: any) => {
              // regex for only accept integer values
              const regex = /^-?\d*$/; // Allow an empty string or any integer
              if (!regex.test(e.target.value)) {
                setError({
                  ...error,
                  daysLeftError: "Please enter only numbers",
                });
              } else {
                setAddVehicle((prevVehicle: any) => {
                  const newDaysLeft =
                    e.target.value === "" ? undefined : Number(e.target.value);
                  return { ...prevVehicle, daysLeft: newDaysLeft };
                });
                if (e.target.value.length > 0) {
                  setError({ ...error, daysLeftError: "" });
                }
              }
            }}
            errorMessage={error.daysLeftError}
          />

          <DropDownMap
            label="Insurance Coverage"
            mapOption={insuranceCoverageCollection}
            value={addVehicle.insuranceCoverage}
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                insuranceCoverage: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  insuranceCoverageError: "",
                });
              }
            }}
            errorMessage={error.insuranceCoverageError}
          />
          <DropDownMap
            label="Insurance Status"
            mapOption={activeInactive}
            value={addVehicle.insuranceStatus}
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                insuranceStatus: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  insuranceStatusError: "",
                });
              }
            }}
            errorMessage={error.insuranceStatusError}
          />
          <DropDownMap
            label="Situation"
            mapOption={situationCollection}
            value={addVehicle.situation}
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                situation: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  situationError: "",
                });
              }
            }}
            errorMessage={error.situationError}
          />
        </div>
        <h4 className="text-black font-semibold text-sm my-4">
          Truck Odometer
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <Maininputfield
            label="Truck Odometer"
            value={addVehicle.truckOdometer}
            onChange={(e: any) => {
              setAddVehicle({
                ...addVehicle,
                truckOdometer: e.target.value,
              });
              if (e.target.value.length > 0) {
                setError({
                  ...error,
                  truckOdometerError: "",
                });
              }
            }}
            className="w-full"
            errorMessage={error.truckOdometerError}
          />
        </div>
        <h3 className="text-black w-full mb-4 font-semibold mt-8">
          Vehicle Documents
        </h3>
        <div className="text-black grid grid-cols-[16%_16%_16%_16%_16%_20%] bg-[#EFF2F3] py-4 rounded-md flex text-center">
          {vehicleDocumentCollection?.map((value, index) => {
            return (
              <>
                <div
                  className="font-semibold text-sm text-[#151515]"
                  key={index}
                >
                  {value.heading}
                </div>
              </>
            );
          })}
        </div>

        {documentDataCollection?.map((data, ind) => {
          return (
            <>
              <div
                className="text-black grid grid-cols-[16%_16%_16%_16%_16%_20%] py-4 flex text-center"
                key={ind}
              >
                <div>{data.Vehicle}</div>
                <div>{data.rego}</div>
                <div>{data.uploadDate}</div>
                <div>{data.UploadedDoc}</div>
                <div className="text-center items-center justify-center m-auto">
                  {/* <span
                            className={` ${
                              data.status === "Approved"
                                ? "bg-[#2DD36F]"
                                : data.status === "Under Review"
                                ? "bg-[#3DC2FF]"
                                : data.status === "Rejected"
                                ? "bg-[#EB445A]"
                                : ""
                            } px-4 pt-[3px] pb-[7px] text-white rounded-full`}
                          >
                            {data.status}
                          </span> */}
                  <StatusChip className="w-fit" />
                </div>
                <div className="underline decoration-[#2B36D9] text-center">
                  <span className="cursor-pointer text-primary">
                    {" "}
                    {data.viewDoc}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

const documentDataCollection = [
  {
    Vehicle: "Placeholder",
    rego: "Placeholder",
    uploadDate: "19/12/2023",
    UploadedDoc: "doc.pdf",
    status: "Approved",
    viewDoc: "view",
  },
  {
    Vehicle: "Placeholder",
    rego: "Placeholder",
    uploadDate: "18/12/2023",
    UploadedDoc: "doc.pdf",
    status: "Under Review",
    viewDoc: "view",
  },
  {
    Vehicle: "Placeholder",
    rego: "Placeholder",
    uploadDate: "17/12/2023",
    UploadedDoc: "doc.pdf",
    status: "Rejected",
    viewDoc: "view",
  },
];

const vehicleDocumentCollection = [
  {
    heading: "VEHICLE",
  },
  {
    heading: "REGO",
  },
  {
    heading: "UPLOAD DATE",
  },
  {
    heading: "UPLOADED DOC.",
  },
  {
    heading: "STATUS",
  },
  {
    heading: "VIEW DOC.",
  },
];

const situationCollection = [
  {
    value: "Anywhere",
  },
  {
    value: "item1",
  },
  {
    value: "item2",
  },
];

const activeInactive = [
  {
    value: "Active",
  },
  {
    value: "Inactive",
  },
];

const insuranceCoverageCollection = [
  {
    value: "$1 Million Coverage",
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
