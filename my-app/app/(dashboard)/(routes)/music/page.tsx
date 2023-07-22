"use client";

import React, { useState } from "react";
import * as z from "zod";
import axios from "axios";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Heading from "@/components/myComps/Heading";
import PromptArea from "@/components/myComps/PromptArea";
import { Music } from "lucide-react";
import { formSchema } from "./formSchema";

const MusicPage = () => {
  const [music, setMusic] = useState<string | undefined>("");
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMusic(undefined);

      const responce = await axios.post("/api/music", values);

      setMusic(responce.data.audio);
      form.reset();
    } catch (error: any) {
      console.log("⛔ [API_MUSIC_ERROR]: ", error);
    } finally {
      router.refresh();
    }
  };

  return (
    <main className="not-mobile h-full">
      <Heading
        title="Music Generation"
        describtion="Transform text to music with the power of AI."
        icon={Music}
        iconColor="text-emerald-400"
        bgColor="bg-emerald-500/20"
      />
      <PromptArea
        type="music"
        placeholder="Example: Funky Jazz."
        handleSubmit={onSubmit}
        isLoading={isLoading}
        form={form}
        AIresponses={music === undefined ? "" : music}
      />
    </main>
  );
};

export default MusicPage;
