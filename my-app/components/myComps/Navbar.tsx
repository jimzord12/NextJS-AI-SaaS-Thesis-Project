import React from "react";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center p-4 bg-sky-500 min-h-[95px] rounded-b-2xl drop-shadow-xl">
      <Button variant="ghost" size="icon" className="lg:hidden">
        <Menu />
      </Button>
    </div>
  );
};

export default Navbar;
