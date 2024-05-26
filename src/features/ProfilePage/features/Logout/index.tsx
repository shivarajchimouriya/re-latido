"use client";
import { configureAmplify } from "@/config/awsConfig";
import { logger } from "@/utils/logger";
import { Box, Button, ButtonGroup, Center, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { signOut } from "aws-amplify/auth";
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";
import { useRouter } from "next/navigation";
import React from "react";
import { TbLogout } from "react-icons/tb";

const Logout = () => {
const router=useRouter()
      const { isOpen, onOpen, onClose } = useDisclosure()

const logout=()=>{
try {
    signOut();
    router.replace("/")
} catch (error) {
    logger.log("errror logging out")
}


}



  return (

    <>
     <Modal  isCentered onClose={onClose} size={'xl'} isOpen={isOpen}>
        <ModalOverlay  bg='rgba(0,0,0,0.3)' />
        <ModalContent >
          <ModalBody>
            <Center>
            <VStack   gap='2rem' rounded='md'  bg='white' boxShadow='2xl' w='90%'  p='2rem' >

<Text fontSize='2rem' fontWeight='bold'   textAlign='center' > Are you sure you want to logout  ?</Text>

<ButtonGroup   fontWeight='bold' fontSize='1.8rem'  w='80%'  gap='1rem' >
<Button w='full'  onClick={onClose} >cancel</Button>
<Button   w='full' rounded='md'  p='.8rem' border='1px solid black'   onClick={logout} >Ok</Button>


</ButtonGroup>

            </VStack>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    <Button
      px={"1rem"}
      py={"1rem"}
      rounded={"0.4rem"}
      fontWeight={"bold"}
      justifyContent={"flex-start"}
      onClick={onOpen}
    >
      <Flex gap={"2rem"} left={0} alignItems={"center"} color="red.500">
        <TbLogout fontSize={"2rem"} />
        Logout
      </Flex>
    </Button>


    </>
  );
};

export default Logout;
