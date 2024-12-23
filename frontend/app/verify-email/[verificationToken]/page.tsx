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
    <div className="auth-page flex flex-col justify-center items-center bg-purple-50 min-h-screen">
      <div className="bg-white flex flex-col justify-center gap-[1rem] px-[4rem] py-[2rem] rounded-md shadow-lg">
        <h1 className="text-purple-600 text-[2rem]">Verify Your Account</h1>
        <button
          className="px-4 py-2 self-center bg-purple-600 text-white rounded-md hover:bg-purple-700"
          onClick={handleVerification} // Use the async handler to verify
        >
          Verify
        </button>
      </div>
    </div>
  );
}

export default Page;
