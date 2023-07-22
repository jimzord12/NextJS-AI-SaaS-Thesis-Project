"use client";

import React, { useState } from "react";
import * as z from "zod";
import axios from "axios";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Heading from "@/components/myComps/Heading";
import PromptArea from "@/components/myComps/PromptArea";
import { VideoIcon } from "lucide-react";
import { formSchema } from "./formSchema";

const VideoPage = () => {
  const [video, setVideo] = useState<string | undefined>("");
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
      setVideo(undefined);

      const responce = await axios.post("/api/video", values);

      setVideo(responce.data[0]);
      form.reset();
    } catch (error: any) {
      console.log("⛔ [API_VIDEO_ERROR]: ", error);
    } finally {
      router.refresh();
    }
  };

  return (
    <main className="not-mobile h-full">
      <Heading
        title="Video Generation"
        describtion="Create Videos with the power of AI."
        icon={VideoIcon}
        iconColor="text-orange-400"
        bgColor="bg-cyan-500/20"
      />
      <PromptArea
        type="video"
        placeholder="Example: Astronaut drinking beer on the moon."
        handleSubmit={onSubmit}
        isLoading={isLoading}
        form={form}
        AIresponses={video === undefined ? "" : video}
      />
    </main>
  );
};

export default VideoPage;
