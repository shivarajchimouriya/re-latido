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

const ForgetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<
    IForgetPasswordForm
  >({
    resolver: zodResolver(forgetPasswordSchema)
  });

  const onSubmit = async (data: IForgetPasswordForm) => {
    try {
      const res = await resetPassword({ username: data.username });
      logger.log("res", res);
    } catch (error) {
      logger.log("Error", error);
    }
  };
  logger.log(errors);
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
        >
          send otp
        </Button>
      </VStack>
    </VStack>
  );
};

export default ForgetPassword;
