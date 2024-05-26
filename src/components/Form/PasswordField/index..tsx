import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface IProps extends InputProps {
  label: string;
  error?: string;
}

const PasswordField = forwardRef(({ error, label, ...rest }: IProps, ref) => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <FormControl w="full">
      <FormLabel htmlFor="name" textTransform="capitalize">
        {label}
      </FormLabel>
      <InputGroup display="flex   " alignItems="center">
        <Input
          variant="underline"
          fontSize="1.4rem"
          type={isOpen ? "text" : "password"}
          ref={ref}
          {...rest}
        />
        <InputRightElement onClick={onToggle} h="full">
          {isOpen
            ? <FaRegEyeSlash fontSize="2rem" />
            : <FaRegEye fontSize="2rem" />}
        </InputRightElement>
      </InputGroup>
      {error &&
        <Text color="error">
          {" "}{error}{" "}
        </Text>}
    </FormControl>
  );
});

export default PasswordField;
