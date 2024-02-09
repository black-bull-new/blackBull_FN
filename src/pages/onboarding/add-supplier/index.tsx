import Image from "next/image";

import Progressbar from "../../../../components/Progressbar";

import Maininputfield from "../../../../components/Maininputfield";
import DropDownMap from "../../../../components/DropDownMap";
import { useState } from "react";
import Button from "../../../../components/Button";
import DateWithoutDropdown from "../../../../components/DateWithoutDropdown";
import FileUpload from "../../../../components/FileUpload";
import Maindatefield from "../../../../components/Maindatefield";
import StatusChip from "../../../../components/StatusChip";
import Checkbox from "../../../../components/Checkbox";

const AddSupplier = () => {
  const [selectedData, setSelectedData] = useState();
  return (
    <>
      {/* <Header /> */}
      <div className="flex bg-[#E9EFFF]">
        {/* <div className="sticky top-0">
          <Sidebar />
        </div> */}
        <div className="ml-[316px] w-full mt-4">
          <div className="bg-white mr-4 flex justify-between items-center rounded-md">
            <h2 className="text-black w-full p-4 rounded-md font-bold">Add Customer</h2>
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
            <div className="bg-white mr-4 mt-4 rounded-md">
              <h2 className="text-black font-semibold mt-8">Supplier Information</h2>
              <div className="grid grid-cols-3 gap-4">
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
                  value={"Salve"}
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
                  label="Supplier ID"
                  value={"BBT - 1200"}
                  className="w-full"
                />
              </div>
              <h2 className="text-black font-semibold mt-8">Contact Information</h2>
              <h3 className="text-black font-semibold text-sm my-4">Operations</h3>
              <div className="grid grid-cols-3 gap-4">
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
              <h3 className="text-black font-semibold text-sm my-4">Compliance</h3>
              <div className="grid grid-cols-3 gap-4">
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
              <h3 className="text-black font-semibold text-sm my-4">Admin</h3>
              <div className="grid grid-cols-3 gap-4">
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
              <h3 className="text-black font-semibold text-sm my-4">Dispatch</h3>
              <div className="grid grid-cols-3 gap-4">
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
                  label="Dispatch Email"
                  value={"sanket.salve@gmail.com"}
                  className="w-full"
                />
              </div>
              <h3 className="text-black font-semibold text-sm my-4">
                Invoice Preferences
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <DropDownMap
                  label="Invoice Preferences"
                  mapOption={invoiceColletion}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
              </div>
              <h3 className="text-black font-semibold text-sm my-4">
                Invoice Communication Preferences
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <DropDownMap
                  label="Select Email"
                  mapOption={invoiceComuColletion}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
              </div>
              <div className="flex justify-end py-2 px-4">
                <Button
                  text="Add More Fields"
                  className="!w-fit bg-accent3 !px-4"
                />
              </div>
              <h2 className="text-black font-semibold mt-8 mb-4">
                Company C-Suite Details
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Director Name"
                  value={"Sanket"}
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
              <h2 className="text-black font-semibold mt-8 mb-4">Bank Details</h2>
              <div className="grid grid-cols-3 gap-4">
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
              <h2 className="text-black font-semibold mt-8 mb-4">Business Coverage</h2>
              <div className="grid grid-cols-3 gap-4">
                <DropDownMap
                  label="Area Covered"
                  mapOption={areaCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
                <DropDownMap
                  label="Business Operations"
                  mapOption={businessOperationCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
              </div>
              <h2 className="text-black font-semibold mt-8 mb-4">Warehouse Details</h2>
              <h3 className="text-black font-semibold text-sm my-4">Address 1</h3>
              <div className="grid grid-cols-3 gap-4">
                <DropDownMap
                  label="State"
                  mapOption={stateCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
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
                <Maininputfield
                  label="Post Code"
                  value={"3161"}
                  className="w-full"
                />
                <DropDownMap
                  label="Type Of Carrier"
                  mapOption={carrierTypeCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
              </div>
              <div className="flex justify-end py-2 px-4">
                <Button
                  text="Add More Addresses"
                  className="!w-fit bg-accent3 !px-4"
                />
              </div>

              <h2 className="text-black font-semibold mt-8 mb-4">
                Cerificate Of Accreditation
              </h2>

              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Accreditation Number"
                  value={"4854820"}
                  className="w-full"
                />

                <DateWithoutDropdown
                  label="Mass Management Expiry Date"
                  value="12/12/2025"
                />
                <DateWithoutDropdown
                  label="Basic Fatigue Management Expiry Date"
                  value="12/12/2025"
                />
                <DateWithoutDropdown
                  label="Dangerous Goods Expiry Date"
                  value="12/12/2025"
                />
                <DateWithoutDropdown
                  label="NHVAS Expiry Date"
                  value="12/12/2025"
                />
                <DateWithoutDropdown
                  label="HACCP Expiry Date"
                  value="12/12/2025"
                />
              </div>
              <div className="w-fit my-4">
                <FileUpload file="Choose Accreditation Document" />
              </div>
              <h2 className="text-black font-semibold mt-8 mb-4">Insurance Details</h2>
              <h3 className="text-black font-semibold text-sm mb-4">Product Liability</h3>

              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Policy Number"
                  value={"02945156"}
                  className="w-full"
                />
                <Maininputfield
                  label="Insurer"
                  value={"Insurance Australia Group (IAG)"}
                  className="w-full"
                />

                <DateWithoutDropdown label="Expiry Date" value="12/12/2025" />

                <Maininputfield
                  label="Sum Assured"
                  value={"$1 Million"}
                  className="w-full"
                />
                <FileUpload file="Choose Document" />
              </div>
              <h3 className="text-black font-semibold text-sm my-4">Public Liability</h3>

              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Policy Number"
                  value={"02945156"}
                  className="w-full"
                />
                <Maininputfield
                  label="Insurer"
                  value={"Insurance Australia Group (IAG)"}
                  className="w-full"
                />

                <DateWithoutDropdown label="Expiry Date" value="12/12/2025" />

                <Maininputfield
                  label="Sum Assured"
                  value={"$1 Million"}
                  className="w-full"
                />
                <FileUpload file="Choose Document" />
              </div>
              <h3 className="text-black font-semibold text-sm my-4">Work Cover</h3>

              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Employer Number"
                  value={"02945156"}
                  className="w-full"
                />

                <DateWithoutDropdown label="Vaild From" value="12/12/2024" />

                <DateWithoutDropdown label="Vaild Till" value="12/12/2025" />

                <Maininputfield
                  label="Due in days"
                  value={"365 days"}
                  className="w-full"
                />
                <FileUpload file="Choose Document" />
              </div>
              <h3 className="text-black font-semibold text-sm my-4">
                Marine (General & Refrigerated)
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Employer Number"
                  value={"02945156"}
                  className="w-full"
                />
                <Maininputfield
                  label="Insurer"
                  value={"Insurance Australia Group (IAG)"}
                  className="w-full"
                />

                <DateWithoutDropdown label="Expiry Date" value="12/12/2025" />

                <Maininputfield
                  label="Sum Assured"
                  value={"$1 Million"}
                  className="w-full"
                />
                <FileUpload file="Choose Document" />
              </div>
              <h3 className="text-black font-semibold text-sm my-4">Marine (Alcohol)</h3>

              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Employer Number"
                  value={"02945156"}
                  className="w-full"
                />
                <Maininputfield
                  label="Insurer"
                  value={"Insurance Australia Group (IAG)"}
                  className="w-full"
                />

                <DateWithoutDropdown label="Expiry Date" value="12/12/2025" />

                <Maininputfield
                  label="Sum Assured"
                  value={"$1 Million"}
                  className="w-full"
                />
                <FileUpload file="Choose Document" />
              </div>
              <h3 className="text-black font-semibold text-sm my-4">COC</h3>

              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Employer Number"
                  value={"02945156"}
                  className="w-full"
                />
                <Maininputfield
                  label="Insurer"
                  value={"Insurance Australia Group (IAG)"}
                  className="w-full"
                />

                <DateWithoutDropdown label="Expiry Date" value="12/12/2025" />

                <Maininputfield
                  label="Sum Assured"
                  value={"$1 Million"}
                  className="w-full"
                />
                <FileUpload file="Choose Document" />
              </div>
            </div>
          </div>
          <div className="bg-white mr-4 px-4 rounded-md mt-4 p-4 rounded-md">
            <div className="mb-4 mt-2">
              <h3 className="text-black w-full mb-4 rounded-md font-semibold">
                {" "}
                Compliance Documents
              </h3>

              <div className="text-black grid grid-cols-5 bg-table-header p-4 rounded-md text-center mb-2">
                {documentCollectionHeading?.map((value, index) => {
                  return (
                    <>
                      <h4 key={index} className="font-semibold text-sm">
                        {value.heading}
                      </h4>
                    </>
                  );
                })}
              </div>
              <div className="text-black grid grid-cols-5 p-4 rounded-md text-center items-center">
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
          <div>
            <h3 className="text-black font-semibold p-4 bg-white mr-4 mt-4 rounded-md">
              Vehicle Onboarding
            </h3>
          </div>
          <div className="p-4 bg-white mr-4 mt-4 rounded-md">
            <Progressbar />

            <h4 className="text-black font-semibold text-sm my-4">Vehicle Information</h4>
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
            <h4 className="text-black font-semibold text-sm my-4">Vehicle Insurance</h4>
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

              <Maininputfield
                label="Days Left"
                value={"288"}
                className="w-full"
              />

              <DropDownMap
                label="Insurance Coverage"
                mapOption={insuranceCoverageCollection}
              />
              <DropDownMap
                label="Insurance Status"
                mapOption={activeInactive}
              />
              <DropDownMap label="Situation" mapOption={situationCollection} />
            </div>
            <h4 className="text-black font-semibold text-sm my-4">Truck Odometer</h4>
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
          <div className="font-semibold text-xl mt-4 bg-white p-4 mr-4 rounded-md">
            <h2 className="text-black">Driver Onboarding</h2>
          </div>
          <div className="font-semibold text-xl mt-4 bg-white p-4 mr-4 rounded-md mb-20">
            <Progressbar />
            <div className="relative w-fit mt-4">
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
            <h2 className="text-black font-semibold p-4 mt-6">Personal Information</h2>
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
            <h2 className="text-black font-semibold p-4 mt-6">Address Information</h2>
            <h3 className="text-black font-semibold text-sm pl-4">Current Address</h3>
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
              <Maininputfield
                label="Post Code"
                value={"3161"}
                className="w-full"
              />
            </div>
            <Checkbox
              className="!pl-4"
              content="Same as above"
              color="text-blueGrey-900"
            />
            <h3 className="text-black font-semibold text-sm pl-4">Permanent Address</h3>
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
              <Maininputfield
                label="Post Code"
                value={"3145"}
                className="w-full"
              />
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
            <h2 className="text-black font-semibold p-4 mt-6">Employment History</h2>
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
            <h2 className="text-black font-semibold p-4 mt-4">Employment History</h2>
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
            <h2 className="text-black font-semibold p-4 mt-4">Special Driving Licence</h2>
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
          {/* create and save button */}
          <div className="mr-4 px-4 rounded-md mt-4 mb-20 p-4 flex justify-end gap-2">
            <Button
              text="Save"
              className="!bg-transparent !text-[#000] border px-8 !rounded-xl text-sm border-[#032272]"
            />
            <Button
              // onClick={handleSubmit}
              text="Create"
              className="px-8 !rounded-xl text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AddSupplier;

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
const areaCollection = [
  {
    value:
      "Australian Capital Territory, Northern Territory, Tasmania, Victoria",
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
const businessOperationCollection = [
  {
    value: "Queensland, Victoria",
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
const carrierTypeCollection = [
  {
    value: "Trucking Carrier",
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
const documentCollectionData = [
  {
    documentType: "Drug",
    uploadedDocument: "drug.pdf",
    uploadDate: "20/12/2023",
  },
  {
    documentType: "Alcohol Policy",
    uploadedDocument: "alcohol.pdf",
    uploadDate: "20/12/2023",
  },
  {
    documentType: "Procedure",
    uploadedDocument: "procedure.pdf",
    uploadDate: "20/12/2023",
  },
  {
    documentType: "Risk Management Policy",
    uploadedDocument: "doc.pdf",
    uploadDate: "20/12/2023",
  },
  {
    documentType: "Speed Policy",
    uploadedDocument: "doc.pdf",
    uploadDate: "20/12/2023",
  },
  {
    documentType: "Fatique Policy & Presentation system",
    uploadedDocument: "doc.pdf",
    uploadDate: "20/12/2023",
  },
  {
    documentType: "GPS Snapshot",
    uploadedDocument: "GPS-Snapshot.pdf",
    uploadDate: "20/12/2023",
  },
  {
    documentType: "Work Health & Safety Policy",
    uploadedDocument: "Work Health & Safety Policy.pdf",
    uploadDate: "20/12/2023",
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
