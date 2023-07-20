import React from "react";
import { reactChildrenForProps } from "@/commonTypes";
import Navbar from "@/components/myComps/Navbar";
import Sidebar from "@/components/myComps/Sidebar";
import UserInfo from "@/components/myComps/UserInfo";

const DashboardLayout = ({ children }: reactChildrenForProps) => {
  return (
    <div className="h-full relative bg-rose-900">
      <div className="hidden h-full lg:flex lg:flex-col lg:fixed lg:inset-y-0 z-[80] bg-gray-800 ">
        {/* {children} */}
        <UserInfo />
        <Sidebar />
      </div>
      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
