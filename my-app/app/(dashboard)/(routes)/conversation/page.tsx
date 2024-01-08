"use client";

import React, { useState } from "react";
import * as z from "zod";
import axios from "axios";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { ChatCompletionRequestMessage } from "openai";
import ChatCompletionRequestMessage from "openai";

import Heading from "@/components/myComps/Heading";
import PromptArea from "@/components/myComps/PromptArea";
import { MessageSquare } from "lucide-react";
import { formSchema } from "./formSchema";
import { toast } from "react-hot-toast";

const ConversationPage = () => {
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
      const userMessage: any = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const responce = await axios.post("/api/conversation", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, responce.data]);

      form.reset();
    } catch (error: any) {
      console.log("⛔ [API_CONVERSATION_ERROR]: ", error);
      toast.error("Something went wrong");
    } finally {
      router.refresh();
    }
  };

  return (
    <main className="not-mobile h-full">
      <Heading
        title="Conversation"
        describtion="OpenAI's most powerful AI conversation model. ChatGPT-3.5 Turbo"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/20"
      />
      <PromptArea
        type="conversation"
        placeholder="Example: Explain, in simple terms, the difference between a SQL and a non-SQL database."
        handleSubmit={onSubmit}
        isLoading={isLoading}
        form={form}
        AIresponses={messages}
      />
    </main>
  );
};

export default ConversationPage;
