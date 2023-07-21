"use client";

import React from "react";
import Heading from "@/components/myComps/Heading";
import { MessageSquare } from "lucide-react";
import PromptArea from "@/components/myComps/PromptArea";

const ConversationPage = () => {
  return (
    <main className="not-mobile">
      <Heading
        title="Conversation"
        describtion="OpenAI's most powerful AI conversation model. ChatGPT-3.5 Turbo"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/20"
      />
      <PromptArea placeholder="Example: Explain, in simple terms, the difference between a SQL and a non-SQL database." />
    </main>
  );
};

export default ConversationPage;
