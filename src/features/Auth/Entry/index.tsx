"use client";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUserrCheck } from "./hooks/useFormSubmit";
import Toast from "@/components/Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IUsernameForm,
  usernameFormSchema,
} from "@/features/Auth/Entry/schema";

const Entry = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IUsernameForm>({
    resolver: zodResolver(usernameFormSchema),
  });
  const router = useRouter();
  const toast = useToast();
  const { mutateAsync, isPending } = useUserrCheck();

  const onSubmit: SubmitHandler<IUsernameForm> = async (data) => {
    if (!data.username) {
      toast({
        position: "top",
        render: ({ onClose }) => {
          return (
            <Toast
              status="error"
              onClose={onClose}
              message="Please enter username"
            />
          );
        },
      });
      return;
    }
    try {
      const res = await mutateAsync({ username: data.username });
      router.replace(`/auth/login?username=${data.username}`);
    } catch (error) {
      router.replace(`/auth/signup?username=${data.username}`);
    }
  };

  return (
    <VStack w="full" p="2rem" alignItems="center" gap="2rem">
      <Text fontSize="3rem" fontWeight={"bold"} w="full">
        {" "}
        Login /Signup{" "}
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
            {" "}
            {errors.username && errors.username.message}
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
          textTransform="capitalize"
          isLoading={isPending}
          disabled={isPending}
          opacity={isPending ? 0.6 : 1}
        >
          proceed
        </Button>
      </Box>
    </VStack>
  );
};

export default Entry;
