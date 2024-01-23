import { useState } from "react";
import Button from "../../../../components/Button";
import DateWithoutDropdown from "../../../../components/DateWithoutDropdown";
import DropDownMap from "../../../../components/DropDownMap";
import FileUpload from "../../../../components/FileUpload";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Maindatefield from "../../../../components/Maindatefield";
import Maininputfield from "../../../../components/Maininputfield";
import Mainselectfield from "../../../../components/Mainselectfield";
import Progressbar from "../../../../components/Progressbar";
import Sidebar from "../../../../components/Sidebar";
import StatusChip from "../../../../components/StatusChip";

const CreateVehicle = () => {
  const xyz = ownershipStatus?.map((item) => {
    return item;
  });

  const [ownerStatus, setOwnerStatus] = useState("");
  console.log("owner status on select", ownerStatus);
  const [selectedData, setSelectedData] = useState("");
  const [state, setState] = useState("");

  return (
    <>
      {/* <Header /> */}
      <div className="flex bg-[#E9EFFF]">
        <div className="sticky top-0">
          <Sidebar />
        </div>
        <div className="ml-[316px] w-full mt-4">
          <div className="bg-white mr-4 flex justify-between items-center rounded-md">
            <h2 className=" w-full p-4 rounded-md font-bold">Create Vehicle</h2>
            <div className="h-8 w-8 flex justify-center cursor-pointer text-2xl items-center bg-blueGrey-100 rounded-full mr-4">
              <span className="mt-[-2px] ml-[2px] text-[#292D32] rotate-45">
                +
              </span>
            </div>
          </div>
          <div className="bg-white mr-4 px-4 rounded-md mt-4 p-4">
            <Progressbar />
            <div>
              <h3 className=" w-full my-4 rounded-md font-semibold">
                Vehicle Information
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Registration Number"
                  className="w-full"
                />
                <Maindatefield label="Registration Expiry" className="w-full" />
                <Maininputfield label="VIN No." className="w-full" />
                <Maininputfield
                  label="Vehicle Manufacturer"
                  className="w-full"
                />
                <Maininputfield label="Vehicle Model" className="w-full" />
                {/* <Mainselectfield label="Vehicle Type" option="Choose vehicle" /> */}
                <DropDownMap
                  label="Vehicle Type"
                  mapOption={vehicleTypeColleciton}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
                <DropDownMap
                  label="Type of Trailer"
                  mapOption={trailerTypeCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
                <DropDownMap
                  label="State of Registration"
                  mapOption={registrationStateCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />

                {/* <Mainselectfield label="Type of Trailer" option="Straight" /> */}
                {/* <Mainselectfield
                  label="State of Registration"
                  option="Victoria"
                /> */}
                <Maininputfield label="Engine Number" className="w-full" />
                <Maininputfield label="Compliance Plate" className="w-full" />
                <DropDownMap
                  label={"Registration Status"}
                  mapOption={registrationStatusCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
                <DropDownMap
                  label={"Ownership Status"}
                  mapOption={ownershipStatus}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
                {selectedData === "Hired" && (
                  <>
                    <Maininputfield label="Rented Company" className="w-full" />
                    <DateWithoutDropdown
                      label="Date of Hire"
                      value="15/04/2023"
                    />
                    <DateWithoutDropdown
                      label="Contract Valid Till"
                      value="15/04/2023"
                    />
                    <DropDownMap
                      label={"Term"}
                      mapOption={termCollection}
                      selectedData={state}
                      setSelectedData={setState}
                    />
                    <Maininputfield label="Weekly Rent" className="w-full" />
                    <DropDownMap
                      label={"Tax"}
                      mapOption={taxCollection}
                      selectedData={state}
                      setSelectedData={setState}
                    />
                    <DropDownMap
                      label={"Payment Method"}
                      mapOption={paymentMethodColleciton}
                      selectedData={state}
                      setSelectedData={setState}
                    />
                  </>
                )}
                <FileUpload file="Choose Rego Document" />

                {/* <Mainselectfield label="Registration Status" option="Active" /> */}
              </div>

              {selectedData === "Hired" && (
                <div className="mt-8">
                  <h3 className="w-full mb-4 font-semibold">Bank Details</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <Maininputfield
                      label="BSB"
                      value="Allianz"
                      className="w-full"
                    />
                    <Maininputfield
                      label="Account Number"
                      value="1234-5678-9012"
                      className="w-full"
                    />
                    <Maininputfield
                      label="Account Name"
                      value="Rentals Pty Ltd"
                      className="w-full"
                    />
                  </div>
                </div>
              )}
              <div className="mt-8">
                <h3 className="w-full mb-4 font-semibold">Vehicle Insurance</h3>
                <div className="grid grid-cols-3 gap-4">
                  <Maininputfield
                    label="Insurance Company"
                    className="w-full"
                    value="Allianz"
                  />
                  <Maininputfield
                    label="Policy Number"
                    className="w-full"
                    value="10578475"
                  />
                  <DateWithoutDropdown
                    label="Vehicle Insurance Start Date"
                    value="02/08/2023"
                  />
                  <DateWithoutDropdown
                    label="Renewal Date"
                    value="15/09/2025"
                  />
                  <DateWithoutDropdown
                    label="Date Valid Until"
                    value="15/10/2025"
                  />
                  <Maininputfield
                    label="Days Left"
                    value="288"
                    className="w-full"
                  />
                  {/* <Mainselectfield
                    label="Insurance Coverage"
                    option="$1 Million Coverage"
                  /> */}
                  <DropDownMap
                    mapOption={insuranceCoverageCollection}
                    label="Insurance Coverage"
                    selectedData={state}
                    setSelectedData={setState}
                  />
                  <DropDownMap
                    mapOption={insuranceStatusCollection}
                    label="Insurance Status"
                    selectedData={state}
                    setSelectedData={setState}
                  />
                  <DropDownMap
                    mapOption={situationCollection}
                    label="Situation"
                    selectedData={state}
                    setSelectedData={setState}
                  />
                  {/* <Mainselectfield label="Insurance Status" option="Active" /> */}
                  {/* <Mainselectfield label="Situation" option="Anywhere" /> */}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="w-full mb-4 font-semibold">Truck Odometer</h3>
                <div className="grid grid-cols-3 gap-4">
                  <Maininputfield
                    label="Truck Odometer"
                    value="50,000 km"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="w-full mb-4 font-semibold">Vehicle Documents</h3>
                <div className="grid grid-cols-[16%_16%_16%_16%_16%_20%] bg-[#EFF2F3] py-4 rounded-md flex text-center">
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
                        className="grid grid-cols-[16%_16%_16%_16%_16%_20%] py-4 flex text-center"
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
                        <div className="underline decoration-[#8D3194] text-center">
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
          </div>
          <div className="mr-4 px-4 rounded-md mt-4 p-4 flex justify-end gap-2">
            <Button
              text="Save"
              className="!bg-transparent !text-[#000] border px-8 !rounded-xl text-sm border-[#032272]"
            />
            <Button text="Create" className="px-8 !rounded-xl text-sm" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CreateVehicle;
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
const ownershipStatus = [
  {
    value: "Owned",
  },
  {
    value: "Hired",
  },
  {
    value: "Sub-Contractor",
  },
];
const vehicleTypeColleciton = [
  {
    value: "Prime Mover",
  },
  {
    value: "Trailer A",
  },
  {
    value: "Trailer B",
  },
  {
    value: "Foklift",
  },
  {
    value: "Car",
  },
  {
    value: "UTE",
  },
];
const trailerTypeCollection = [
  {
    value: "Straight",
  },
  { value: "Drop" },
  {
    value: "Freezer",
  },
  {
    value: "Mezz",
  },
  {
    value: "Box",
  },
  {
    value: "Dog",
  },
  {
    value: "Semi",
  },
  {
    value: "Low loader",
  },
  {
    value: "Tag",
  },
  {
    value: "Drop Decks with Ramps",
  },
  {
    value: "Drop Decks with Ramps",
  },
  {
    value: "B-Doubles",
  },
  {
    value: "Oversize Road Train",
  },
];
const registrationStateCollection = [
  {
    value: "Victoria",
  },
  {
    value: "Australian Capital Territory",
  },
  {
    value: "New South Wales",
  },
  {
    value: "Northern Territory",
  },
  {
    value: "Queensland",
  },
  {
    value: "South Australia",
  },
  {
    value: "Tasmania",
  },
  {
    value: "Western Australia",
  },
];
const registrationStatusCollection = [
  {
    value: "Active",
  },
  {
    value: "Cancelled",
  },
  {
    value: "Suspended",
  },
  {
    value: "Renewal Pending",
  },
];
const termCollection = [
  {
    value: "Weekly",
  },
  {
    value: "Fortnight",
  },
  {
    value: "Monthly",
  },
];
const taxCollection = [
  {
    value: "Inclusive",
  },
  {
    value: "Exclusive",
  },
  {
    value: "Free",
  },
];
const paymentMethodColleciton = [
  {
    value: "Credit Card",
  },
];
const insuranceCoverageCollection = [
  {
    value: "$1 Million Coverage",
  },
  {
    value: "$2 Million Coverage",
  },
  {
    value: "$3 Million Coverage",
  },
  {
    value: "$5 Million Coverage",
  },
  {
    value: "$10 Million Coverage",
  },
];
const insuranceStatusCollection = [
  {
    value: "Active",
  },
  {
    value: "Expired",
  },
  {
    value: "Renewed",
  },
];
const situationCollection = [
  {
    value: "Anywhere",
  },
  {
    value: "Limited",
  },
];
