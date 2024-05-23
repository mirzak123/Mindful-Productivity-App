import { useRouter } from "next/navigation";
import { ComponentType, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { CircularProgress } from "@mui/material";

type WithAuthProps = {};

const withAuth = <P extends WithAuthProps>(
  WrappedComponent: ComponentType<P>,
) => {
  const Wrapper = (props: P) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/login");
      }
    }, [loading, router, user]);

    if (loading) {
      return <CircularProgress />;
    }

    return user ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default withAuth;
