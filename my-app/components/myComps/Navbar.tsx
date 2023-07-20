import React from "react";

import MobileSidebar from "./Mobile-sidebar";
import UserInfo from "./UserInfo";

const Navbar = () => {
  return (
    <div className="flex items-center p-4 bg-sky-500 min-h-[95px] rounded-b-2xl drop-shadow-xl">
      <h2 className="hidden lg:inline lg:ml-[350px]  text-3xl text-white">
        This is the Navigation Bar!
      </h2>
      <MobileSidebar />
      <div className="lg:hidden absolute inset-y-0 right-0 shrink">
        <UserInfo />
      </div>
    </div>
  );
};

export default Navbar;
