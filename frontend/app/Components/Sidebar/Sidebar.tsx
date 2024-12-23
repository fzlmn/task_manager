import React from "react";
import Profile from "../Profile/Profile";

function Sidebar() {

  return (
    <aside className="w-[20rem] h-full bg-[#f9f9f9] flex flex-col border-l border-gray-300">
      {/* User Profile Section */}
      <Profile />
    </aside>
  );
}

export default Sidebar;
