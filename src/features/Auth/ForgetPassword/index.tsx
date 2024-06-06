"use client";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { resetPassword } from "aws-amplify/auth";
import { useForm } from "react-hook-form";
import { IForgetPasswordForm, forgetPasswordSchema } from "./schema";
import { logger } from "@/utils/logger";
import { useRouter } from "next/navigation";
import { useLoader } from "@/hooks/client/useLoader";

const ForgetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<
    IForgetPasswordForm
  >({
    resolver: zodResolver(forgetPasswordSchema)
  });
  const { isLoading, startLoading, stopLoading } = useLoader();
  const router = useRouter();
  const onSubmit = async (data: IForgetPasswordForm) => {
    startLoading();
    try {
      const res = await resetPassword({ username: data.username });
      router.replace("/auth/forget-password/confirm");
    } catch (error) {
      logger.log("Error", error);
    } finally {
      stopLoading();
    }
  };
  return (
    <VStack w="full" p="1rem" align="start">
      <Text fontSize="3xl" fontWeight="bold">
        Forgot your password?
      </Text>

      <VStack w="full" as="form" onSubmit={handleSubmit(onSubmit)} gap="3rem">
        <FormControl w="full">
          <FormLabel>username</FormLabel>
          <Input {...register("username")} />
          <Text color="error" mt="1rem">
            We'll never share your email.
          </Text>
        </FormControl>

        <Button
          variant="submit"
          type="submit"
          textTransform="uppercase"
          fontWeight="bold"
          disabled={isLoading}
          isLoading={isLoading}
        >
          send otp
        </Button>
      </VStack>
    </VStack>
  );
};

export default ForgetPassword;
