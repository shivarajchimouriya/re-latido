"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import Loading from "@/app/loading";
import { Center } from "@chakra-ui/react";
import LogoIcon from "@/components/Icons/Logo";
import useHandleErrorToast from "@/hooks/client/useAppToast";

interface IProps {
  children: ReactNode;
}

const ProtectedLayout = ({ children }: IProps) => {
  const handleErrorToast = useHandleErrorToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getUser = async () => {
      try {
        const user = await getCurrentUser();
        setIsAuthenticated(true);
      } catch (error) {
        handleErrorToast(error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  // if (isLoading) {
  //   return (
  //     <Center h="100dvh" w="100vw">
  //       <LogoIcon />
  //     </Center>
  //   );
  // }

  // if (!isLoading && !isAuthenticated) {
  //   redirect("/auth/login");
  // }

  return <> {children} </>;
};

export default ProtectedLayout;
