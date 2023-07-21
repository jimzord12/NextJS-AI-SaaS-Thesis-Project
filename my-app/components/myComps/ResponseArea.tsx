import React from "react";
import { ChatCompletionRequestMessage } from "openai";
import { DialogOverlay } from "@radix-ui/react-dialog";
import Empty from "./Empty";
import { FileVideo } from "lucide-react";
import Loader from "./Loader";
import { cn } from "@/lib/utils";

interface ResponseAreaProps {
  promptResponceArr: any;
  isLoading: boolean;
}

const ResponseArea = ({ promptResponceArr, isLoading }: ResponseAreaProps) => {
  return (
    <div className="p-4 pl-8 mt-4 space-y-4 text-white">
      {isLoading && (
        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
          <Loader />
        </div>
      )}
      {promptResponceArr.length === 0 && !isLoading && (
        <Empty label="No Conversations Started" />
      )}
      <div className="flex flex-col-reverse gap-y-4">
        {promptResponceArr.map((singleResp: any) => (
          <div
            className={cn(
              "p-8 w-full flex items-start gap-x-8 rounded-lg",
              promptResponceArr.role === "user"
                ? "bg-rose-900 border border-amber-300/10"
                : "bg-muted"
            )}
            key={singleResp.content}
          >
            {singleResp.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponseArea;
