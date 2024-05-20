"use client";
import { logger } from "@/utils/logger";
import { signUp } from "aws-amplify/auth";

import {
  Box,
  Button,
  FocusLock,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
  useDisclosure
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { Controller, Form, useForm } from "react-hook-form";
import { BiCalendar } from "react-icons/bi";
import { MdEditNotifications } from "react-icons/md";
import AuthProvider from "@/providers/AuthProvider";

const Signup = () => {
  const {
    handleSubmit,
    control,
    getValues,
    register,
    formState: { errors, isSubmitting }
  } = useForm();
  const [activeGender, setActiveGender] = useState("male");
  const { isOpen, onClose, onOpen } = useDisclosure();

  const genders: Array<"male" | "female" | "other"> = [
    "male",
    "female",
    "other"
  ];
  const handleGender = (gender: "male" | "female" | "other") => {
    setActiveGender(gender);
  };

  const handleCalendarChange = (values: Date) => {
    logger.log("values", values);
  };

  const formSubmit = () => {
    signUp({
      username: "shivraaz45@gmail.com",
      password: "Axios@123",
      options: {
        userAttributes: {
          name: "shiv"
        }
      }
    });
  };

  return (
    <AuthProvider>
      <VStack w="full" p="2rem">
        <Text fontSize="3rem" fontWeight={"bold"} w="full" py="2rem">
          Signup
        </Text>
        <Button onClick={formSubmit}>go in</Button>
        <VStack
          w="full"
          gap="3rem"
          as="form"
          onSubmit={handleSubmit(formSubmit)}
        >
          <FormControl w="full">
            <FormLabel htmlFor="name" fontSize="fl" textTransform="uppercase">
              fullname
            </FormLabel>
            <Input variant="underline" id="name" {...register("name")} />
          </FormControl>

          <FormControl w="full">
            <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
              address
            </FormLabel>
            <Input variant="underline" id="name" {...register("name")} />
          </FormControl>

          <FormControl w="full">
            <FormLabel fontSize="fl" htmlFor="gender" textTransform="uppercase">
              gender
            </FormLabel>
            <Controller
              name="gender"
              control={control}
              render={({ field: { onChange, value } }) =>
                <HStack
                  mt="1rem"
                  gap="1rem"
                  textTransform="uppercase"
                  fontSize="1.2rem"
                >
                  {genders.map(el => {
                    const isActive = el === value;
                    return (
                      <Box
                        key={el}
                        position="relative"
                        p=".5rem"
                        px="2rem"
                        onClick={() => {
                          onChange(el);
                          const values = getValues();
                          logger.log("values", values);
                          handleGender(el);
                        }}
                      >
                        <Text
                          color={isActive ? "white" : ""}
                          transitionDuration=".4s"
                        >
                          {el}
                        </Text>
                        <AnimatePresence>
                          {isActive &&
                            <Box
                              layoutId="gender"
                              rounded="md"
                              as={motion.div}
                              position="absolute"
                              inset="0"
                              w="full"
                              h="full"
                              bg="black"
                              isolation="isolate"
                              zIndex="-1"
                            />}
                        </AnimatePresence>
                      </Box>
                    );
                  })}
                </HStack>}
            />
          </FormControl>

          <FormControl w="full">
            <FormLabel htmlFor="name" textTransform="uppercase" fontSize="fl">
              date of birth
            </FormLabel>
            <Popover
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              closeOnBlur={false}
              isLazy
            >
              <PopoverTrigger>
                <HStack w="full" justify="space-between">
                  <Text fontSize="1.2rem">2023/05/90</Text>{" "}
                  <IconButton
                    fontSize="2rem"
                    icon={<BiCalendar />}
                    aria-label="calendar"
                  />
                </HStack>
              </PopoverTrigger>

              <PopoverContent p={5}>
                <Box zIndex={"1000000000"}>
                  <Controller
                    control={control}
                    name="date_of_birth"
                    render={({ field: { onChange } }) => {
                      return (
                        <Calendar
                          onChange={val => {
                            onChange(val.toString());
                            onClose();
                          }}
                        />
                      );
                    }}
                  />
                </Box>
              </PopoverContent>
            </Popover>
          </FormControl>

          <FormControl w="full">
            <FormLabel htmlFor="name" fontSize="fl" textTransform="uppercase">
              Address
            </FormLabel>
            <Input variant="underline" id="name" {...register("address")} />
          </FormControl>

          <FormControl w="full">
            <FormLabel htmlFor="name" fontSize="fl" textTransform="uppercase">
              phone number
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
            Create account
          </Button>
        </VStack>
      </VStack>
    </AuthProvider>
  );
};

export default Signup;
