"use client";
import { logger } from "@/utils/logger";
import { signUp } from "aws-amplify/auth";
import { useDebounce } from "@uidotdev/usehooks";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import { Controller, useForm } from "react-hook-form";
import { BiCalendar } from "react-icons/bi";
import Autocomplete from "react-google-autocomplete";
import { env } from "@/config/environment";
import { ISignupForm, signupSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import useHandleErrorToast from "@/hooks/client/useAppToast";
import PasswordField from "@/components/Form/PasswordField/index.";
import { PhoneInput } from "react-international-phone";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import { isValidPhone } from "@/utils/misc";
import { useUserrCheck } from "../Entry/hooks/useFormSubmit";
import { APPError } from "@/lib/exception";
import Link from "next/link";

interface IForm {
  full_name: string;
  address: string;
  gender: string;
  date_of_birth: string;
  phone_number: string;
  email: string;
  password: string;
  confirm_password: string;
  username: string;
}

const Signup = () => {
  const handleErrorToast = useHandleErrorToast();
  const { mutateAsync, isPending } = useUserrCheck();

  const router = useRouter();

  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    register,
    setError,
    trigger,
    clearErrors,

    formState: { errors, isSubmitting },
  } = useForm<ISignupForm>({
    resolver: zodResolver(signupSchema),

    defaultValues: {
      gender: "male",
    },
  });

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [username, setUsername] = useState<string>();

  const changedUsername = useDebounce(username, 1000);

  const checkUsername = async () => {
    try {
      await mutateAsync({ username: changedUsername || "" });
      setError("username", {
        message: "Username already exists!",
      });
    } catch (error) {
      logger.error(error);
      if (error instanceof APPError) {
        clearErrors("username");
      }
    }
  };

  useEffect(() => {
    checkUsername();
  }, [changedUsername]);

  const genders: Array<"male" | "female" | "other"> = [
    "male",
    "female",
    "other",
  ];

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const formSubmit = async (data: IForm) => {
    try {
      const res = await signUp({
        username: data.username,
        password: data.password,

        options: {
          userAttributes: {
            name: data.full_name,
            phone_number: data.phone_number,
            birthdate: data.date_of_birth,
            gender: data.gender,
            given_name: data.full_name,
            email: data.email,
            address: data.address,
          },
        },
      });
      router.push(`/auth/confirm-email?username=${data.username}`);
    } catch (err) {
      handleErrorToast(err);
    }
  };

  const proceed = (data: IForm) => {
    try {
      const phone = getValues("phone_number");
      const isPhoneValid = isValidPhone(phone);
      if (!isPhoneValid) {
        setError("phone_number", { message: "Phone number is invalid" });
        return;
      }
      trigger();
      const formErrors = Object.entries(errors).filter(
        ([fieldName]) =>
          fieldName !== "password" && fieldName !== "confirm_password"
      );
      if (formErrors.length === 0) {
        formSubmit(data);
      }
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <>
      <VStack w="full" p="2rem" alignItems="center" gap="2rem">
        <Text fontSize="3rem" fontWeight={"bold"} w="full">
          Signup
        </Text>
      </VStack>
      {/* {view === 0
          ? <DetailsForm changeView={changeView} />
          : <PasswordForm changeView={changeView} />} */}
      <VStack
        w="full"
        p="1rem"
        align="start"
        px="2rem"
        as="form"
        gap="-1.6rem"
        onSubmit={handleSubmit(proceed)}
      >
        <FormControl w="full" isRequired>
          <FormLabel htmlFor="username" fontSize="fl" textTransform="uppercase">
            username
          </FormLabel>
          <Input
            variant="underline"
            errorBorderColor="red"
            id="username"
            {...register("username", {
              onChange: handleUsernameChange,
            })}
          />
          <Text color={"red"} mt="0.4rem">
            {errors.username && errors.username.message}
          </Text>
        </FormControl>
        <VStack w="full">
          <FormControl w="full" isRequired>
            <FormLabel htmlFor="name" fontSize="fl" textTransform="uppercase">
              fullname
            </FormLabel>
            <Input variant="underline" id="name" {...register("full_name")} />
            <Text color="error"> {errors?.full_name?.message} </Text>
          </FormControl>

          <FormControl w="full" gap="1rem" isRequired>
            <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
              address
            </FormLabel>
            <Controller
              control={control}
              name="address"
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  style={{
                    padding: "1rem 0",
                  }}
                  className="google_autocomplete"
                  apiKey={env.GOOGLE_API_KEY}
                  defaultValue={value}
                  onPlaceSelected={(place) => {
                    onChange(place?.formatted_address);
                  }}
                  onChange={onChange}
                />
              )}
            />
            <Text color="error"> {errors?.address?.message} </Text>
          </FormControl>

          <FormControl w="full" isRequired>
            <FormLabel fontSize="fl" htmlFor="gender" textTransform="uppercase">
              gender
            </FormLabel>
            <Controller
              name="gender"
              control={control}
              render={({ field: { onChange, value } }) => (
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
                        key={el}
                        position="relative"
                        p=".5rem"
                        px="2rem"
                        onClick={() => {
                          onChange(el);
                        }}
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
              )}
            />
            <Text color="error">
              <Text color="error"> {errors?.gender?.message} </Text>
            </Text>
          </FormControl>

          <FormControl w="full" isRequired>
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
                <HStack
                  w="full"
                  justify="space-between"
                  borderBottom="1px solid black"
                >
                  <Text mt="1rem"> {getValues("date_of_birth")} </Text>{" "}
                  <IconButton
                    fontSize="2rem"
                    icon={<BiCalendar />}
                    aria-label="calendar"
                  />
                </HStack>
              </PopoverTrigger>

              <PopoverContent p={5}>
                <Portal>
                  <Box
                    position="absolute"
                    inset="0"
                    zIndex="999999"
                    top="4.6rem"
                    h="full"
                    w="full"
                    onClick={onClose}
                  >
                    <Grid mx="auto" w="full" placeItems="center" py="2rem">
                      <Box border="1px solid black" bg="base">
                        <Controller
                          control={control}
                          name="date_of_birth"
                          render={({ field: { onChange } }) => {
                            return (
                              <Calendar
                                maxDate={new Date()}
                                onChange={(val) => {
                                  const d = dayjs(val).format("MM/DD/YYYY");
                                  onChange(d);
                                  onClose();
                                }}
                              />
                            );
                          }}
                        />
                      </Box>
                    </Grid>
                  </Box>
                </Portal>
              </PopoverContent>
            </Popover>
            <Text color="error"> {errors?.date_of_birth?.message} </Text>
          </FormControl>

          <FormControl w="full" isRequired>
            <FormLabel htmlFor="name" fontSize="fl" textTransform="uppercase">
              email
            </FormLabel>
            <Input variant="underline" id="name" {...register("email")} />
            <Text color="error"> {errors?.email?.message} </Text>
          </FormControl>

          <FormControl w="full" isRequired>
            <FormLabel htmlFor="name" fontSize="fl" textTransform="uppercase">
              phone number
            </FormLabel>
            <Controller
              control={control}
              name="phone_number"
              render={({ field: { onChange, value } }) => {
                return (
                  <PhoneInput
                    style={{ width: "100%", borderRadius: "0" }}
                    inputStyle={{
                      width: "100%",
                      border: "none",
                      borderBottom: "1px solid black",
                      borderRadius: "0",
                    }}
                    defaultCountry="np"
                    value={value}
                    countrySelectorStyleProps={{
                      buttonStyle: {
                        border: "none",
                        borderBottom: "1px solid black",
                        borderRadius: "0",
                      },
                    }}
                    onChange={(phone) => {
                      onChange(phone);
                    }}
                  />
                );
              }}
            />

            <Text color="error"> {errors?.phone_number?.message} </Text>
          </FormControl>
          <PasswordField
            label="password"
            error={errors.password?.message}
            {...register("password")}
          />
          <PasswordField
            label="Confirm password"
            error={errors.confirm_password?.message}
            {...register("confirm_password")}
          />
          <Text
            w="full"
            textAlign="right"
            display="inline-block"
            fontSize="1.2rem"
            my="2rem"
          >
            Already have an account?{" "}
            <Link href="/auth/login">
              <Text as="span" fontWeight="semibold">
                Login Here
              </Text>
            </Link>
          </Text>
          <Button
            isLoading={isSubmitting}
            type="submit"
            variant="submit"
            disabled={isSubmitting}
            opacity={isSubmitting ? 0.6 : 1}
          >
            Submit
          </Button>
        </VStack>
      </VStack>
    </>
  );
};

export default Signup;
