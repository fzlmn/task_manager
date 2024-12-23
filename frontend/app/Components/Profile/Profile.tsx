"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import React from "react";

function Profile() {
  const { user } = useUserContext();
  const { tasks, activeTasks, completedTasks, openProfileModal } = useTasks();

  return (
    <div className="m-6">
      <div
        className="px-2 py-4 flex items-center gap-3 bg-[#EDE9FE]/20 rounded-[0.8rem]
        hover:bg-[#EDE9FE]/50 transition duration-300 ease-in-out cursor-pointer border-2 border-transparent hover:border-white"
        onClick={openProfileModal}
      >
        <div>
          <h1 className="flex flex-col text-xl">
            <span className="font-medium">
              Hello, <strong>{user?.name}</strong>
            </span>
          </h1>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-8">
        {/* Each item is now on its own line */}
        <div className="text-gray-500">
          <p>Total Tasks:</p>
          <p className="pl-4 relative flex gap-2">
            <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-[#8B5CF6] rounded-[5px]"></span>
            <span className="font-medium text-4xl text-[#292524]">
              {tasks.length}
            </span>
          </p>
        </div>

        <div className="text-gray-500">
          <p>In Progress:</p>
          <p className="pl-4 relative flex gap-2">
            <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-[#6D28D9] rounded-[5px]"></span>
            <span className="font-medium text-4xl text-[#292524]">
              {activeTasks.length}
            </span>
          </p>
        </div>

        <div className="text-gray-500">
          <p>Open Tasks:</p>
          <p className="pl-4 relative flex gap-2">
            <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-[#9333EA] rounded-[5px]"></span>
            <span className="font-medium text-4xl text-[#292524]">
              {activeTasks.length}
            </span>
          </p>
        </div>

        <div className="text-gray-500">
          <p>Completed:</p>
          <p className="pl-4 relative flex gap-2">
            <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-[#4ADE80] rounded-[5px]"></span>
            <span className="font-medium text-4xl text-[#292524]">
              {completedTasks.length}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
