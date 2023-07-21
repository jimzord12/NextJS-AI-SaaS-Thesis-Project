import React, { useState } from "react";
import axios from "axios";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChatCompletionRequestMessage } from "openai";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "../../app/(dashboard)/(routes)/conversation/formSchema";
import { MessageSquare, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import ResponseArea from "./ResponseArea";

interface PromptAreaProps {
  placeholder: string;
}

const PromptArea = ({ placeholder }: PromptAreaProps) => {
  const router = useRouter();
  const [messages, setMessages] = useState(
    [] as ChatCompletionRequestMessage[]
  );
  // Using the "< >" for type annotation
  // const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

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

      const responce = await axios.post("/api/conversation");
      setMessages((current) => [...current, userMessage, responce.data]);

      form.reset();
    } catch (error: any) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <>
      <section className="px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg border border-amber-300 w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-8"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
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
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="p-4 col-span-2 send-btn max-w-[100px] min-w-[50px]">
              <Send className="send-animation" />
            </Button>
          </form>
        </Form>
      </section>
      <ResponseArea promptResponceArr={messages} isLoading={isLoading} />
    </>
  );
};

export default PromptArea;
