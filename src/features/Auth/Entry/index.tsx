"use client";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack
} from "@chakra-ui/react";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUserrCheck } from "./hooks/useFormSubmit";

const Entry = () => {
  interface IFormValues {
    username: string;
  }

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<IFormValues>();
  const router = useRouter();
  const { mutateAsync, isPending } = useUserrCheck();
  const onSubmit: SubmitHandler<IFormValues> = async data => {
    logger.log("data", data);
    try {
      const res = await mutateAsync({ username: data.username });
      logger.log("res", res);
      router.push(`/auth/login?username=${data.username}`);
    } catch (error) {
      router.push(`/auth/signup?username=${data.username}`);
    }
  };

  return (
    <VStack w="full" p="2rem" alignItems="center" gap="2rem">
      <Text fontSize="3rem" fontWeight={"bold"} w="full">
        {" "}Login /Signup{" "}
      </Text>

      <Text fontSize="1.2rem" color="#707580">
        If you are a new User please enter a Username you would like to have in
        Latido’s platform, and if you already have an account here please enter
        your Username to login.
      </Text>
      <Box w="full" as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl w="full">
          <FormLabel htmlFor="name" textTransform="capitalize">
            username
          </FormLabel>
          <Input variant="underline" id="name" {...register("username")} />
          <Text color={"red"}>
            {" "}{errors.username && errors.username.message}
          </Text>
        </FormControl>

        <Button
          mt="3rem"
          p="1rem"
          w="100%"
          border="1px solid black"
          rounded="md"
          fontWeight="bold"
          fontSize="1.4rem"
          type="submit"
          bg="black"
          color="white"
          isLoading={isPending}
        >
          proceed
        </Button>
      </Box>
    </VStack>
  );
};

export default Entry;
