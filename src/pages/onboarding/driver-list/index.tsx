import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import DriverDetails from "../../../../components/DriverDetails";

const DriverList = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="flex bg-[#E9EFFF]">
        <div className="sticky top-0">
          <Sidebar />
        </div>
        <div className="ml-[316px] w-full mt-4">
          <DriverDetails />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DriverList;
