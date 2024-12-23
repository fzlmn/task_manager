// hooks/useRedirect.tsx
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useRedirect = (redirect: string, role?: string) => {
  const { user, loading } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;  // Wait until the loading state is finished

    if (!user || !user.email || (role && user.role !== role)) {
      router.push(redirect);  // Redirect if user is not logged in or does not have the required role
    }
  }, [user, loading, redirect, role, router]);
};

export default useRedirect;
