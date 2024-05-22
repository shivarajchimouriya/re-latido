"use client";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  InputRightElement,
  useDisclosure,
  InputGroup
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { register } from "swiper/element";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { signIn } from "aws-amplify/auth";
import AuthProvider from "@/providers/AuthProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISigninForm, signInFormSchema } from "./schema";
import { ISignupForm } from "../Signup/schema";
import { logger } from "@/utils/logger";
import { useRouter } from "next/navigation";

interface IProps {
  userName: string;
}
const Login = ({ userName }: IProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<ISigninForm>({
    resolver: zodResolver(signInFormSchema)
  });
  const router = useRouter();
  const login = async (data: ISigninForm) => {
    try {
      const res = await signIn({
        username: userName,
        password: data.passoword
      });
      router.push("/");
    } catch (err) {
      logger.log("Error", err);
    }
  };

  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <AuthProvider>
      <VStack
        w="full"
        p="2rem"
        alignItems="center"
        gap="2rem"
        as="form"
        onSubmit={handleSubmit(login)}
      >
        <Text fontSize="3rem" fontWeight={"bold"} w="full">
          Login
        </Text>
        <Text fontSize="1.2rem" color="#707580">
          Hi Civ, you already have an account here, please fill in the password
          to login to Latido
        </Text>
        <VStack w="full">
          <FormControl w="full">
            <FormLabel htmlFor="name" textTransform="capitalize">
              password
            </FormLabel>
            <InputGroup display="flex   " alignItems="center">
              <Input
                variant="underline"
                id="password"
                fontSize="1.4rem"
                type="password"
                {...register("passoword")}
              />
              <InputRightElement onClick={onToggle} h="full">
                {isOpen
                  ? <FaRegEyeSlash fontSize="2rem" />
                  : <FaRegEye fontSize="2rem" />}
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Text
            w="full"
            textAlign="right"
            textTransform="capitalize"
            fontSize="1.2rem"
            mt="1rem"
          >
            forget password?
          </Text>
        </VStack>

        <Button variant="submit" type="submit">
          proceed
        </Button>
      </VStack>
    </AuthProvider>
  );
};

export default Login;
