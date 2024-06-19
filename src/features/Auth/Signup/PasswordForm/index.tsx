"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ISignupForm } from "../schema";
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import PasswordField from "@/components/Form/PasswordField/index.";
import { IoArrowBack, IoPlayBackOutline } from "react-icons/io5";

interface IProps {
  changeView: (view: number) => void;
}

const PasswordForm = ({ changeView }: IProps) => {
  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<ISignupForm>();
  return (
    <VStack w="full" p="1rem" align="start">
      <IconButton
        onClick={() => changeView(0)}
        aria-label="go back"
        icon={<IoArrowBack />}
        mb="3rem"
        fontSize="1.5rem"
      />
      <PasswordField
        label="password"
        error={errors.password?.message}
        {...register("password")}
      />
      <PasswordField
        label="password"
        error={errors.confirm_password?.message}
        {...register("confirm_password")}
      />
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
  );
};

export default PasswordForm;
