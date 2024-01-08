import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Progressbar from "../../../../components/Progressbar";
import Sidebar from "../../../../components/Sidebar";

const CreateDriver = () => {
  return (
    <>
      <Header />
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
            {/* <div>
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
                <FileUpload />

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
            </div> */}
          </div>
          {/* <div className="mr-4 px-4 rounded-md mt-4 p-4 flex justify-end gap-2">
            <Button
              text="Save"
              className="!bg-transparent !text-[#000] border px-8 !rounded-xl text-sm border-[#032272]"
            />
            <Button text="Create" className="px-8 !rounded-xl text-sm" />
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CreateDriver;
