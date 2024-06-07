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
import React, { RefObject, useState } from "react";
import { Calendar } from "react-date-range";
import { Controller, Form, FormProvider, useForm } from "react-hook-form";
import { BiCalendar } from "react-icons/bi";
import { MdEditNotifications } from "react-icons/md";
import AuthProvider from "@/providers/AuthProvider";
import Autocomplete, {
  usePlacesWidget,
  ReactGoogleAutocompleteInputProps,
  ReactGoogleAutocompleteProps
} from "react-google-autocomplete";
import { env } from "@/config/environment";
import { ISignupForm, signupSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { dateToMonthDayYear } from "@/utils/date";
import DetailsForm from "./DetailsForm";
import PasswordForm from "./PasswordForm";
import { useRouter } from "next/navigation";
import useHandleErrorToast from "@/hooks/client/useAppToast";

interface IForm {
  full_name: string;
  address: string;
  gender: string;
  date_of_birth: string;
  phone_number: string;
  email: string;
}

interface IProps {
  username: string;
}

const Signup = ({ username }: IProps) => {
  const handleErrorToast = useHandleErrorToast();
  const router = useRouter();
  const methods = useForm<ISignupForm>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      gender: "male"
    }
  });
  const [activeGender, setActiveGender] = useState("male");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [view, setView] = useState(0);

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

  const formSubmit = async (data: ISignupForm) => {
    try {
      const res = await signUp({
        username: username,
        password: data.password,

        options: {
          userAttributes: {
            name: data.full_name,
            phone_number: data.phone_number,
            birthdate: data.date_of_birth,
            gender: data.gender,
            given_name: data.full_name,
            email: data.email,
            address: data.address
          }
        }
      });
      logger.log("sign up data", res);
      router.push(`/auth/confirm-email?username=${username}`);
    } catch (err) {
      handleErrorToast(err)
    }
  };

  const changeView = (view: number) => {
    setView(view);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(formSubmit)}>
        {view === 0
          ? <DetailsForm changeView={changeView} />
          : <PasswordForm changeView={changeView} />}
      </form>
    </FormProvider>
  );
};

export default Signup;
