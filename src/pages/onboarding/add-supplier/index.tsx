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
import { NestedAddSupplier } from "../../../../components/supplier/NestedAddSupplier";
import { NestedAddVehicle } from "../../../../components/supplier/NestedAddVehicle";
import NestedAddDriver from "../../../../components/supplier/NestedAddDriver";
import { getCookie } from "cookies-next";
import { addSupplierIntoSupplier } from "@/network-request/supplier/supplier";
const AddSupplier = () => {
  const token = getCookie("token");
  const [selectedData, setSelectedData] = useState();
  const step1Btn = "Proceed to Add Vehicle";
  const step2Btn = "Proceed to Add Driver";
  const step3Btn = "Submit";
  const [buttonState, seButtonState] = useState(step1Btn);

  const [addSupplier, setAddSupplier] = useState<any>({
    companyName: "",
    tradingName: "",
    abn: "",
    legalName: "",
    website: "",
    // this profile state is static because backend team working on that
    profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    opreations: {
      contactPerson: "",
      desgination: "",
      number: "",
      opreationEmail: "",
    },
    compliance: {
      contactPerson: "",
      desgination: "",
      number: "",
      complianceEmail: "",
    },
    admin: {
      contactPerson: "",
      desgination: "",
      number: "",
      adminEmail: "",
    },
    dispatch: {
      contactPerson: "",
      desgination: "",
      number: "",
      dispatchEmail: "",
    },
    invoicePreferences: "",
    invoiceCommunicationPreferences: "",
    companySuiteDetails: [
      {
        directorName: "",
        directorEmailAddress: "",
        directorNumber: "",
      },
    ],
    bankDetails: {
      accountName: "",
      bankName: "",
      bsb: "",
      accountNumber: "",
    },
    businessCoverage: {
      areaCovered: "",
      businessOpreations: "",
    },
    warehouseDetails: [
      {
        state: "",
        street1: "",
        street2: "",
        suburb: "",
        postcode: "",
        typeOfCarrier: "",
      },
    ],
    certificateOfAccreditation: {
      accreditationNumber: "",
      massManagementExpiryDate: "",
      basicFatigueExpiryDate: "",
      dangerousGoodsExpiryDate: "",
      nhvassExpiryDate: "",
      haccpExpiryDate: "",
      uploadAccreditationDocuments: "",
    },
    accreditationDocument: "",
    insuranceDetails: {
      productLiability: {
        policyNumber: "",
        insurer: "",
        expiryDate: "",
        sumAssured: "",
        document: "",
      },
      publicLiability: {
        policyNumber: "",
        insurer: "",
        expiryDate: "",
        sumAssured: "",
        document: "",
      },
      workCover: {
        employerNumber: "",
        valid: "",
        validTill: "",
        duesDays: "",
        document: "",
      },
      marineGeneral: {
        policyNumber: "",
        insurer: "",
        expiryDate: "",
        sumAssured: "",
        document: "",
      },
      marineAlcohol: {
        policyNumber: "",
        insurer: "",
        expiryDate: "",
        sumAssured: "",
        document: "",
      },
      coc: {
        policyNumber: "",
        insurer: "",
        expiryDate: "",
        sumAssured: "",
        document: "",
      },
    },
    drug: {
      type: "",
      uploadDate: "",
    },
    alcoholPolicy: {
      type: "",
      uploadDate: "",
    },
    procedure: {
      type: "",
      uploadDate: "",
    },
    riskManagementPolicy: {
      type: "",
      uploadDate: "",
    },
    speedPolicy: {
      type: "",
      uploadDate: "",
    },
    fatiquePolicyPresentationSystem: {
      type: "",
      uploadDate: "",
    },
    gpsSnapshot: {
      type: "",
      uploadDate: "",
    },
    workHealthSafetyPolicy: {
      type: "",
      uploadDate: "",
    },
  });

  const handleSubmit = async () => {
    const response: any = await addSupplierIntoSupplier(addSupplier, token || "");
    if (response?.status === 200) {
      alert("Supplier Added Successfully");
    } else {
      alert("Something went Wrong! Please try again later.");
    }
    // buttonState === step1Btn
    //   ? (seButtonState(step2Btn),
    //     // Auto scroll up for better user experience
    //     window.scrollTo({
    //       top: 0,
    //       behavior: "smooth", // for smooth scrolling
    //     }))
    //   : buttonState === step2Btn
    //   ? (seButtonState(step3Btn),
    //     window.scrollTo({
    //       top: 0,
    //       behavior: "smooth", // for smooth scrolling
    //     }))
    //   : buttonState === step3Btn
    //   ? (seButtonState(step1Btn),
    //     window.scrollTo({
    //       top: 0,
    //       behavior: "smooth", // for smooth scrolling
    //     }))
    //   : null;
  };
  return (
    <>
      {/* <Header /> */}
      <div className="flex bg-[#E9EFFF]">
        {/* <div className="sticky top-0">
          <Sidebar />
        </div> */}
        <div className="ml-[316px] w-full mt-4">
          {buttonState === step1Btn ? (
            <NestedAddSupplier
              addSupplier={addSupplier}
              setAddSupplier={setAddSupplier}
            />
          ) : buttonState === step2Btn ? (
            <NestedAddVehicle />
          ) : buttonState === step3Btn ? (
            <NestedAddDriver />
          ) : null}

          {/* create and save button */}

          <div className="mr-4 px-4 rounded-md mb-20 p-4 flex justify-end gap-2">
            <Button
              text="Save"
              className="!bg-transparent !text-[#000] border px-8 !rounded-xl text-sm border-[#032272]"
            />
            <Button
              onClick={handleSubmit}
              text={buttonState}
              className="px-8 !rounded-xl text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AddSupplier;

// const insuranceCoverageCollection = [
//   {
//     value: "$1 Million Coverage",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
// ];
// const situationCollection = [
//   {
//     value: "Anywhere",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
// ];
// const activeInactive = [
//   {
//     value: "Active",
//   },
//   {
//     value: "Inactive",
//   },
// ];
// const invoiceColletion = [
//   {
//     value: "Mail",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
// ];
// const invoiceComuColletion = [
//   {
//     value: "Accounts Payable Email, Operations Email",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
// ];
// const areaCollection = [
//   {
//     value:
//       "Australian Capital Territory, Northern Territory, Tasmania, Victoria",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
// ];
// const businessOperationCollection = [
//   {
//     value: "Queensland, Victoria",
//   },
//   {
//     value: "item1",
//   },

//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
// ];
// const stateCollection = [
//   {
//     value: "Victoria",
//   },
//   {
//     value: "items1",
//   },
//   {
//     value: "items2",
//   },
//   {
//     value: "items3",
//   },
//   {
//     value: "items4",
//   },
//   {
//     value: "items5",
//   },
// ];
// const carrierTypeCollection = [
//   {
//     value: "Trucking Carrier",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
// ];
// const documentCollectionData = [
//   {
//     documentType: "Drug",
//     uploadedDocument: "drug.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Alcohol Policy",
//     uploadedDocument: "alcohol.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Procedure",
//     uploadedDocument: "procedure.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Risk Management Policy",
//     uploadedDocument: "doc.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Speed Policy",
//     uploadedDocument: "doc.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Fatique Policy & Presentation system",
//     uploadedDocument: "doc.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "GPS Snapshot",
//     uploadedDocument: "GPS-Snapshot.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Work Health & Safety Policy",
//     uploadedDocument: "Work Health & Safety Policy.pdf",
//     uploadDate: "20/12/2023",
//   },
// ];
// const documentCollectionHeading = [
//   {
//     heading: "Document type",
//   },
//   {
//     heading: "Attach files",
//   },
//   {
//     heading: "Uploaded Documents",
//   },
//   {
//     heading: "Date of upload",
//   },
// ];
// const documentDataCollection = [
//   {
//     Vehicle: "Placeholder",
//     rego: "Placeholder",
//     uploadDate: "19/12/2023",
//     UploadedDoc: "doc.pdf",
//     status: "Approved",
//     viewDoc: "view",
//   },
//   {
//     Vehicle: "Placeholder",
//     rego: "Placeholder",
//     uploadDate: "18/12/2023",
//     UploadedDoc: "doc.pdf",
//     status: "Under Review",
//     viewDoc: "view",
//   },
//   {
//     Vehicle: "Placeholder",
//     rego: "Placeholder",
//     uploadDate: "17/12/2023",
//     UploadedDoc: "doc.pdf",
//     status: "Rejected",
//     viewDoc: "view",
//   },
// ];
// const vehicleDocumentCollection = [
//   {
//     heading: "VEHICLE",
//   },
//   {
//     heading: "REGO",
//   },
//   {
//     heading: "UPLOAD DATE",
//   },
//   {
//     heading: "UPLOADED DOC.",
//   },
//   {
//     heading: "STATUS",
//   },
//   {
//     heading: "VIEW DOC.",
//   },
// ];
// const countryCollection = [
//   {
//     value: "Australia",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item1",
//   },
// ];
// const licenceTypes = [
//   {
//     value: "HR (Heavy Rigid Licence)",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
// ];
// const drivingLicenceCollection = [
//   {
//     value: "Dangerous Goods",
//   },

//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
// ];
// const documentCollectionHeadingDriver = [
//   {
//     heading: "Document type",
//   },
//   {
//     heading: "Attach files",
//   },
//   {
//     heading: "Uploaded Documents",
//   },
//   {
//     heading: "Date of upload",
//   },
// ];
// const documentCollectionDataDriver = [
//   {
//     documentType: "Visa Status",
//     uploadedDocument: "visa-status.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Driver License (Front) ",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Driver License (Back) ",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "License History",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Police Verification",
//     uploadedDocument: "police-verification.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Passport (Front)",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Passport (Back)",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Health Insurance",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Driver Certificate",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Fitness",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Drug Test",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
// ];
