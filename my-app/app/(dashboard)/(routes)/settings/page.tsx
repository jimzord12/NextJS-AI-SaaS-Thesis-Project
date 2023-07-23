"use client";

import React, { useState } from "react";
import Heading from "@/components/myComps/Heading";
import { Settings } from "lucide-react";
import PromptArea from "@/components/myComps/PromptArea";
import { ChatCompletionRequestMessage } from "openai";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { formSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Empty from "@/components/myComps/Empty";
import Image from "next/image";

const SettingsPage = () => {
  const [messages, setMessages] = useState(
    [] as ChatCompletionRequestMessage[]
  );
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(
      "🧪 The form' values that are going to be submitted to ChatGPT"
    );
    console.log(values);
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const responce = await axios.post("/api/code", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, responce.data]);

      form.reset();
    } catch (error: any) {
      console.log("⛔ [API_SETTINGS_ERROR]: ", error);
    } finally {
      router.refresh();
    }
  };

  return (
    <main className="not-mobile h-full">
      <Heading
        title="Settings (Under Developement 👨‍💻)"
        describtion="In the future more features can be added here."
        icon={Settings}
        iconColor="text-stone-300"
        bgColor="bg-stone-500/20"
      />
      <Empty
        label="Thank you for evaluating my Application."
        isSettings={true}
      />
      {/* <PromptArea
        type="code"
        placeholder="Example: Create a CSS animation that upon hover, it will scale the specified HTML element by a little."
        handleSubmit={onSubmit}
        isLoading={isLoading}
        form={form}
        AIresponses={messages}
      /> */}
    </main>
  );
};

export default SettingsPage;
