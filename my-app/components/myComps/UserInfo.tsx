import React from "react";
import { UserButton } from "@clerk/nextjs";

const UserInfo = () => {
  return (
    <div className="flex justify-between p-8 bg-red-600 gap-6 rounded-b-lg">
      <h3 className="text-2xl text-zinc-200 drop-shadow-md">
        UTH <span className="hidden sm:inline"> - Stamatakis S. </span>
      </h3>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default UserInfo;
