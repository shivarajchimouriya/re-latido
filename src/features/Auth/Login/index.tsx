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
  InputGroup,
  useToast,
  HStack,
  Icon,
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
import { CgClose } from "react-icons/cg";
import { unknown } from "zod";
import PasswordField from "@/components/Form/PasswordField/index.";
import { useLoader } from "@/hooks/client/useLoader";
import { configureAmplify } from "@/config/awsConfig";
import Link from "next/link";
import LoginSkeleton from "./LoginSkeleton";

interface IProps {
  userName: string;
}

class ErrorWithMessage {
  constructor(private message: string) {}
}

const Login = ({ userName }: IProps) => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ISigninForm>({
    resolver: zodResolver(signInFormSchema),
  });

  const toast = useToast();
  const router = useRouter();
  const { isLoading, startLoading, stopLoading } = useLoader();
  const login = async (data: ISigninForm) => {
    startLoading();
    try {
      const res = await signIn({
        username: userName,
        password: data.passoword,
      });
      if (res?.isSignedIn) {
        const productUrl = sessionStorage.getItem("productUrl");
        if (productUrl) {
          router.replace(productUrl);
          sessionStorage.removeItem("productUrl");
        } else {
          router.replace("/");
        }
      } else {
        router.replace("/");
      }
    } catch (err) {
      logger.log("eror", err);

      let message = "username or password is incorrect";

      setError("passoword", { message });
      // toast({
      //   status: "error",
      //   position: "top",
      //   render: props => {
      //     return (
      //       <HStack
      //         w="full"
      //         h="4rem"
      //         shadow="2xl"
      //         justify="center"
      //         border="thin"
      //         bg="white"
      //       >
      //         <CgClose />
      //         <Text color="red" fontSize="1.3rem" fontWeight="semibold">
      //           User name or password is incorrect{" "}
      //         </Text>
      //       </HStack>
      //     );
      //   }
      // });
    } finally {
      stopLoading();
    }
  };

  const { isOpen, onClose, onToggle } = useDisclosure();
  const hasError = !!errors.passoword?.message;
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
          Hi{" "}
          <Text as="span" fontWeight="semibold">
            {" "}
            {userName}{" "}
          </Text>{" "}
          , you already have an account here, please fill in the password to
          login to Latido
        </Text>
        <VStack w="full">
          <FormControl w="full" isInvalid={hasError}>
            <PasswordField
              label="password"
              variant={hasError ? "error" : "underline"}
              id="password"
              fontSize="1.4rem"
              error={errors.passoword?.message}
              {...register("passoword")}
            />
          </FormControl>
          <Text
            w="full"
            textAlign="right"
            textTransform="capitalize"
            fontSize="1.2rem"
            mt="1rem"
          >
            <Link href="/auth/forget-password">forget password?</Link>
          </Text>
        </VStack>

        <Button variant="submit" type="submit" isLoading={isLoading}>
          proceed
        </Button>
      </VStack>
    </AuthProvider>
  );
};

export default Login;
