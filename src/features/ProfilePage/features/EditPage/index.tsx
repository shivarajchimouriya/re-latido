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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
  useToast,
} from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
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
import Toast from "@/components/Toast";
import { useRouter } from "next/navigation";
import ImagePlayground from "./Collections/components/ImagePlayground";
import { appColor } from "@/theme/foundations/colors";
import ImageModal from "./Collections/components/ImageModal";
import { validateFile } from "@/utils/misc";

const EditPage = () => {
  const toast = useToast();
  const router = useRouter();
  const handleErrorToast = useHandleErrorToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenImage,
    onClose: onCloseImage,
    onOpen: onOpenImage,
  } = useDisclosure();
  const { data, isLoading } = useFetchProfile();
  const { mutate, isPending, mutateAsync } = useUpdateProfile();

  const [image, setImage] = useState<string>();

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

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (!file) {
      return null;
    }
    if (validateFile(file)) {
      const url = window?.URL?.createObjectURL(file);
      setImage(url);
      onOpenImage();
    } else {
      toast({
        position: "top",
        duration: 3000,
        render: ({ onClose }) => {
          return (
            <Toast
              status="error"
              onClose={onClose}
              message="Pleaser choose image file"
            />
          );
        },
      });
    }
  };

  const handleImageSubmit = async (imgUrl: string) => {
    const res = await mutateAsync({
      profile_image: imgUrl,
    });
    if (res?.data?.profile_image) {
      toast({
        position: "top",
        duration: 3000,
        render: ({ onClose }) => {
          return (
            <Toast status="success" onClose={onClose} message={res?.message} />
          );
        },
      });
    } else {
      toast({
        position: "top",
        duration: 3000,
        render: ({ onClose }) => {
          return (
            <Toast
              status="error"
              onClose={onClose}
              message={res?.message || "Something went wrong"}
            />
          );
        },
      });
    }

    if (profileData) {
      profileData.profile_image = res?.data?.profile_image || "";
    }

    onCloseImage();
  };

  const onSubmit = async (values: IEditForm) => {
    const data: Partial<IUserProfile> = {
      address: values.address,
      DOB: values.dob,
      name: values.name,
      phone: values.phone,
    };

    try {
      const res = await mutateAsync(data);
      if (res?.data?.email) {
        toast({
          position: "top",
          duration: 3000,
          render: ({ onClose }) => {
            return (
              <Toast
                status="success"
                onClose={onClose}
                message={res?.message}
              />
            );
          },
        });
      }
      router.refresh();
    } catch (err) {
      handleErrorToast(err);
    }
  };
  const genders: Array<"Male" | "Female"> = ["Male", "Female"];

  if (isLoading || !data) return <EditSkeleton />;
  return (
    <VStack w="100%" p="1rem">
      <Box display="grid" placeItems="center" m="3rem">
        <Avatar
          src={profileData?.profile_image}
          name={profileData?.name}
          w="10rem"
          h="10rem"
          border="1px solid gray"
          rounded="100%"
          fontSize="3rem"
          color="gray.600"
        />
        <Box position="relative" w="70%" mt="-2rem">
          <Input
            onChange={handleImageChange}
            name="profile"
            id="profile"
            type="file"
            opacity={0}
            w={0}
            h={0}
          />
          <IconButton
            right={0}
            as="label"
            htmlFor="profile"
            p="1rem"
            rounded="full"
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
          <Text color="error">{errors.name?.message}</Text>
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
                            maxDate={new Date()}
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
          <Text color="error">{errors.address?.message}</Text>
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
          <Text color="error">{errors.phone?.message}</Text>
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
          disabled={isPending ? true : false}
          opacity={isPending ? 0.6 : 1}
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

      <ImageModal
        handleImageSubmit={handleImageSubmit}
        imageUrl={image || ""}
        isOpen={isOpenImage}
        onClose={onCloseImage}
      />
    </VStack>
  );
};

export default EditPage;
