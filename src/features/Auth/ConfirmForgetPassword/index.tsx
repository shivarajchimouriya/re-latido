"use client";
import {
  VStack,
  HStack,
  PinInput,
  PinInputField,
  Button,
  Text,
  FormControl,
  FormLabel,
  Box,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  IConfirmForgetPasswordForm,
  confirmForgetPasswordSchema,
} from "./schema";
import PasswordField from "@/components/Form/PasswordField/index.";
import { logger } from "@/utils/logger";
import { confirmResetPassword } from "aws-amplify/auth";
import useHandleErrorToast from "@/hooks/client/useAppToast";
import Toast from "@/components/Toast";
import { useRouter } from "next/navigation";

const ConfirmForgetPassword = ({ username }: { username: string }) => {
  const handleErrorToast = useHandleErrorToast();
  const router = useRouter();
  const fields = [1, 2, 3, 4, 5, 6];

  const {
    formState: { errors },
    register,
    setValue,
    handleSubmit,
  } = useForm<IConfirmForgetPasswordForm>({
    resolver: zodResolver(confirmForgetPasswordSchema),
  });
  const toast = useToast();
  const onSubmit = async (data: IConfirmForgetPasswordForm) => {
    try {
      const res = await confirmResetPassword({
        confirmationCode: data.pin,
        newPassword: data.new_password,
        username: username,
      });
      toast({
        position: "top",
        duration: 3000,
        render: ({ onClose }) => {
          return (
            <Toast
              status="success"
              onClose={onClose}
              message={"Password reset success."}
            />
          );
        },
      });

      router.push("/auth/login");
    } catch (error) {
      handleErrorToast(error);
    }
  };

  return (
    <VStack w="full" p="1rem">
      <Text fontSize="2rem" fontWeight="bold">
        Enter your confirmation OTP Below
      </Text>
      <VStack
        w="full"
        p="1rem"
        gap="1.5rem"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box>
          <FormControl>
            <FormLabel>Enter the OTP</FormLabel>
            <HStack mt="1rem">
              <PinInput
                onComplete={(val) => setValue("pin", val)}
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

            <Text color="error"> {errors.pin?.message} </Text>
          </FormControl>
        </Box>

        <PasswordField
          error={errors.new_password?.message}
          label="new password"
          {...register("new_password")}
        />
        <PasswordField
          error={errors.confirm_new_password?.message}
          label="Reenter password"
          {...register("confirm_new_password")}
        />

        <Button type="submit" variant="submit" textTransform="capitalize">
          proceed
        </Button>
      </VStack>
    </VStack>
  );
};

export default ConfirmForgetPassword;
