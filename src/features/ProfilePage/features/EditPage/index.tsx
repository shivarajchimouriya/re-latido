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
  useDisclosure,
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
import { useFetchProfile, useUpdateProfile } from "../../data/useProfile";
import { profile } from "console";
import { IUserProfile } from "@/resources/User/interface";
import EditSkeleton from "@/app/(secondary)/profile/edit/loading";
import useHandleErrorToast from "@/hooks/client/useAppToast";

const EditPage = () => {
  const handleErrorToast = useHandleErrorToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data, isLoading } = useFetchProfile();
  const { mutate, isPending, mutateAsync } = useUpdateProfile();
  const profileData = data?.data;
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<IEditForm>({
    resolver: zodResolver(editFormSchema),

    defaultValues: {
      address: profileData?.address,
      dob: profileData?.DOB,
      email: profileData?.email,
      gender: profileData?.gender as "Male" | "Female",
      name: profileData?.name,
      phone: profileData?.phone,
    },
    values: {
      address: profileData?.address as string,
      dob: profileData?.DOB as string,
      email: profileData?.email as string,
      gender: profileData?.gender as "Male" | "Female",
      name: profileData?.name as string,
      phone: profileData?.phone as string,
    },
  });
  const onSubmit = async (values: IEditForm) => {
    logger.log("values", values);
    const data: Partial<IUserProfile> = {
      address: values.address,
      DOB: values.dob,
      name: values.name,
      phone: values.phone,
    };

    try {
      const res = await mutateAsync(data);
    } catch (err) {
      handleErrorToast(err);
    }
  };
  const genders: Array<"Male" | "Female"> = ["Male", "Female"];

  if (isLoading || !data) return <EditSkeleton />;
  return (
    <VStack w="100%" p="1rem">
      <Box position="relative" m="3rem">
        <Avatar
          name={profileData?.name}
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
              {dayjs(getValues("dob")).format("MM/DD/YYYY") || (
                <Text color="gray.600"> Enter DOB </Text>
              )}
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
                {" "}
                <Box position="relative" zIndex="10000" w="full" h="full">
                  {" "}
                  <PopoverContent>
                    <Controller
                      control={control}
                      name="dob"
                      render={({ field: { onChange } }) => {
                        return (
                          <Calendar
                            date={new Date()}
                            onChange={(val) => {
                              const formatted = dayjs(val).format(
                                "YYYY-MM-DDTHH:mm:ss.SSSZ"
                              );
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
                  {genders.map((el) => {
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
                          {isActive && (
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
                            />
                          )}
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
          isLoading={isPending}
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
