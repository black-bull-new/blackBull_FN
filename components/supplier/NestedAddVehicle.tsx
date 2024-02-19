import React from "react";
import Progressbar from "../Progressbar";
import Maininputfield from "../Maininputfield";
import DateWithoutDropdown from "../DateWithoutDropdown";
import Maindatefield from "../Maindatefield";
import FileUpload from "../FileUpload";
import DropDownMap from "../DropDownMap";
import StatusChip from "../StatusChip";

export const NestedAddVehicle = () => {
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
            value={"1213252"}
            className="w-full"
          />
          <DateWithoutDropdown
            label="Registration Expiry"
            value="12/12/2025"
            id="registrationExp"
          />
          <Maininputfield
            label="VIN No."
            value={"YS2R6X40005660400"}
            className="w-full"
          />
          <Maininputfield
            label="Vehicle Manufacturer"
            value={"Volvo"}
            className="w-full"
          />
          <Maininputfield
            label="Vehicle Model"
            value={"FH 16"}
            className="w-full"
          />
          <Maindatefield label="Vehicle Type" value="Prime Mover" />
          <Maindatefield label="Type of Trailer" value="Straight" />
          <Maindatefield label="State of Registration" value="Victoria" />
          <Maininputfield
            label="Engine Number"
            value={"1187474"}
            className="w-full"
          />
          <Maininputfield
            label="Compliance Plate"
            value={"Placeholder"}
            className="w-full"
          />
          <Maindatefield label="Registration Status" value="Active" />
        </div>
        <div className="mt-4 w-fit">
          <FileUpload file="Choose Rego Document" />
        </div>
        <h4 className="text-black font-semibold text-sm my-4">
          Vehicle Insurance
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <Maininputfield
            label="Insurance Company"
            value={"Allianz"}
            className="w-full"
          />
          <Maininputfield
            label="Policy Number"
            value={"10578475"}
            className="w-full"
          />
          <DateWithoutDropdown
            label="Vehicle Insurance Start Date"
            value="02/08/2023"
            id="registrationExp"
          />
          <DateWithoutDropdown
            label="Renewal Date"
            value="15/09/2025"
            id="registrationExp"
          />
          <DateWithoutDropdown
            label="Date Valid Until"
            value="15/10/2025"
            id="registrationExp"
          />

          <Maininputfield label="Days Left" value={"288"} className="w-full" />

          <DropDownMap
            label="Insurance Coverage"
            mapOption={insuranceCoverageCollection}
          />
          <DropDownMap label="Insurance Status" mapOption={activeInactive} />
          <DropDownMap label="Situation" mapOption={situationCollection} />
        </div>
        <h4 className="text-black font-semibold text-sm my-4">
          Truck Odometer
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <Maininputfield
            label="Truck Odometer"
            value={"Allianz"}
            className="w-full"
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
