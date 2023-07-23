import Image from "next/image";
import React from "react";

interface EmptyProps {
  label: string;
  isSettings: boolean;
}

const Empty = ({ label, isSettings = false }: EmptyProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {isSettings && (
        <>
          <div className="max-sm:hidden relative h-[200] w-full">
            <Image
              alt="thanks-img"
              style={{ position: "absolute", left: "400px" }}
              width={200}
              height={200}
              src="/thank_you.png"
            />
          </div>
          <div className="max-sm:hidden flex justify-end w-full rotate-180 scale-y-[-1]">
            <Image
              alt="robot-hand"
              width={500}
              height={500}
              src="/robot-hand-hover-hold.png"
            />
          </div>
        </>
      )}
      <div className="relative h-32 w-32 mt-6 sm:h-60 sm:w-60 sm:mt-24">
        <Image alt="Empty" fill src="/logo2.png" />
      </div>
      <p className="mt-4 text-amber-500 text-sm text-center">{label}</p>
    </div>
  );
};

export default Empty;
