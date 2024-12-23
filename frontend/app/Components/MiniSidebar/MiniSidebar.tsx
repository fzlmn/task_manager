"use client";
import IconCheck from "@/public/icons/IconCheck";
import IconFileCheck from "@/public/icons/IconFileCheck";
import IconGrid from "@/public/icons/IconGrid";
import IconStopwatch from "@/public/icons/IconStopwatch";
import IconUsers from "@/public/icons/IconUsers"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useUserContext } from "@/context/userContext";  // Import your context
import IconTimer from "@/public/icons/IconTimer";

function MiniSidebar() {
  const pathname = usePathname();
  const { user } = useUserContext(); // Access the user context

  const getStrokeColor = (link: string) => {
    return pathname === link ? "#9b4dff" : "#9e9e9e";  // Changed to purple color
  };

  const navItems = [
    {
      icon: <IconGrid strokeColor={getStrokeColor("/")} />,
      title: "All",
      link: "/",
    },
    {
      icon: <IconFileCheck strokeColor={getStrokeColor("/completed")} />,
      title: "Completed",
      link: "/completed",
    },
    {
      icon: <IconCheck strokeColor={getStrokeColor("/pending")} />,
      title: "Pending",
      link: "/pending",
    },
    {
      icon: <IconStopwatch strokeColor={getStrokeColor("/overdue")} />,
      title: "Overdue",
      link: "/overdue",
    },
    {
      icon: <IconTimer strokeColor={getStrokeColor("/timer")} />,
      title: "Timer",
      link: "/timer",
    },
    // Conditionally display the "Users" item if the user is an admin
    ...(user.role === "admin" ? [
      {
        icon: <IconUsers strokeColor={getStrokeColor("/admin")} />,
        title: "Users",
        link: "/admin",  // Ensure this matches the correct admin page route
      }
    ] : []),
  ];

  return (
    <div className="basis-[5rem] flex flex-col bg-[#f9f9f9] relative z-10">
      <br /><br /><br /><br /><br />
      <div className="mt-8 flex-1 flex flex-col items-center justify-between">
        <ul className="flex flex-col gap-10">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link href={item.link}>
                {item.icon}
              </Link>

              {/* Hover Tooltip */}
              <span className="u-triangle absolute top-[50%] translate-y-[-50%] left-12 text-xs pointer-events-none text-white bg-[#9b4dff] px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MiniSidebar;
