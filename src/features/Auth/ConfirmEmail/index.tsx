"use client";
import { logger } from "@/utils/logger";
import {
  Button,
  Center,
  HStack,
  PinInput,
  PinInputField,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { confirmSignUp } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

interface IProps {
  username: string;
}

const ConfirmEmail = ({ username }: IProps) => {
  const fields = [1, 2, 3, 4, 5, 6];

  interface IForm {
    input: string;
  }
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const router = useRouter();
  const onSubmit = async (data: IForm) => {
    try {
      await confirmSignUp({
        confirmationCode: data.input,
        username: username
      });
      router.replace(`/auth/`);
    } catch (err) {
      logger.log("error", err);
    }
  };

  return (
    <VStack w="full" p="1rem">
      <Text fontSize="2rem" fontWeight="bold">
        {" "}Enter your confirmation OTP Below{" "}
      </Text>{" "}
      <VStack
        w="full"
        p="1rem"
        gap="1rem"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <HStack mt="4rem">
          <PinInput
            onComplete={val => setValue("input", val)}
            type="number"
            colorScheme="black"
            errorBorderColor="error"
            otp
          >
            {fields.map(el => {
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
        <Button type="submit" variant="submit">
          {" "}proceed{" "}
        </Button>
      </VStack>
    </VStack>
  );
};

export default ConfirmEmail;
