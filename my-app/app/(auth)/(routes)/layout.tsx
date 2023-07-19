import React from "react";
import { reactChildrenForProps } from "@/commonTypes";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AuthLayout = ({ children }: reactChildrenForProps) => {
  return (
    <>
      <div className="flex items-center justify-center h-5/6">{children}</div>
      <div className="flex items-center justify-center h-1/6">
        <Link href="/">
          <Button>Home Page Bus</Button>
        </Link>
      </div>
    </>
  );
};

export default AuthLayout;
