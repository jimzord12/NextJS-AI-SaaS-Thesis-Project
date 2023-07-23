"use client";

import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const technologies = [
  {
    title: "React",
    image: "/tech/react.png",
    version: "18.2",
    purpose: "User Interface",
  },
  {
    title: "NextJS",
    image: "/tech/nextJS_2.png",
    version: "13.4",
    purpose: "React's Framework",
  },
  {
    title: "TypeScript",
    image: "/tech/typescript.png",
    version: "5.1",
    purpose: "Type Safety",
  },
  {
    title: "Tailwind CSS",
    image: "/tech/tailwind_2.png",
    version: "3.3",
    purpose: "CSS Enchancer",
  },
  {
    title: "Shadcn/ui",
    image: "/tech/shadcn.png",
    version: "0.3",
    purpose: "Comps Lib",
  },
  {
    title: "Clerk",
    image: "/tech/clerk.png",
    version: "4.22",
    purpose: "User Auth",
  },
  {
    title: "Prisma",
    image: "/tech/prisma.png",
    version: "5.0",
    purpose: "ORM (DB)",
  },
  {
    title: "Zod",
    image: "/tech/zod.png",
    version: "3.21",
    purpose: "TS Enchancer",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Employed Technologies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {technologies.map((tech) => (
          <Card
            key={tech.title}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader className="">
              <CardTitle className="flex items-center justify-between gap-x-2">
                <div className="relative h-12 w-12 sm:h-24 sm:w-24">
                  <Image alt={tech.title} fill src={tech.image} />
                </div>
                <div className="flex flex-col gap-y-6 justify-around">
                  <div className="text-white text-[20px] text-right">
                    {tech.version}
                  </div>
                  <div className="text-white text-[20px] text-right">
                    {tech.purpose}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
