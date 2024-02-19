import React, { useState } from "react";
import Progressbar from "../Progressbar";
import Image from "next/image";
import Maininputfield from "../Maininputfield";
import DropDownMap from "../DropDownMap";
import Button from "../Button";
import DateWithoutDropdown from "../DateWithoutDropdown";
import FileUpload from "../FileUpload";

export const NestedAddSupplier = (props: any) => {
  const [selectedData, setSelectedData] = useState();
  const { addSupplier, setAddSupplier } = props;
  console.log("addSupplier", addSupplier);
  return (
    <div className="">
      <div className="bg-white mr-4 flex justify-between items-center rounded-md">
        <h2 className="text-black w-full p-4 rounded-md font-bold">
          Add Supplier
        </h2>
        <div className="h-8 w-8 flex justify-center cursor-pointer text-2xl items-center bg-blueGrey-100 rounded-full mr-4">
          <span className="mt-[-2px] ml-[2px] text-[#292D32] rotate-45">+</span>
        </div>
      </div>
      <div className="bg-white mr-4 px-4 rounded-md mt-4 p-4 rounded-md">
        <div className="mx-2">
          <Progressbar />
        </div>
        <div className="relative w-fit">
          <Image src="/driverImage.svg" alt="driver" width={100} height={100} />
          <span className="w-6 h-6 rounded-full bg-accent3 block text-white flex justify-center items-end text-xl absolute right-2 bottom-2">
            +
          </span>
        </div>
        <div className="bg-white mr-4 mt-4 rounded-md">
          <h2 className="text-black font-semibold mt-8">
            Supplier Information
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <Maininputfield
              label="Company Name"
              value={addSupplier.companyName}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  companyName: e.target.value,
                });
              }}
            />
            <Maininputfield
              label="Trading Name"
              value={addSupplier.tradingName}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  tradingName: e.target.value,
                });
              }}
            />
            <Maininputfield
              label="ABN"
              value={addSupplier.abn}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  abn: e.target.value,
                });
              }}
            />
            <Maininputfield
              label="Legal Name"
              value={addSupplier.legalName}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  legalName: e.target.value,
                });
              }}
            />
            <Maininputfield
              label="Website Address"
              value={addSupplier.website}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  website: e.target.value,
                });
              }}
            />
            <Maininputfield
              label="Supplier ID"
              // value={addSupplier.website}
              className="w-full"
              // onChange={(e: any) => {
              //   setAddSupplier({
              //     ...addSupplier,
              //     website: e.target.value,
              //   });
              // }}
            />
          </div>
          <h2 className="text-black font-semibold mt-8">Contact Information</h2>
          <h3 className="text-black font-semibold text-sm my-4">Operations</h3>
          <div className="grid grid-cols-3 gap-4">
            <Maininputfield
              label="Contact Person"
              value={addSupplier.opreations?.contactPerson}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  opreations: {
                    ...addSupplier.opreations,
                    contactPerson: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Designation"
              value={addSupplier.opreations?.desgination}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  opreations: {
                    ...addSupplier.opreations,
                    desgination: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Contact Number"
              value={addSupplier.opreations?.number}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  opreations: {
                    ...addSupplier.opreations,
                    number: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Operations Email"
              value={addSupplier.opreations?.opreationEmail}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  opreations: {
                    ...addSupplier.opreations,
                    opreationEmail: e.target.value,
                  },
                });
              }}
            />
          </div>
          <h3 className="text-black font-semibold text-sm my-4">Compliance</h3>
          <div className="grid grid-cols-3 gap-4">
            <Maininputfield
              label="Contact Person"
              value={addSupplier.compliance?.contactPerson}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  compliance: {
                    ...addSupplier.compliance,
                    contactPerson: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Designation"
              value={addSupplier.compliance?.desgination}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  compliance: {
                    ...addSupplier.compliance,
                    desgination: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Contact Number"
              value={addSupplier.compliance?.number}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  compliance: {
                    ...addSupplier.compliance,
                    number: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Compliance Email"
              value={addSupplier.compliance?.complianceEmail}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  compliance: {
                    ...addSupplier.compliance,
                    complianceEmail: e.target.value,
                  },
                });
              }}
            />
          </div>
          <h3 className="text-black font-semibold text-sm my-4">Admin</h3>
          <div className="grid grid-cols-3 gap-4">
            <Maininputfield
              label="Contact Person"
              value={addSupplier.admin?.contactPerson}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  admin: {
                    ...addSupplier.admin,
                    contactPerson: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Designation"
              value={addSupplier.admin?.desgination}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  admin: {
                    ...addSupplier.admin,
                    desgination: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Contact Number"
              value={addSupplier.admin?.number}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  admin: {
                    ...addSupplier.admin,
                    number: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Admin Email"
              value={addSupplier.admin?.adminEmail}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  admin: {
                    ...addSupplier.admin,
                    adminEmail: e.target.value,
                  },
                });
              }}
            />
          </div>
          <h3 className="text-black font-semibold text-sm my-4">Dispatch</h3>
          <div className="grid grid-cols-3 gap-4">
            <Maininputfield
              label="Contact Person"
              value={addSupplier.dispatch?.contactPerson}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  dispatch: {
                    ...addSupplier.dispatch,
                    contactPerson: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Designation"
              value={addSupplier.dispatch?.desgination}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  dispatch: {
                    ...addSupplier.dispatch,
                    desgination: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Contact Number"
              value={addSupplier.dispatch?.number}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  dispatch: {
                    ...addSupplier.dispatch,
                    number: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Dispatch Email"
              value={addSupplier.dispatch?.dispatchEmail}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  dispatch: {
                    ...addSupplier.dispatch,
                    dispatchEmail: e.target.value,
                  },
                });
              }}
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
              value={addSupplier.invoicePreferences}
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  invoicePreferences: e.target.value,
                });
              }}
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
              value={addSupplier.invoiceCommunicationPreferences}
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  invoiceCommunicationPreferences: e.target.value,
                });
              }}
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
              value={addSupplier.companySuiteDetails[0]?.directorName}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  companySuiteDetails: [
                    {
                      ...addSupplier.companySuiteDetails[0],
                      directorName: e.target.value,
                    },
                  ],
                });
              }}
            />
            <Maininputfield
              label="Director Email Address"
              value={addSupplier.companySuiteDetails[0]?.directorEmailAddress}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  companySuiteDetails: [
                    {
                      ...addSupplier.companySuiteDetails[0],
                      directorEmailAddress: e.target.value,
                    },
                  ],
                });
              }}
            />
            <Maininputfield
              label="Director Contact Number"
              value={addSupplier.companySuiteDetails[0]?.directorNumber}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  companySuiteDetails: [
                    {
                      ...addSupplier.companySuiteDetails[0],
                      directorNumber: e.target.value,
                    },
                  ],
                });
              }}
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
              value={addSupplier.bankDetails?.accountName}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  bankDetails: {
                    ...addSupplier.bankDetails,
                    accountName: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Bank Name"
              value={addSupplier.bankDetails?.bankName}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  bankDetails: {
                    ...addSupplier.bankDetails,
                    bankName: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="BSB"
              value={addSupplier.bankDetails?.bsb}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  bankDetails: {
                    ...addSupplier.bankDetails,
                    bsb: e.target.value,
                  },
                });
              }}
            />
            <Maininputfield
              label="Account Number"
              value={addSupplier.bankDetails?.accountNumber}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  bankDetails: {
                    ...addSupplier.bankDetails,
                    accountNumber: e.target.value,
                  },
                });
              }}
            />
          </div>
          <h2 className="text-black font-semibold mt-8 mb-4">
            Business Coverage
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <DropDownMap
              label="Area Covered"
              mapOption={areaCollection}
              selectedData={selectedData}
              setSelectedData={setSelectedData}
              value={addSupplier.businessCoverage?.areaCovered}
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  businessCoverage: {
                    ...addSupplier.businessCoverage,
                    areaCovered: e.target.value,
                  },
                });
              }}
            />
            <DropDownMap
              label="Business Operations"
              mapOption={businessOperationCollection}
              selectedData={selectedData}
              setSelectedData={setSelectedData}
              value={addSupplier.businessCoverage?.businessOpreations}
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  businessCoverage: {
                    ...addSupplier.businessCoverage,
                    businessOpreations: e.target.value,
                  },
                });
              }}
            />
          </div>
          <h2 className="text-black font-semibold mt-8 mb-4">
            Warehouse Details
          </h2>
          <h3 className="text-black font-semibold text-sm my-4">Address 1</h3>
          <div className="grid grid-cols-3 gap-4">
            <DropDownMap
              label="State"
              mapOption={stateCollection}
              selectedData={selectedData}
              setSelectedData={setSelectedData}
              value={addSupplier.warehouseDetails[0]?.state}
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  warehouseDetails: [
                    {
                      ...addSupplier.warehouseDetails[0],
                      state: e.target.value,
                    },
                  ],
                });
              }}
            />
            <Maininputfield
              label="Street 1"
              value={addSupplier.warehouseDetails[0]?.street1}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  warehouseDetails: [
                    {
                      ...addSupplier.warehouseDetails[0],
                      street1: e.target.value,
                    },
                  ],
                });
              }}
            />
            <Maininputfield
              label="Street 2"
              value={addSupplier.warehouseDetails[0]?.street2}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  warehouseDetails: [
                    {
                      ...addSupplier.warehouseDetails[0],
                      street2: e.target.value,
                    },
                  ],
                });
              }}
            />
            <Maininputfield
              label="Suburb"
              value={addSupplier.warehouseDetails[0]?.suburb}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  warehouseDetails: [
                    {
                      ...addSupplier.warehouseDetails[0],
                      suburb: e.target.value,
                    },
                  ],
                });
              }}
            />
            <Maininputfield
              label="Post Code"
              value={addSupplier.warehouseDetails[0]?.postcode}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  warehouseDetails: [
                    {
                      ...addSupplier.warehouseDetails[0],
                      postcode: e.target.value,
                    },
                  ],
                });
              }}
            />
            <DropDownMap
              label="Type Of Carrier"
              mapOption={carrierTypeCollection}
              selectedData={selectedData}
              setSelectedData={setSelectedData}
              value={addSupplier.warehouseDetails[0]?.typeOfCarrier}
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  warehouseDetails: [
                    {
                      ...addSupplier.warehouseDetails[0],
                      typeOfCarrier: e.target.value,
                    },
                  ],
                });
              }}
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
              value={
                addSupplier.certificateOfAccreditation?.accreditationNumber
              }
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  certificateOfAccreditation: {
                    ...addSupplier.certificateOfAccreditation,
                    accreditationNumber: e.target.value,
                  },
                });
              }}
            />

            <DateWithoutDropdown
              label="Mass Management Expiry Date"
              value={
                addSupplier.certificateOfAccreditation?.massManagementExpiryDate
              }
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  certificateOfAccreditation: {
                    ...addSupplier.certificateOfAccreditation,
                    massManagementExpiryDate: e.target.value,
                  },
                });
              }}
            />
            <DateWithoutDropdown
              label="Basic Fatigue Management Expiry Date"
              value={
                addSupplier.certificateOfAccreditation?.basicFatigueExpiryDate
              }
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  certificateOfAccreditation: {
                    ...addSupplier.certificateOfAccreditation,
                    basicFatigueExpiryDate: e.target.value,
                  },
                });
              }}
            />
            <DateWithoutDropdown
              label="Dangerous Goods Expiry Date"
              value={
                addSupplier.certificateOfAccreditation?.dangerousGoodsExpiryDate
              }
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  certificateOfAccreditation: {
                    ...addSupplier.certificateOfAccreditation,
                    dangerousGoodsExpiryDate: e.target.value,
                  },
                });
              }}
            />
            <DateWithoutDropdown
              label="NHVAS Expiry Date"
              value={addSupplier.certificateOfAccreditation?.nhvassExpiryDate}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  certificateOfAccreditation: {
                    ...addSupplier.certificateOfAccreditation,
                    nhvassExpiryDate: e.target.value,
                  },
                });
              }}
            />
            <DateWithoutDropdown
              label="HACCP Expiry Date"
              value={addSupplier.certificateOfAccreditation?.haccpExpiryDate}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  certificateOfAccreditation: {
                    ...addSupplier.certificateOfAccreditation,
                    haccpExpiryDate: e.target.value,
                  },
                });
              }}
            />
          </div>
          <div className="w-fit my-4">
            <FileUpload file="Choose Accreditation Document" />
          </div>
          <h2 className="text-black font-semibold mt-8 mb-4">
            Insurance Details
          </h2>
          <h3 className="text-black font-semibold text-sm mb-4">
            Product Liability
          </h3>

          <div className="grid grid-cols-3 gap-4">
            <Maininputfield
              label="Policy Number"
              value={
                addSupplier.insuranceDetails?.productLiability?.policyNumber
              }
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    productLiability: {
                      ...addSupplier.insuranceDetails.productLiability,
                      policyNumber: e.target.value,
                    },
                  },
                });
              }}
            />
            <Maininputfield
              label="Insurer"
              value={addSupplier.insuranceDetails?.productLiability?.insurer}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    productLiability: {
                      ...addSupplier.insuranceDetails.productLiability,
                      insurer: e.target.value,
                    },
                  },
                });
              }}
            />

            <DateWithoutDropdown
              label="Expiry Date"
              value={addSupplier.insuranceDetails?.productLiability?.expiryDate}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    productLiability: {
                      ...addSupplier.insuranceDetails.productLiability,
                      expiryDate: e.target.value,
                    },
                  },
                });
              }}
            />

            <Maininputfield
              label="Sum Assured"
              value={addSupplier.insuranceDetails?.productLiability?.sumAssured}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    productLiability: {
                      ...addSupplier.insuranceDetails.productLiability,
                      sumAssured: e.target.value,
                    },
                  },
                });
              }}
            />
            <FileUpload file="Choose Document" />
          </div>
          <h3 className="text-black font-semibold text-sm my-4">
            Public Liability
          </h3>

          <div className="grid grid-cols-3 gap-4">
            <Maininputfield
              label="Policy Number"
              value={
                addSupplier.insuranceDetails?.publicLiability?.policyNumber
              }
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    publicLiability: {
                      ...addSupplier.insuranceDetails.publicLiability,
                      policyNumber: e.target.value,
                    },
                  },
                });
              }}
            />
            <Maininputfield
              label="Insurer"
              value={addSupplier.insuranceDetails?.publicLiability?.insurer}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    publicLiability: {
                      ...addSupplier.insuranceDetails.publicLiability,
                      insurer: e.target.value,
                    },
                  },
                });
              }}
            />

            <DateWithoutDropdown
              label="Expiry Date"
              value={addSupplier.insuranceDetails?.publicLiability?.expiryDate}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    publicLiability: {
                      ...addSupplier.insuranceDetails.publicLiability,
                      expiryDate: e.target.value,
                    },
                  },
                });
              }}
            />

            <Maininputfield
              label="Sum Assured"
              value={addSupplier.insuranceDetails?.publicLiability?.sumAssured}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    publicLiability: {
                      ...addSupplier.insuranceDetails.publicLiability,
                      sumAssured: e.target.value,
                    },
                  },
                });
              }}
            />
            <FileUpload file="Choose Document" />
          </div>
          <h3 className="text-black font-semibold text-sm my-4">Work Cover</h3>

          <div className="grid grid-cols-3 gap-4">
            <Maininputfield
              label="Employer Number"
              value={addSupplier.insuranceDetails?.workCover?.employerNumber}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    workCover: {
                      ...addSupplier.insuranceDetails.workCover,
                      employerNumber: e.target.value,
                    },
                  },
                });
              }}
            />

            <DateWithoutDropdown
              label="Vaild From"
              value={addSupplier.insuranceDetails?.workCover?.valid}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    workCover: {
                      ...addSupplier.insuranceDetails.workCover,
                      valid: e.target.value,
                    },
                  },
                });
              }}
            />

            <DateWithoutDropdown
              label="Vaild Till"
              value={addSupplier.insuranceDetails?.workCover?.validTill}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    workCover: {
                      ...addSupplier.insuranceDetails.workCover,
                      validTill: e.target.value,
                    },
                  },
                });
              }}
            />

            <Maininputfield
              label="Due in days"
              value={addSupplier.insuranceDetails?.workCover?.duesDays}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    workCover: {
                      ...addSupplier.insuranceDetails.workCover,
                      duesDays: e.target.value,
                    },
                  },
                });
              }}
            />
            <FileUpload file="Choose Document" />
          </div>
          <h3 className="text-black font-semibold text-sm my-4">
            Marine (General & Refrigerated)
          </h3>

          <div className="grid grid-cols-3 gap-4">
            <Maininputfield
              label="Employer Number"
              value={addSupplier.insuranceDetails?.marineGeneral?.policyNumber}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    marineGeneral: {
                      ...addSupplier.insuranceDetails.marineGeneral,
                      policyNumber: e.target.value,
                    },
                  },
                });
              }}
            />
            <Maininputfield
              label="Insurer"
              value={addSupplier.insuranceDetails?.marineGeneral?.insurer}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    marineGeneral: {
                      ...addSupplier.insuranceDetails.marineGeneral,
                      insurer: e.target.value,
                    },
                  },
                });
              }}
            />

            <DateWithoutDropdown
              label="Expiry Date"
              value={addSupplier.insuranceDetails?.marineGeneral?.expiryDate}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    marineGeneral: {
                      ...addSupplier.insuranceDetails.marineGeneral,
                      expiryDate: e.target.value,
                    },
                  },
                });
              }}
            />

            <Maininputfield
              label="Sum Assured"
              value={addSupplier.insuranceDetails?.marineGeneral?.sumAssured}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    marineGeneral: {
                      ...addSupplier.insuranceDetails.marineGeneral,
                      sumAssured: e.target.value,
                    },
                  },
                });
              }}
            />
            <FileUpload file="Choose Document" />
          </div>
          <h3 className="text-black font-semibold text-sm my-4">
            Marine (Alcohol)
          </h3>

          <div className="grid grid-cols-3 gap-4">
            <Maininputfield
              label="Employer Number"
              value={addSupplier.insuranceDetails?.marineAlcohol?.policyNumber}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    marineAlcohol: {
                      ...addSupplier.insuranceDetails.marineAlcohol,
                      policyNumber: e.target.value,
                    },
                  },
                });
              }}
            />
            <Maininputfield
              label="Insurer"
              value={addSupplier.insuranceDetails?.marineAlcohol?.insurer}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    marineAlcohol: {
                      ...addSupplier.insuranceDetails.marineAlcohol,
                      insurer: e.target.value,
                    },
                  },
                });
              }}
            />

            <DateWithoutDropdown
              label="Expiry Date"
              value={addSupplier.insuranceDetails?.marineAlcohol?.expiryDate}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    marineAlcohol: {
                      ...addSupplier.insuranceDetails.marineAlcohol,
                      expiryDate: e.target.value,
                    },
                  },
                });
              }}
            />

            <Maininputfield
              label="Sum Assured"
              value={addSupplier.insuranceDetails?.marineAlcohol?.sumAssured}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    marineAlcohol: {
                      ...addSupplier.insuranceDetails.marineAlcohol,
                      sumAssured: e.target.value,
                    },
                  },
                });
              }}
            />
            <FileUpload file="Choose Document" />
          </div>
          <h3 className="text-black font-semibold text-sm my-4">COC</h3>

          <div className="grid grid-cols-3 gap-4">
            <Maininputfield
              label="Employer Number"
              value={addSupplier.insuranceDetails?.coc?.policyNumber}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    coc: {
                      ...addSupplier.insuranceDetails.coc,
                      policyNumber: e.target.value,
                    },
                  },
                });
              }}
            />
            <Maininputfield
              label="Insurer"
              value={addSupplier.insuranceDetails?.coc?.insurer}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    coc: {
                      ...addSupplier.insuranceDetails.coc,
                      insurer: e.target.value,
                    },
                  },
                });
              }}
            />

            <DateWithoutDropdown
              label="Expiry Date"
              value={addSupplier.insuranceDetails?.coc?.expiryDate}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    coc: {
                      ...addSupplier.insuranceDetails.coc,
                      expiryDate: e.target.value,
                    },
                  },
                });
              }}
            />

            <Maininputfield
              label="Sum Assured"
              value={addSupplier.insuranceDetails?.coc?.sumAssured}
              className="w-full"
              onChange={(e: any) => {
                setAddSupplier({
                  ...addSupplier,
                  insuranceDetails: {
                    ...addSupplier.insuranceDetails,
                    coc: {
                      ...addSupplier.insuranceDetails.coc,
                      sumAssured: e.target.value,
                    },
                  },
                });
              }}
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
                    <Image src={"/edit.svg"} alt="svg" width={24} height={24} />
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
    </div>
  );
};

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
