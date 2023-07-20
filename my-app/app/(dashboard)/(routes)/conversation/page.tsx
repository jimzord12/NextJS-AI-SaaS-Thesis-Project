import React from "react";

import Heading from "@/components/myComps/Heading";
import { MessageSquare } from "lucide-react";

const ConversationPage = () => {
  return (
    <Heading
      title="Conversation"
      describtion="OpenAI's most powerful AI conversation model. ChatGPT-3.5"
      icon={MessageSquare}
      iconColor="text-violet-500"
      bgColor="bg-violet-500/20"
    />
  );
};

export default ConversationPage;
