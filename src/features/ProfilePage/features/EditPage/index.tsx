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
  Portal,
  Text,
  VStack,
  useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MdOutlineModeEdit } from "react-icons/md";
import { register } from "swiper/element";
import { Calendar } from "react-date-range";
import { zodResolver } from "@hookform/resolvers/zod";

import { BiCalendar } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { IEditForm, editFormSchema } from "./schema";
import dayjs from "dayjs";
import { logger } from "@/utils/logger";
const EditPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors }
  } = useForm<IEditForm>({
    resolver: zodResolver(editFormSchema),
    defaultValues: {
      address: "",
      dob: "",
      email: "cyferaj@gmail.com",
      gender: "male",
      name: "shiv",
      phone: "9803300085"
    }
  });
  const [activeGender, setActiveGender] = useState("male");
  const onSubmit = (values: IEditForm) => {
    logger.log("values", values);
  };
  const genders: Array<"male" | "female"> = ["male", "female"];

  logger.log("errorr", errors);
  return (
    <VStack w="100%" p="1rem">
      <Box position="relative" m="3rem">
        <Avatar
          name="Civ raj"
          w="10rem"
          h="10rem"
          border="1px solid gray"
          rounded="100%"
          fontSize="3rem"
          color="gray.600"
        />
        <Input name="profile" id="profile" type="file" display="none" />
        <Box as="label" bg="red" w="full" h="full" htmlFor="profile">
          <IconButton
            icon={<MdOutlineModeEdit />}
            aria-label="edit"
            position="absolute"
            bottom="0"
            fontSize="2rem"
          />
        </Box>
      </Box>
      <Flex
        direction="column"
        gap="3rem"
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
        w="100%"
        p="1rem"
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
              {getValues("dob") || <Text color="gray.600"> Enter DOB </Text>}
            </Text>

            <Popover isOpen={isOpen} onClose={onClose}>
              <PopoverTrigger>
                <IconButton
                  onClick={onOpen}
                  fontSize="2rem"
                  icon={<BiCalendar />}
                  aria-label="calendar"
                />
              </PopoverTrigger>
              <Portal>
                {" "}<Box position="relative" zIndex="10000" w="full" h="full">
                  {" "}<PopoverContent>
                    <Controller
                      control={control}
                      name="dob"
                      render={({ field: { onChange } }) => {
                        return (
                          <Calendar
                            date={new Date()}
                            onChange={val => {
                              const formatted = dayjs(val).format("MM/DD/YYYY");
                              onChange(formatted);
                              onClose();
                            }}
                          />
                        );
                      }}
                    />
                  </PopoverContent>
                </Box>
              </Portal>
            </Popover>
          </HStack>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="name" textTransform="uppercase">
            Gender
          </FormLabel>
          <Controller
            name="gender"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
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
                        position="relative"
                        p=".5rem"
                        px="2rem"
                        zIndex={0}
                        onClick={() => onChange(el)}
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
              );
            }}
          />
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
            {...register("address")}
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
            {...register("phone")}
          />
        </FormControl>
        <FormControl isDisabled>
          <FormLabel htmlFor="name" textTransform="uppercase">
            Email address
          </FormLabel>
          <Input
            variant="underline"
            placeholder="cyferaj2gmail.com"
            {...register("email")}
          />
        </FormControl>

        <Button
          p="1rem"
          type="submit"
          w="100%"
          border="1px solid black"
          rounded="md"
          fontWeight="bold"
          fontSize="1.4rem"
          variant="submit"
        >
          save
        </Button>
      </Flex>
    </VStack>
  );
};

export default EditPage;
