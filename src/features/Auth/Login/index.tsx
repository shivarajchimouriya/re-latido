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
const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  const login = () => {
    signIn({
      username: "shivraaz45@gmail.com",
      password: "Axios@123"
    });
  };

  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <AuthProvider>
      <VStack w="full" p="2rem" alignItems="center" gap="2rem">
        <Text fontSize="3rem" fontWeight={"bold"} w="full">
          Login
        </Text>
        <Button onClick={login}> log me in </Button>
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
                {...register("name")}
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

        <Button
          mt="3rem"
          p="1rem"
          w="100%"
          border="1px solid black"
          rounded="md"
          fontWeight="bold"
          fontSize="1.4rem"
          bg="black"
          color="white"
        >
          proceed
        </Button>
      </VStack>
    </AuthProvider>
  );
};

export default Login;
