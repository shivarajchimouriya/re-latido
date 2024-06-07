import React from "react";
import { HStack, Text, Box, CloseButton, Slide, useDisclosure, Icon } from "@chakra-ui/react";
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

interface IProps {
  icon?: React.ReactNode;
  message: string;
  status?: 'success' | 'error';
  onClose: () => void;
  isOpen?: boolean;
}

export default function Toast({ icon, message, status='success', onClose, isOpen }: IProps) {

  const messageComponents = {
    'success': {
      icon: FaCheckCircle,
      bg:"rgb(34, 197, 94, 0.8)"
    },
    'error': {
      icon: FaExclamationCircle,
      bg: "rgb(239, 68, 68, 0.8)"
    }
  }
  return (
    <HStack >
      <Box
        w="full"
        display="flex"
        justifyContent="center"
        p={4}
      >
        <HStack
          shadow="lg"
          align="center"
          borderWidth="1px"
          borderColor="transparent"
          bg={messageComponents[status].bg}
          backdropBlur="4px"
          rounded="lg"
          fontSize="1.2rem"
          px={4}
          py={2}
          color="white"
          spacing={3}
          maxW="md"
        >
          <Icon as={messageComponents[status].icon} w={6} h={6} />
          <Text flex="1" fontWeight="medium">
            {message}
          </Text>
          <CloseButton onClick={() => {
            console.log('close');
            onClose();
          }} color="white" />
        </HStack>
      </Box>
    </HStack>
  );
}
