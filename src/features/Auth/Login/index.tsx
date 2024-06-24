"use client";
import {
  VStack,
  FormControl,
  Button,
  Text,
  useDisclosure,
  useToast,
  FormLabel,
  Input,
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

class ErrorWithMessage {
  constructor(private message: string) {}
}

const Login = () => {
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

  const { isLoading, startLoading, stopLoading } = useLoader();
  const login = async (data: ISigninForm) => {
    startLoading();
    try {
      const res = await signIn({
        username: data.username,
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
        location.replace("/auth/confirm-email?username=" + data.username);
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
          location.replace(productUrl);
          sessionStorage.removeItem("productUrl");
        } else {
          location.replace("/");
        }
      } else {
        location.replace("/");
      }
    } catch (err) {
      handleErrorToast(err);
    } finally {
      stopLoading();
    }
  };
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
          If you already have an account, please fill in the password to login.
        </Text>
        <VStack w="full" gap="2rem">
          <FormControl w="full">
            <FormLabel htmlFor="name" textTransform="uppercase" fontSize="1.2rem">
              username
            </FormLabel>
            <Input
              variant="underline"
              errorBorderColor="red"
              id="name"
              {...register("username")}
            />
            <Text color={"red"} mt="0.4rem">
              {errors.username && errors.username.message}
            </Text>
          </FormControl>
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
            color="var(--text-secondary)"
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
          Login
        </Button>
        <Text
          w="full"
          textAlign="left"
          display="inline-block"
          fontSize="1.2rem"
          mt="1rem"
        >
          Didn't have an account?{" "}
          <Link href="/auth/signup">
            <Text as="span" fontWeight="semibold">
              Signup Here
            </Text>
          </Link>
        </Text>
      </VStack>
    </AuthProvider>
  );
};

export default Login;
