import React from "react";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BotAvatar = () => {
  const { user } = useUser();
  return (
    <Avatar className="h-10 w-10">
      <AvatarImage className="" src="/logo2.png" />
    </Avatar>
  );
};

export default BotAvatar;
