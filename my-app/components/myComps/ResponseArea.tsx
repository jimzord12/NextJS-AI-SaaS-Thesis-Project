import React, { useState } from "react";
import Empty from "./Empty";
import Loader from "./Loader";
import { cn } from "@/lib/utils";
import UserAvatar from "./UserAvatar";
import BotAvatar from "./BotAvatar";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

interface ResponseAreaProps {
  promptResponceArr: any[] | string;
  isLoading: boolean;
  type: string;
}

type featureCategs = {
  [key: string]: string;
};

const features: featureCategs = {
  conversation: "conversation",
  image: "image",
  video: "video",
  music: "music",
  code: "code",
};

const ResponseArea = ({
  promptResponceArr, //messages in Video Tutorial
  isLoading,
  type,
}: ResponseAreaProps) => {
  return (
    <div className="p-4 lg:mx-4 mt-4 space-y-4 text-white">
      {isLoading && (
        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-lime-700">
          <Loader />
        </div>
      )}
      {promptResponceArr.length === 0 && !isLoading && (
        <Empty label="No Available Responses" />
      )}
      {/* CONVERSATION or CODE */}
      {(type === features.conversation || type === features.code) && (
        <div className="flex flex-col-reverse gap-y-4">
          {Array.isArray(promptResponceArr) &&
            promptResponceArr.map((singleResp: any) => (
              <div
                className={cn(
                  "overflow-auto p-8 w-full flex flex-col sm:flex-row sm:gap-x-8 items-start gap-y-4 rounded-lg",
                  singleResp.role === "user"
                    ? "bg-rose-900 border border-amber-300/25"
                    : "bg-lime-700"
                )}
                key={singleResp.content}
              >
                <div>
                  {singleResp.role === "user" ? <UserAvatar /> : <BotAvatar />}
                </div>
                <div className="overflow-auto">
                  {/* CONVERSATION */}
                  {type === features.conversation && singleResp.content}
                  {/* CODE GENERATION */}
                  {type === features.code && (
                    <ReactMarkdown
                      components={{
                        pre: ({ node, ...props }) => (
                          <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                            <pre {...props} />
                          </div>
                        ),
                        code: ({ node, ...props }) => (
                          <code
                            className="bg-black/10 rounded-lg p-1"
                            {...props}
                          />
                        ),
                      }}
                      className="overflow-auto text-sm leading-7"
                    >
                      {singleResp.content || ""}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            ))}
        </div>
      )}

      {/* IMAGE */}
      {type === "image" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {Array.isArray(promptResponceArr) &&
            promptResponceArr.map((src) => (
              <Card key={src} className="rounded-lg overflow-hidden">
                <div className="relative aspect-square">
                  <Image alt="Image" fill src={src} />
                </div>
                <CardFooter className="p-2">
                  <Button
                    variant="secondary"
                    className="w-full"
                    hover
                    onClick={() => window.open(src)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      )}

      {/* MUSIC */}
      {type === "music" &&
        promptResponceArr &&
        typeof promptResponceArr === "string" && (
          <audio controls className="w-full mt-8">
            <source src={promptResponceArr} />
          </audio>
        )}

      {/* VIDEO */}
      {type === "video" &&
        promptResponceArr &&
        typeof promptResponceArr === "string" && (
          <video
            controls
            className="w-full aspect-video mt-8 rounded-lg  border bg-black"
          >
            <source src={promptResponceArr} />
          </video>
        )}
    </div>
  );
};

export default ResponseArea;
