import { appColor } from "@/theme/foundations/colors";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import ImagePlayground from "../ImagePlayground";
import AvatarEditor from "react-avatar-editor";
import FileUpload from "@/lib/fileUpload";
import buildImageUrl from "@/utils/buildImgUrl";
interface IProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  handleImageSubmit: (imgUrl: string) => void;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  handleImageSubmit,
}: IProps) {
  const editor = useRef(null);
  const fileUpload = new FileUpload();
  const handleSave = async () => {
    if (editor) {
      const dataUrl = (editor?.current as AvatarEditor | null)
        ?.getImageScaledToCanvas()
        .toDataURL("image/webp", 0.9);
      const result = await fetch(dataUrl ? dataUrl : "");
      const blob = await result.blob();
      if (blob?.size) {
        const file = new File([blob], "cropped-image.jpg", {
          type: "image/webp",
        });
        if (file?.size) {
          const uploadedImageUrl = await fileUpload.uploadImage(
            "userProfile",
            new Date().getTime()?.toString() || "",
            file
          );
          const absoluteUrl = buildImageUrl(uploadedImageUrl);
          if (absoluteUrl) {
            handleImageSubmit(absoluteUrl);
          }
        }
      }
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg={"rgba(0, 0, 0, 0.8)"} />
      <ModalContent
        h="fit-content"
        bg={appColor.dark_bg}
        boxShadow={"lg"}
        display={"grid"}
        placeItems={"center"}
        rounded={"4px"}
        m={4}
        border={"1px solid var(--text-primary)"}
      >
        <Box width={"80%"} my={8}>
          <Flex
            textColor={appColor.base}
            fontWeight={"500"}
            justifyContent={"space-between"}
          >
            <ModalHeader fontSize={"1.6rem"} flex="1" width={"full"}>
              Image Playground
            </ModalHeader>
            <ModalCloseButton />
          </Flex>
          <ModalBody py="2rem">
            <ImagePlayground editorRef={editor} imageUrl={imageUrl} />
          </ModalBody>
          <ModalFooter mt={"4rem"} mb={"2rem"} w={"full"} gap={"1rem"}>
            <Button
              padding={"1rem 2rem"}
              fontWeight={"bold"}
              fontSize={"1.4rem"}
              className="primary-button"
              w={"full"}
              type="submit"
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              padding={"1rem 2rem"}
              fontWeight={"bold"}
              fontSize={"1.4rem"}
              color={appColor.base}
              className="outline-button"
              border={"1px solid var(--text-primary)"}
              w={"full"}
              onClick={onClose}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Box>
      </ModalContent>
    </Modal>
  );
}
