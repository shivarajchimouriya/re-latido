"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { IForm, formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

const ShippingDetails = () => {
  const {
    handleSubmit,
    control,
    getValues,
    register,
    formState: { errors, isSubmitting }
  } = useForm<IForm>({ resolver: zodResolver(formSchema) });
  return (
    <VStack w="full" align="start">
      <Box textTransform="uppercase" fontSize="3xl" p="1rem" w="full">
        <Text> shippin </Text>
        <Text fontWeight="bold"> DEtails </Text>
      </Box>

      <VStack spacing="2rem" w="full" p="1rem">
        <FormControl w="full">
          <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
            full name
          </FormLabel>
          <Input variant="underline" id="name" {...register("fullName")} />
        </FormControl>

        <FormControl w="full">
          <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
            phone
          </FormLabel>
          <Input variant="underline" id="name" {...register("phone")} />
        </FormControl>

        <FormControl w="full">
          <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
            country
          </FormLabel>
          <Input variant="underline" id="name" {...register("country")} />
        </FormControl>

        <FormControl w="full">
          <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
            city
          </FormLabel>
          <Input variant="underline" id="name" {...register("city")} />
        </FormControl>

        <FormControl w="full">
          <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
            address
          </FormLabel>
          <Input variant="underline" id="name" {...register("address")} />
        </FormControl>

        <FormControl w="full">
          <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
            landmark
          </FormLabel>
          <Input variant="underline" id="name" {...register("landmark")} />
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
          next
        </Button>
      </VStack>
    </VStack>
  );
};

export default ShippingDetails;
