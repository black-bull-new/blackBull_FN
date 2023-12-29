import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import VehiDetails from "../../../../components/VehiDetails";

const VehicleList = () => {
  return (
    <>
      <Header />
      <div className="flex bg-[#E9EFFF]">
        <div className="sticky top-0">
          <Sidebar />
        </div>
        <div className="ml-[316px] w-full mt-4">
          <VehiDetails />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default VehicleList;
