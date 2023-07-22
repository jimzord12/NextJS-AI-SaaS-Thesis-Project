import Image from "next/image";
import React from "react";

interface EmptyProps {
  label: string;
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="relative h-32 w-32 mt-6 sm:h-60 sm:w-60 sm:mt-24">
        <Image alt="Empty" fill src="/logo2.png" />
      </div>
      <p className="mt-4 text-amber-500 text-sm text-center">{label}</p>
    </div>
  );
};

export default Empty;
