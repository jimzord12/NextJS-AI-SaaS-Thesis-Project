import Image from "next/image";
import React from "react";

interface EmptyProps {
  label: string;
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-60 w-60">
        <Image alt="Empty" fill src="/logo2.png" />
      </div>
      <p className="mt-4 text-amber-500 text-sm text-center">{label}</p>
    </div>
  );
};

export default Empty;
