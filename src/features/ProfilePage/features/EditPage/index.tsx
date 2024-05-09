"use client";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineModeEdit } from "react-icons/md";
import { register } from "swiper/element";
import { Calendar } from "react-date-range";
import { BiCalendar } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
const EditPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();
  const [activeGender, setActiveGender] = useState("male");
  const onSubmit = (values: unknown) => {};
  const genders: Array<"male" | "female"> = ["male", "female"];
  const handleCalendarSelect = () => {};
  const handleGender = (gender: "male" | "female") => {
    setActiveGender(gender);
  };
  return (
    <VStack w="100%" p="3">
      <Box position="relative" m="3rem">
        <Avatar
          name="Civ raj"
          w="10rem"
          h="10rem"
          border="1px solid gray"
          rounded="100%"
        />
        <IconButton
          icon={<MdOutlineModeEdit />}
          aria-label="edit"
          position="absolute"
          bottom="0"
          fontSize="2rem"
        />
      </Box>
      <Flex
        direction="column"
        gap="3rem"
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
        w="100%"
        p="2rem"
      >
        <FormControl>
          <FormLabel htmlFor="name" textTransform="uppercase">
            name
          </FormLabel>
          <Input
            variant="underline"
            id="name"
            placeholder="name"
            {...register("name")}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="name" textTransform="uppercase">
            Date of birth
          </FormLabel>
          <HStack w="100%" justify="space-between" my="1rem">
            <Text fontWeight="normal" fontSize="1.4rem">
              10/02/2005
            </Text>

            <Popover>
              <PopoverTrigger>
                <IconButton
                  fontSize="2rem"
                  icon={<BiCalendar />}
                  aria-label="calendar"
                />
              </PopoverTrigger>
              <PopoverContent>
                <Calendar date={new Date()} onChange={handleCalendarSelect} />
              </PopoverContent>
            </Popover>
          </HStack>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="name" textTransform="uppercase">
            Gender
          </FormLabel>
          <HStack
            mt="1rem"
            gap="1rem"
            textTransform="uppercase"
            fontSize="1.2rem"
          >
            {genders.map(el => {
              const isActive = el === activeGender;
              return (
                <Box
                  position="relative"
                  p=".5rem"
                  px="2rem"
                  onClick={() => handleGender(el)}
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
          </HStack>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="name" textTransform="uppercase">
            address
          </FormLabel>
          <Input
            variant="underline"
            id="name"
            w="100%"
            placeholder="Address"
            {...register("name")}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="name" textTransform="uppercase">
            Phone number
          </FormLabel>
          <Input
            variant="underline"
            id="name"
            placeholder="phone number"
            {...register("name")}
          />
        </FormControl>
        <FormControl isDisabled>
          <FormLabel htmlFor="name" textTransform="uppercase">
            Email address
          </FormLabel>
          <Input
            variant="underline"
            id="name"
            placeholder="cyferaj2gmail.com"
            {...register("name")}
          />
        </FormControl>

        <Button
          p="1rem"
          w="100%"
          border="1px solid black"
          rounded="md"
          fontWeight="bold"
          fontSize="1.4rem"
        >
          save
        </Button>
      </Flex>
    </VStack>
  );
};

export default EditPage;
