"use client";
import { logger } from "@/utils/logger";
import {
  Button,
  Center,
  HStack,
  PinInput,
  PinInputField,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { confirmSignUp, resendSignUpCode } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import useHandleErrorToast from "@/hooks/client/useAppToast";
import Toast from "@/components/Toast";

interface IProps {
  username: string;
}

const ConfirmEmail = ({ username }: IProps) => {
  const toast = useToast();
  const handleErrorToast = useHandleErrorToast();
  const fields = [1, 2, 3, 4, 5, 6];

  interface IForm {
    input: string;
  }
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const router = useRouter();
  const onSubmit = async (data: IForm) => {
    try {
      const res = await confirmSignUp({
        confirmationCode: data.input,
        username: username,
      });
      if (res.isSignUpComplete) {
        router.replace(`/auth/`);
      } else {
        handleErrorToast("Something went wrong!");
      }
    } catch (err) {
      handleErrorToast(err);
      logger.log("error", err);
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await resendSignUpCode({ username: username });
      if (res?.attributeName) {
        toast({
          position: "top",
          duration: 3000,
          render: ({ onClose }) => {
            return (
              <Toast status="success" onClose={onClose} message="OTP sent" />
            );
          },
        });
      }
    } catch (error) {
      handleErrorToast(error);
    }
  };

  return (
    <VStack w="full" p="1rem" mt="2rem">
      <Text fontSize="2rem" fontWeight="bold">
        Enter your confirmation OTP Below
      </Text>
      <VStack
        w="full"
        p="1rem"
        gap="1rem"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <HStack mt="4rem" my="2rem">
          <PinInput
            onComplete={(val) => setValue("input", val)}
            type="number"
            colorScheme="black"
            errorBorderColor="error"
            otp
          >
            {fields.map((el) => {
              return (
                <PinInputField
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="1px solid black"
                  fontSize="2rem"
                  w="full"
                  h="50px"
                  textAlign="center"
                  key={el}
                />
              );
            })}
          </PinInput>
        </HStack>
        <HStack w="full" justifyContent="end">
          <Button
            color="var(--text-secondary)"
            fontSize="1.1rem"
            fontWeight="bold"
            onClick={handleResendOtp}
          >
            Resend OTP
          </Button>
        </HStack>
        <Button
          mt="1rem"
          type="submit"
          variant="submit"
          textTransform="capitalize"
        >
          proceed
        </Button>
      </VStack>
    </VStack>
  );
};

export default ConfirmEmail;
