import Image from "next/image";

import Progressbar from "../../../../components/Progressbar";
import Maininputfield from "../../../../components/Maininputfield";
import DropDownMap from "../../../../components/DropDownMap";
import { useState } from "react";
import Button from "../../../../components/Button";
import FileUpload from "../../../../components/FileUpload";
import { addCustomer } from "@/network-request/customer/customerApi";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const AddCustomer = () => {
  const [selectedData, setSelectedData] = useState("");
  const token = getCookie("token") 
  const router = useRouter() 

  const [customer, setCustomer] = useState(
    {
      companyName: "",
      tradingName: "",
      abnNumber: Number(),
      legalName: "",
      websiteAddress: "",
      firstName: "",
      lastName: "",
      designation: "",

      companyAddress: {
        street1: "",
        street2: "",
        suburb: "",
        state: "",
        country: "",
        postCode: ""
      },

      accountPayble: {
        contactPerson: "",
        designation: "",
        contactNumber: "",
        accountsPaybleEmail: ""
      },

      accountReceivable: {
        contactPerson: "",
        designation: "",
        contactNumber: "",
        accountsReceivableEmail: ""
      },
      opreations: {
        contactPerson: "",
        designation: "",
        contactNumber: "",
        opreationsEmail: ""
      },
      compliance: {
        contactPerson: "",
        designation: "",
        contactNumber: "",
        complianceEmail: ""
      },
      admin: {
        contactPerson: "",
        designation: "",
        contactNumber: "",
        adminEmail: ""
      },
      invoicePrefrences: "",
      invoiceCommunicationPrefrences: "",
      companySuiteDetails: [
        {
          designation: "",
          directorEmailAddress: "",
          directorContactNumber: ""
        }
       
      ],
      payment: {
        accountName: "",
        bankName: "",
        bsb: "",
        accountNumber: ""
      },
      paymentTerm: "",
      warehouseLocation: {
        street1: "",
        street2: "",
        suburb: "", 
        state: "",
        country: "",
        postCode: ""
      },
      document: [
      
      ]
    }
  )



  const handleSubmit = async()=>{
    console.log('customer', customer.document)
    // const response :any = await addCustomer(customer, token || "")

    // if(response?.status === 200){
    //     alert('Customer Added Successfully')    
    // }else{
    //     alert('Something went Wrong! Please try again later.')
    // }
  }

  return (
    <>
      {/* <Header /> */}
      <div className="flex bg-[#E9EFFF]">
        {/* <div className="sticky top-0">
          <Sidebar />
        </div> */}
        <div className="ml-[316px] w-full mt-4">
          <div className="bg-white mr-4 flex justify-between items-center rounded-md">
            <h2 className=" w-full p-4 rounded-md font-bold">Add Customer</h2>
            <div className="h-8 w-8 flex justify-center cursor-pointer text-2xl items-center bg-blueGrey-100 rounded-full mr-4">
              <span className="mt-[-2px] ml-[2px] text-[#292D32] rotate-45">
                +
              </span>
            </div>
          </div>
          <div className="bg-white mr-4 px-4  mt-4 p-4 rounded-md">
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
              <span className="w-6 h-6 rounded-full bg-accent3  text-white flex justify-center items-end text-xl absolute right-2 bottom-2">
                +
              </span>
            </div>
          </div>
          <div className="bg-white mr-4 mt-4 rounded-md">
            <h2 className="font-semibold p-4">Company Information</h2>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Company Name"
                value={customer.companyName}
                onChange={(e:any) => setCustomer({ ...customer, companyName: e.target.value })} 
                className="w-full"
              />
              <Maininputfield
                label="Trading Name"
                vsalue={customer.tradingName}
                onChange={(e:any) => setCustomer({ ...customer, tradingName: e.target.value })}
                className="w-full"
              />
              <Maininputfield
                label="ABN"
                value={customer.abnNumber}
                onChange={(e:any) => setCustomer({ ...customer, abnNumber: Number(e.target.value) })} 
                className="w-full"
              />
              <Maininputfield
                label="Legal Name"
                value={customer.legalName}
                onChange={(e:any) => setCustomer({ ...customer, legalName: e.target.value })} 
                className="w-full"
              />
              <Maininputfield
                label="Website Address"
                value={customer.websiteAddress}
                onChange={(e:any) => setCustomer({ ...customer, websiteAddress: e.target.value })}  
                className="w-full"
              />
              {/* <Maininputfield
                label="Customer ID"
                value={customer.customerId}
                className="w-full"
              /> */}
              <Maininputfield
                label="First Name"
                value={customer.firstName}
                onChange={(e:any) => setCustomer({ ...customer, firstName: e.target.value })}
                className="w-full"
              />
              <Maininputfield
                label="Last Name"
                value={customer.lastName}
                onChange={(e:any) => setCustomer({ ...customer, lastName: e.target.value })}
                className="w-full"
              />
              <Maininputfield
                label="Designation"
                value={customer.designation}
                onChange={(e:any) => setCustomer({ ...customer, designation: e.target.value })}
                className="w-full"
              />
            </div>
          </div>
          <div className="bg-white mr-4 mt-4 rounded-md">
            <h2 className="font-semibold p-4">Company Address</h2>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Street 1"
                value={customer.companyAddress.street1}  
                onChange={(e:any) => setCustomer({ ...customer, companyAddress: { ...customer.companyAddress, street1: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Street 2"
                value={customer.companyAddress.street2}
                onChange={(e:any) => setCustomer({ ...customer, companyAddress: { ...customer.companyAddress, street2: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Suburb"
                value={customer.companyAddress.suburb}
                onChange={(e:any) => setCustomer({ ...customer, companyAddress: { ...customer.companyAddress, suburb: e.target.value } })}
                className="w-full"
              />
              <DropDownMap
                label="State"
                mapOption={stateCollection}
                value={customer.companyAddress.state}
                onChange={(e:any) => setCustomer({ ...customer, companyAddress: { ...customer.companyAddress, state: e.target.value } })}
                // selectedData={selectedData}
                // setSelectedData={setSelectedData}
              />
              <DropDownMap
                label="Country"
                mapOption={countryCollection}
                value={customer.companyAddress.country}
                onChange={(e:any) => setCustomer({ ...customer, companyAddress: { ...customer.companyAddress, country: e.target.value } })}
                // selectedData={selectedData}
                // setSelectedData={setSelectedData}
              />
              <Maininputfield
                label="Post Code"
                value={customer.companyAddress.postCode}
                onChange={(e:any) => setCustomer({ ...customer, companyAddress: { ...customer.companyAddress, postCode: e.target.value } })}
                className="w-full"
              />
            </div>
          </div>
          <div className="bg-white mr-4 mt-4 rounded-md">
            <h2 className="font-semibold p-4">Contact Information</h2>
            <h3 className="font-semibold px-4 text-sm">Accounts Payable</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={customer.accountPayble.contactPerson}
                onChange={(e:any) => setCustomer({ ...customer, accountPayble: { ...customer.accountPayble, contactPerson: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Designation"
                value={customer.accountPayble.designation}
                onChange={(e:any) => setCustomer({ ...customer, accountPayble: { ...customer.accountPayble, designation: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Contact Number"
                value={customer.accountPayble.contactNumber}
                onChange={(e:any) => setCustomer({ ...customer, accountPayble: { ...customer.accountPayble, contactNumber: e.target.value } })}
                className="w-full"
              />

              <Maininputfield
                label="Accounts Payable Email"
                value={customer.accountPayble.accountsPaybleEmail}
                onChange={(e:any) => setCustomer({ ...customer, accountPayble: { ...customer.accountPayble, accountsPaybleEmail: e.target.value } })}
                className="w-full"
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">Accounts Receivable</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={customer.accountReceivable.contactPerson}
                onChange={(e:any) => setCustomer({ ...customer, accountReceivable: { ...customer.accountReceivable, contactPerson: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Designation"
                value={customer.accountReceivable.designation}
                onChange={(e:any) => setCustomer({ ...customer, accountReceivable: { ...customer.accountReceivable, designation: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Contact Number"
                value={customer.accountReceivable.contactNumber}
                onChange={(e:any) => setCustomer({ ...customer, accountReceivable: { ...customer.accountReceivable, contactNumber: e.target.value } })}
                className="w-full"
              />

              <Maininputfield
                label="Accounts Receivable Email"
                value={customer.accountReceivable.accountsReceivableEmail}
                onChange={(e:any) => setCustomer({ ...customer, accountReceivable: { ...customer.accountReceivable, accountsReceivableEmail: e.target.value } })}
                className="w-full"
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">Operations</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={customer.opreations.contactPerson}
                onChange={(e:any) => setCustomer({ ...customer, opreations: { ...customer.opreations, contactPerson: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Designation"
                value={customer.opreations.designation}
                onChange={(e:any) => setCustomer({ ...customer, opreations: { ...customer.opreations, designation: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Contact Number"
                value={customer.opreations.contactNumber}
                onChange={(e:any) => setCustomer({ ...customer, opreations: { ...customer.opreations, contactNumber: e.target.value } })}
                className="w-full"
              />

              <Maininputfield
                label="Operations Email"
                value={customer.opreations.opreationsEmail}
                onChange={(e:any) => setCustomer({ ...customer, opreations: { ...customer.opreations, opreationsEmail: e.target.value } })}
                className="w-full"
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">Compliance</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={customer.compliance.contactPerson}
                onChange={(e:any) => setCustomer({ ...customer, compliance: { ...customer.compliance, contactPerson: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Designation"
                value={customer.compliance.designation}
                onChange={(e:any) => setCustomer({ ...customer, compliance: { ...customer.compliance, designation: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Contact Number"
                value={customer.compliance.contactNumber}
                onChange={(e:any) => setCustomer({ ...customer, compliance: { ...customer.compliance, contactNumber: e.target.value } })}
                className="w-full"
              />

              <Maininputfield
                label="Compliance Email"
                value={customer.compliance.complianceEmail}
                onChange={(e:any) => setCustomer({ ...customer, compliance: { ...customer.compliance, complianceEmail: e.target.value } })}
                className="w-full"
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">Admin</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={customer.admin.contactPerson}
                onChange={(e:any) => setCustomer({ ...customer, admin: { ...customer.admin, contactPerson: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Designation"
                value={customer.admin.designation}
                onChange={(e:any) => setCustomer({ ...customer, admin: { ...customer.admin, designation: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Contact Number"
                value={customer.admin.contactNumber}
                onChange={(e:any) => setCustomer({ ...customer, admin: { ...customer.admin, contactNumber: e.target.value } })}
                className="w-full"
              />

              <Maininputfield
                label="Admin Email"
                value={customer.admin.adminEmail}
                onChange={(e:any) => setCustomer({ ...customer, admin: { ...customer.admin, adminEmail: e.target.value } })}
                className="w-full"
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">Invoice Preferences</h3>

            <div className="grid grid-cols-3 gap-4 p-4">
              <DropDownMap
                label="Invoice Preferences"
                mapOption={invoiceColletion}
                value={customer.invoicePrefrences}
                onChange={(e:any) => setCustomer({ ...customer, invoicePrefrences: e.target.value })}
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">
              Invoice Communication Preferences
            </h3>

            <div className="grid grid-cols-3 gap-4 p-4">
              <DropDownMap
                label="Select Email"
                mapOption={invoiceComuColletion}
                value={customer.invoiceCommunicationPrefrences}
                onChange={(e:any) => setCustomer({ ...customer, invoiceCommunicationPrefrences: e.target.value })}
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">
              Company C-Suite Details
            </h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Designation"
                value={customer.companySuiteDetails[0].designation}
                onChange={(e:any) => setCustomer({ ...customer, companySuiteDetails: [{ ...customer.companySuiteDetails[0], designation: e.target.value }] })}
                className="w-full"
              />
              <Maininputfield
                label="Director Email Address"
                value={customer.companySuiteDetails[0].directorEmailAddress}
                onChange={(e:any) => setCustomer({ ...customer, companySuiteDetails: [{ ...customer.companySuiteDetails[0], directorEmailAddress: e.target.value }] })}
                className="w-full"
              />
              <Maininputfield
                label="Director Contact Number"
                value={customer.companySuiteDetails[0].directorContactNumber}
                onChange={(e:any) => setCustomer({ ...customer, companySuiteDetails: [{ ...customer.companySuiteDetails[0], directorContactNumber: e.target.value }] })}
                className="w-full"
              />
            </div>
            <div className="flex justify-end py-2 px-4">
              <Button
                text="Add More Director"
                className="!w-fit bg-accent3 !px-4"
              />
            </div>
            <h2 className="font-semibold p-4"> Payment</h2>

            <h3 className="font-semibold px-4 text-sm">Bank Details</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Account Name"
                value={customer.payment.accountName}
                onChange={(e:any) => setCustomer({ ...customer, payment: { ...customer.payment, accountName: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Bank Name"
                value={customer.payment.bankName}
                onChange={(e:any) => setCustomer({ ...customer, payment: { ...customer.payment, bankName: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="BSB"
                value={customer.payment.bsb}
                onChange={(e:any) => setCustomer({ ...customer, payment: { ...customer.payment, bsb: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Account Number"
                value={customer.payment.accountNumber}
                onChange={(e:any) => setCustomer({ ...customer, payment: { ...customer.payment, accountNumber: e.target.value } })}
                className="w-full"
              />
            </div>
            <h3 className="font-semibold px-4 text-sm">Payment Terms</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <DropDownMap
                label="Term"
                mapOption={paymentTermsCollection}
                value={customer.paymentTerm}
                onChange={(e:any) => setCustomer({ ...customer, paymentTerm: e.target.value })}
              />
            </div>
            <h2 className="font-semibold p-4">
              {" "}
              Warehouse Locations & Address
            </h2>

            <h3 className="font-semibold px-4 text-sm">Address 1</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Street 1"
                value={customer.warehouseLocation.street1}
                onChange={(e:any) => setCustomer({ ...customer, warehouseLocation: { ...customer.warehouseLocation, street1: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Street 2"
                value={customer.warehouseLocation.street2}
                onChange={(e:any) => setCustomer({ ...customer, warehouseLocation: { ...customer.warehouseLocation, street2: e.target.value } })}
                className="w-full"
              />
              <Maininputfield
                label="Suburb"
                value={customer.warehouseLocation.suburb}
                onChange={(e:any) => setCustomer({ ...customer, warehouseLocation: { ...customer.warehouseLocation, suburb: e.target.value } })}
                className="w-full"
              />
              <DropDownMap
                label="State"
                mapOption={stateCollection}
               value={customer.warehouseLocation.state}
                onChange={(e:any) => setCustomer({ ...customer, warehouseLocation: { ...customer.warehouseLocation, state: e.target.value } })}
              />
              <DropDownMap
                label="Country"
                mapOption={countryCollection}
                value={customer.warehouseLocation.country}
                onChange={(e:any) => setCustomer({ ...customer, warehouseLocation: { ...customer.warehouseLocation, country: e.target.value } })}
              />
              <Maininputfield
                label="Post Code"
                value={customer.warehouseLocation.postCode}
                onChange={(e:any) => setCustomer({ ...customer, warehouseLocation: { ...customer.warehouseLocation, postCode: e.target.value } })}
                className="w-full"
              />
            </div>
            <div className="flex justify-end py-2 px-4">
              <Button
                text="Add More Addresses"
                className="!w-fit bg-accent3 !px-4"
              />
            </div>
            <h2 className="font-semibold p-4"> Contract Document</h2>

            <div className="grid grid-cols-3 gap-4 p-4">
              <FileUpload 
              file="Choose Contract Document" 
              value={customer.document}
              onChange={(e:any) => setCustomer({ ...customer, document: e.target.value })}
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 my-4 px-4 mb-20">
            <Button
              text="Save"
              className="!bg-transparent !w-fit border border-[#e5e5e5] !text-black px-8"
            />
            <Button onClick={handleSubmit} text="Create" className="!w-fit px-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
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
const paymentTermsCollection = [
  {
    value: "Net 30",
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
    value: "item4",
  },
];
