"use client";
import { useUserContext } from "@/context/userContext";
import React from "react";

interface PageProps {
  params: Promise<{ verificationToken: string }>; // Make sure params is a Promise
}

function Page({ params }: PageProps) {
  const { verifyUser } = useUserContext();

  // Resolve the promise and get verificationToken
  const handleVerification = async () => {
    try {
      const resolvedParams = await params; // Resolving the promise to get the value
      const { verificationToken } = resolvedParams;

      verifyUser(verificationToken);
    } catch (error) {
      console.error("Error resolving verification token:", error);
    }
  };

  return (
    <div className="auth-page flex flex-col justify-center items-center">
      <div className="bg-white flex flex-col justify-center gap-[1rem] px-[4rem] py-[2rem] rounded-md">
        <h1 className="text-[#999] text-[2rem]">Verify Your Account</h1>
        <button
          className="px-4 py-2 self-center bg-blue-500 text-white rounded-md"
          onClick={handleVerification} // Use the async handler to verify
        >
          Verify
        </button>
      </div>
    </div>
  );
}

export default Page;
