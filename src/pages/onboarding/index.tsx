import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import React from "react";
const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex bg-[#E9EFFF]">
        <div className="sticky top-0 w-full">
          <Sidebar />
        </div>
        <div className="h-screen "></div>
      </div>
      <Footer />
    </>
  );
};
export default Dashboard;
