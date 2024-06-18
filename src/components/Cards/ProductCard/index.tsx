import AppImage from "@/components/AppImage";
import { collectionImages, datUrl } from "@/constants/images";
import ShareBlock from "@/features/ShareBlock";
import { IProduct } from "@/resources/Product/interface";
import { appColor } from "@/theme/foundations/colors";
import { logger } from "@/utils/logger";
import {
  Box,
  Center,
  HStack,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  StackProps,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { IoCartOutline, IoCloseOutline, IoEyeOutline } from "react-icons/io5";
import { LongPressEventType, useLongPress } from "use-long-press";

interface IProps extends StackProps {
  product: IProduct;
  isFirstCard?: boolean;
}

const ProductCard = ({ product, isFirstCard, ...rest }: IProps) => {
  // const [isLongPress, setIsLongPress] = useState(false);
  // const [position, setposition] = useState({ x: 0, y: 0 });
  // const {
  //   isOpen: isShareOpen,
  //   onClose: onShareClose,
  //   onOpen: onShareOpen
  // } = useDisclosure();

  // const bind = useLongPress(
  //   (e) => {
  //     const event = e as unknown as PointerEvent;

  //     const x = event.clientX;
  //     const y = event.clientY;
  //     // setposition({ x, y });
  //     // setIsLongPress(true);
  //   },
  //   {
  //     onStart: (event, meta) => {},
  //     onFinish: (event, meta) => {
  //       // setIsLongPress(false);
  //     },
  //     onCancel: (event, meta) => {
  //       // setIsLongPress(false);
  //     },
  //     filterEvents: (event) => true, // All events can potentially trigger long press
  //     threshold: 1000,
  //     captureEvent: true,
  //     cancelOnMovement: false,
  //     cancelOutsideElement: true,
  //     detect: LongPressEventType.Pointer
  //   }
  // );

  const utilsVariant: Variants = {
    hidden: {
      y: 30,
    },
    show: {
      y: 0,
      transition: {
        staggerChildren: 0.01,
      },
    },
    exit: {
      y: 30,
    },
  };

  const iconVariant: Variants = {
    hidden: {
      y: 30,
      x: 30,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        bounce: false,
      },
    },
    exit: {
      y: 0,
      x: 30,
      opacity: 0,
    },
  };

  // const router = useRouter();
  const baseURL = typeof window === "undefined" ? "" : window?.location?.host;

  // const view = () => {
  //   router.push(`/product/details/${product._id}`);
  // };

  let splittedPrice: string | null = null;

  if (product.pricing) {
    if (typeof product.pricing === "string") {
      splittedPrice = product.pricing
        .split("-")
        .map((p: string) => {
          const formattedPrice = parseFloat(p);
          return isNaN(formattedPrice)
            ? null
            : Intl.NumberFormat().format(formattedPrice);
        })
        .join(" - ");

      // Check if any part of the split price is null
      if (splittedPrice.includes("null")) {
        splittedPrice = null;
      }
    }
  }

  return (
    <>
      {/* <ShareBlock
        url={`${baseURL}/product/details/${product._id}`}
        title={product.name}
        isOpen={isShareOpen}
        onClose={onShareClose}
      /> */}
      {/* <AnimatePresence>
        {isLongPress && (
          <Box
            as={motion.div}
            position="fixed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            inset="0"
            w="100vw"
            h="100dvh"
            bg="rgba(0,0,0,0.3)"
            zIndex={100}
            onClick={() => setIsLongPress(false)}
          >
            <Popover isOpen placement="top">
              <PopoverTrigger>
                <Box
                  h={"5rem"}
                  w="5rem"
                  backdropFilter="auto"
                  backdropBlur="5p"
                  background="rgba(255,255,255,0.4)"
                  rounded="10rem"
                  position="fixed"
                  zIndex={10000000}
                  left={position.x - 25}
                  top={position.y - 25}
                >
                  <Center h="100%" w="100%">
                    <IconButton
                      as={motion.button}
                      exit={{ scale: 0 }}
                      aria-label="utlity"
                      fontSize="3rem"
                      icon={<IoCloseOutline />}
                    />
                  </Center>
                </Box>
              </PopoverTrigger>

              <Box zIndex={100000}>
                <PopoverContent zIndex={10000} outline="none">
                  <Center as={motion.div}>
                    <HStack
                      variants={utilsVariant}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      as={motion.div}
                      color="white"
                      align="center"
                      gap="1.5rem"
                      fontSize="2.6rem"
                      p="1rem"
                      px="1rem"
                      rounded="2rem"
                    >
                      <IconButton
                        as={motion.button}
                        variants={iconVariant}
                        initial={{ x: 70, y: 30 }}
                        animate={{ x: 0, y: 0 }}
                        exit={{ x: 70, y: 30 }}
                        onClick={view}
                        aria-label="view"
                        icon={<IoEyeOutline />}
                        bg="rgba(0,0,0,0.6)"
                        p="1rem"
                        rounded="100%"
                      />

                      <IconButton
                        aria-label="share "
                        as={motion.button}
                        variants={iconVariant}
                        onClick={onShareOpen}
                        initial={{ y: 40 }}
                        animate={{ y: 0 }}
                        exit={{ y: 40 }}
                        p="1rem"
                        icon={<AiOutlineShareAlt />}
                        bg="rgba(0,0,0,0.6)"
                        rounded="100%"
                        position="relative"
                        bottom="2rem"
                      />
                      <IconButton
                        aria-label="buy"
                        icon={<IoCartOutline />}
                        onClick={view}
                        as={motion.button}
                        variants={iconVariant}
                        initial={{ x: -70, y: 30 }}
                        animate={{ x: 0, y: 0 }}
                        exit={{ x: -70, y: 30 }}
                        p="1rem"
                        bg="rgba(0,0,0,0.6)"
                        rounded="100%"
                      />
                    </HStack>
                  </Center>
                </PopoverContent>
              </Box>
            </Popover>
          </Box>
        )}
      </AnimatePresence> */}
      <Link
        href={`/product/details/${product._id}`}
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <VStack
          w="full"
          h="full"
          justify="center"
          scrollSnapAlign="end"
          scrollSnapStop="always"
        >
          <VStack
            // as={motion.div}
            position="relative"
            w="97vw"
            maxW="480px"
            mb=".6rem"
            transitionDuration=".4s"
            align="center"
            rounded=".8rem"
            overflow="hidden"
            bg="rgba(0,0,0,0.03)"
            // onContextMenu={(event) => {
            //   event.preventDefault();
            //   event.stopPropagation();
            //   return false;
            // }}
            // {...rest}
            // {...bind()}
            style={{
              height: "calc(-160px + 98dvh)",
            }}
          >
            <Box w="100%" overflow="hidden" h="100%">
              <img
                alt={`product-${product.name}  `}
                src={product.primary_image}
                height={600}
                width={500}
                loading="eager"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>

            <HStack
              bg={`linear-gradient(to bottom, rgba(255,255,255,0) 0%, ${appColor.black} 200%)`}
              position="absolute"
              w="full"
              bottom="0"
            >
              <VStack w="full" p="1rem" pb="0.4rem" align="left" gap="0">
                <Text
                  as="h2"
                  fontSize="1.3rem"
                  fontWeight="bold"
                  textTransform="capitalize"
                  color="white"
                >
                  {product.name}
                </Text>
                <Text
                  as="h3"
                  fontSize="1.1rem"
                  textTransform="capitalize"
                  color="white"
                  fontWeight="semibold"
                >
                  {splittedPrice ? "रु." + splittedPrice : null}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </Link>
    </>
  );
};

export default ProductCard;
