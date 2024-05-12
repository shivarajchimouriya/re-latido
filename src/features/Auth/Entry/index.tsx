"use client";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

const Entry = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

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

      <FormControl w="full">
        <FormLabel htmlFor="name" textTransform="capitalize">
          username
        </FormLabel>
        <Input variant="underline" id="name" {...register("name")} />
      </FormControl>

      <Button
        mt="3rem"
        p="1rem"
        w="100%"
        border="1px solid black"
        rounded="md"
        fontWeight="bold"
        fontSize="1.4rem"
        bg="black"
        color="white"
      >
        proceed
      </Button>
    </VStack>
  );
};

export default Entry;
