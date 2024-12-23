"use client";
import { useUserContext } from "@/context/userContext";
import React from "react";

interface MainContentLayoutProps {
  children: React.ReactNode;
}

function MainContentLayout({ children }: MainContentLayoutProps) {
  const { user } = useUserContext(); // Destructure for clarity
  const hasSidebar = Boolean(user?._id); // Ensure safe access to `_id`

  return (
    <main
      className={`${
        hasSidebar ? "pr-[20rem]" : "pr-0"
      } pb-[1.5rem] flex h-full relative`}
    >
      {children}
    </main>
  );
}


export default MainContentLayout;
