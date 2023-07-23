import { reactChildrenForProps } from "@/commonTypes";

const LandingLayout = ({ children }: reactChildrenForProps) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="p-2 mx-auto max-w-screen-xl h-full w-full">
        {children}
      </div>
    </main>
  );
};

export default LandingLayout;
