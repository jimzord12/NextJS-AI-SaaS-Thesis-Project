"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-12 sm:py-36 text-center space-y-10">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        {" "}
        Utilize the Power of AI
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        <TypewriterComponent
          options={{
            strings: [
              "Chatbot.",
              "Image Generation.",
              "Code Generation.",
              "Music Generation.",
              "Video Generation.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Become x10 more productive by utilizing the power of AI.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="hero"
            size="superLg"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl try-out-btn"
          >
            Give it a try!
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal mt-10">
        This Project was created by <strong>Stavros Stamatakis</strong>
        <br />
        to test the Azure and AWS Cloud Services.
      </div>
      <div className="relative m-auto h-32 w-32 sm:h-64 sm:w-64">
        <Link href="https://www.uth.gr/en" target="blank">
          <Image alt="Logo-Robot" fill src="/logo2.png" />
        </Link>
      </div>
    </div>
  );
};

export default LandingHero;
