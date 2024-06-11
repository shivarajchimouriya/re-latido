"use client";
import {
  VStack,
  FormControl,
  Button,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "aws-amplify/auth";
import AuthProvider from "@/providers/AuthProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISigninForm, signInFormSchema } from "./schema";
import { useRouter } from "next/navigation";
import PasswordField from "@/components/Form/PasswordField/index.";
import { useLoader } from "@/hooks/client/useLoader";
import Link from "next/link";
import useHandleErrorToast from "@/hooks/client/useAppToast";
import Toast from "@/components/Toast";
import { logger } from "@/utils/logger";

interface IProps {
  userName: string;
}

class ErrorWithMessage {
  constructor(private message: string) {}
}

const Login = ({ userName }: IProps) => {
  const handleErrorToast = useHandleErrorToast();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ISigninForm>({
    resolver: zodResolver(signInFormSchema),
  });

  const toast = useToast();
  const router = useRouter();
  const { isLoading, startLoading, stopLoading } = useLoader();
  const login = async (data: ISigninForm) => {
    startLoading();
    try {
      const res = await signIn({
        username: userName,
        password: data.passoword,
      });
      logger.log("response: ", res);

      if (!res.isSignedIn && res.nextStep.signInStep === "CONFIRM_SIGN_UP") {
        toast({
          position: "top",
          duration: 3000,
          render: ({ onClose }) => {
            return (
              <Toast
                status="error"
                onClose={onClose}
                message={"Please confirm your email."}
              />
            );
          },
        });
        router.replace("/auth/confirm-email?username=" + userName);
        return;
      }

      if (res?.isSignedIn) {
        toast({
          position: "top",
          duration: 3000,
          render: ({ onClose }) => {
            return (
              <Toast
                status="success"
                onClose={onClose}
                message={"Login successful."}
              />
            );
          },
        });
        const productUrl = sessionStorage.getItem("productUrl");
        if (productUrl) {
          router.replace(productUrl);
          sessionStorage.removeItem("productUrl");
        } else {
          router.replace("/");
        }
      } else {
        router.replace("/");
      }
    } catch (err) {
      handleErrorToast(err);
    } finally {
      stopLoading();
    }
  };

  const { isOpen, onClose, onToggle } = useDisclosure();
  const hasError = !!errors.passoword?.message;
  return (
    <AuthProvider>
      <VStack
        w="full"
        p="2rem"
        alignItems="center"
        gap="2rem"
        as="form"
        onSubmit={handleSubmit(login)}
      >
        <Text fontSize="3rem" fontWeight={"bold"} w="full">
          Login
        </Text>
        <Text fontSize="1.2rem" color="#707580">
          Hi{" "}
          <Text as="span" fontWeight="semibold">
            {" "}
            {userName}{" "}
          </Text>{" "}
          , you already have an account here, please fill in the password to
          login to Latido
        </Text>
        <VStack w="full">
          <FormControl w="full" isInvalid={hasError}>
            <PasswordField
              label="password"
              variant={hasError ? "error" : "underline"}
              id="password"
              fontSize="1.4rem"
              error={errors.passoword?.message}
              {...register("passoword")}
            />
          </FormControl>
          <Text
            w="full"
            textAlign="right"
            textTransform="capitalize"
            fontSize="1.2rem"
            mt="1rem"
          >
            <Link href="/auth/forget-password">forget password?</Link>
          </Text>
        </VStack>

        <Button
          disabled={isLoading}
          variant="submit"
          type="submit"
          isLoading={isLoading}
          opacity={isLoading ? 0.6 : 1}
          textTransform="capitalize"
        >
          proceed
        </Button>
      </VStack>
    </AuthProvider>
  );
};

export default Login;
