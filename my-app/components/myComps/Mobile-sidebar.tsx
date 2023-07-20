"use client";

import React /*, { useState, useEffect } */ from "react";

import { Button } from "@/components/ui/button";
import Sidebar from "@/components/myComps/Sidebar";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import withClientSideRendering from "@components/myComps/HOC/withClientSideRendering";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

// *NOTE: This "withClientSideRendering" is just a workaround for handling Hydration errors
// *NOTE: It should not be used often
export default withClientSideRendering(MobileSidebar);
