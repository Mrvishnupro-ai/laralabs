"use client";

import dynamic from "next/dynamic";

// Dynamically import ChatWidget to avoid SSR issues with localStorage
const ChatWidget = dynamic(() => import("@/components/ChatWidget"), {
  ssr: false,
});

export default function ChatWidgetWrapper() {
  return <ChatWidget />;
}
