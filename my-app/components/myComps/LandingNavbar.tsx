"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between text-white">
      <Link href="/" className="flex items-center">
        <div className="relative h-12 w-12 sm:h-16 sm:w-16 mr-4">
          <Image alt="Logo-Robot" fill src="/robot-1.png" />
        </div>
        <h1
          className={cn(
            "text-md sm:text-2xl font-bold text-white",
            font.className
          )}
        >
          AI Playground
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="rounded-full text-sm sm:text-lg get-started-btn drop-shadow-sm"
          >
            Get Started!
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
