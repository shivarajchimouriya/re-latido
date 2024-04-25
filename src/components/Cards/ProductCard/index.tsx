"use client";
import AppImage from "@/components/AppImage";
import { IProduct } from "@/data/mock/products";
import {
  AbsoluteCenter,
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  StackProps,
  VStack,
  position,
  useDisclosure
} from "@chakra-ui/react";
import { AnimatePresence, TapInfo, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { LongPressEventType, useLongPress } from "use-long-press";

interface IProps extends StackProps {
  product: IProduct;
}

const ProductCard = ({ product, ...rest }: IProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLongPress, setIsLongPress] = useState(false);


  const callback = React.useCallback(() => {
    setIsLongPress(true);
  }, []);
  const bind = useLongPress(true ? callback : null, {
    onStart: (event, meta) => {
      console.log("Press started", meta);
    },
    onFinish: (event, meta) => {
      setIsLongPress(false);
      console.log("Long press finished", meta);
    },
    onCancel: (event, meta) => {
      console.log("Press cancelled", meta);
    },
    filterEvents: event => true, // All events can potentially trigger long press
    threshold: 1000,
    captureEvent: true,
    cancelOnMovement: false,
    cancelOutsideElement: true,
    detect: LongPressEventType.Pointer
  });
  console.log("isopen", isLongPress);
  return (
    <>
<AnimatePresence>
{isLongPress  && <Box
as={motion.div}
position='fixed'
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
inset='0'
w='100vw'
h='100vh'
bg='rgba(255,255,255,0.3)'
zIndex={10000}



>
  
  </Box>}
  </AnimatePresence>





    <VStack
      as={motion.div}
      w="100%"
      p="1rem"
      rounded="1rem"
      overflow="hidden"
      bg="rgba(0,0,0,0.03)"
      onContextMenu={event => {
        // border="1px solid gray"
        event.preventDefault();
        event.stopPropagation(); // not necessary in my case, could leave in case stopImmediateProp isn't available?
        return false;
      }}
      {...rest}
      {...bind()}
    >
      <Box height="40rem" w="100%" overflow="hidden">
        <AppImage
          alt={product.name}
          src={product.image[0]}
          height={1000}
          width={1000}
          quality={100}
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </Box>
    </VStack>
    </>
  );
};

export default ProductCard;
