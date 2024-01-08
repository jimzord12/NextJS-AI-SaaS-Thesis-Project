"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import ChatCompletionRequestMessage from "openai";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { formSchema as convSchema } from "../../app/(dashboard)/(routes)/conversation/formSchema";
import { formSchema as imageSchema } from "../../app/(dashboard)/(routes)/image/formSchema";
// import { formSchema as videoSchema } from "../../app/(dashboard)/(routes)/video/formSchema";
// import { formSchema as musicSchema } from "../../app/(dashboard)/(routes)/music/formSchema";
import { formSchema as codeSchema } from "../../app/(dashboard)/(routes)/code/formSchema";
import { MessageSquare, Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ResponseArea from "./ResponseArea";
import {
  amountOptions,
  resolutionOptions,
} from "../../app/(dashboard)/(routes)/image/formSchema";
import { cn } from "@/lib/utils";

interface PromptAreaProps {
  placeholder: string;
  type: string;
  handleSubmit: any;
  isLoading: boolean;
  form: any;
  AIresponses: ChatCompletionRequestMessage[] | string[] | string;
}

type apiEndpointsType = {
  [key: string]: string;
};

const apiEndpoints: apiEndpointsType = {
  conversation: "/api/conversation",
  image: "/api/image",
  video: "/api/video",
  music: "/api/music",
  code: "/api/code",
};

const PromptArea = ({
  placeholder,
  type,
  handleSubmit: onSubmit,
  isLoading,
  form,
  AIresponses,
}: PromptAreaProps) => {
  const router = useRouter();
  // const [messages, setMessages] = useState(
  //   [] as ChatCompletionRequestMessage[]
  // );
  // Using the "< >" for type annotation
  // const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const largeDeviceClassPicker = () => {
    if (type === "image") return "lg:col-span-6";
  };

  // Event handlers

  return (
    <>
      <section className="px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg border border-amber-300 w-full p-2 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-4"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem
                  className={cn(
                    "col-span-12 ",
                    type === "image" ? "lg:col-span-6" : "lg:col-span-10"
                  )}
                >
                  <FormControl className="m-0 p-0">
                    {/* <Input
                  className="bg-rose-900 text-amber-300 border-0"
                  disabled={isLoading}
                  placeholder="Explain, in simple terms, the difference between a SQL and a non-SQL database"
                  {...field}
                /> */}
                    <Textarea
                      className="bg-rose-900 text-amber-300 border-0 p-2 resize-none hide-scrollbar whitespace-pre-wrap break-words w-full"
                      disabled={isLoading}
                      placeholder={placeholder}
                      {...field}
                      ref={textareaRef}
                      onChange={(e) => {
                        field.onChange(e);
                        if (textareaRef.current) {
                          if (field.value.length > 75) {
                            textareaRef.current.style.height = "150px";
                          } else {
                            textareaRef.current.style.height = "75px";
                          }
                        }
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {type === "image" && (
              <>
                <FormField
                  name="amount"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-2 self-center text-white">
                      <Select
                        disabled={isLoading}
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue defaultValue={field.value} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {amountOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  name="resolution"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-2 self-center text-white">
                      <Select
                        disabled={isLoading}
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue defaultValue={field.value} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {resolutionOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </>
            )}
            <div className="p-4 col-span-12 sm:col-span-2 flex justify-center sm:justify-end">
              <Button
                className="send-btn grow max-w-[100px] min-w-[50px]"
                disabled={isLoading}
              >
                <Send className="send-animation" />
              </Button>
            </div>
          </form>
        </Form>
      </section>
      <ResponseArea
        promptResponceArr={AIresponses}
        type={type}
        isLoading={isLoading}
      />
    </>
  );
};

export default PromptArea;
