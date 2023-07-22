"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    // color: "text-orange-700",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14 gap-6">
          <div className="relative w-16 h-16 mr-4">
            <Image fill alt="Logo" src="/robot-1.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            AI Playground
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route, index) => (
            <Link
              key={route.label + "-" + index}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10 "
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />

                {/* Page Indicator "👉" */}
                {pathname === route.href && (
                  <span className="-translate-y-0.5">{"👉"}</span>
                )}

                <span className={cn("", pathname === route.href ? "pl-2" : "")}>
                  {route.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 pr-2">
        <a target="_blank" href="https://icons8.com/icon/Ojl61yQzoHvx/puzzle">
          Puzzle
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
