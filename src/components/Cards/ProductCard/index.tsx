"use client";
import AppImage from "@/components/AppImage";
import { IProduct } from "@/data/mock/products";
import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
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
  const [position, setposition] = useState({ x: 0, y: 0 })


  const bind = useLongPress((e) => {
    const event = e as unknown as PointerEvent

    const x = event.clientX;
    const y = event.clientY;
    setposition({ x, y })
    setIsLongPress(true);



  }, {
    onStart: (event, meta) => {

      console.log("Press started", event);
    },
    onFinish: (event, meta) => {
      // setIsLongPress(false);
      console.log("Long press finished", meta);
    },
    onCancel: (event, meta) => {
      setIsLongPress(false);

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
        {isLongPress && <Box
          as={motion.div}
          position='fixed'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          inset='0'
          w='100vw'
          h='100vh'
          bg='rgba(255,255,255,0.3)'
          zIndex={100}
          onClick={() => setIsLongPress(false)}
        >





          <Popover isOpen placement="top-end" >

            <PopoverTrigger>
              <Box h={'5rem'}
                w='5rem'
                 backdropFilter='auto' 
                 backdropBlur='5p'
                background='rgba(255,255,255,0.4)' rounded='10rem'
                position='fixed'
                zIndex={10000000}
                left={position.x - 25}
                top={position.y - 25}    >
              </Box>
            </PopoverTrigger>

            <Box zIndex={100000} >
              <PopoverContent h='15rem' w='15rem' zIndex={10000} >
                <Center as={motion.div}

                  bg='purple'
                  onMouseOver={() => console.log("mouse over")}
                >


                  <Button w='100%' h='15rem' bg='yellow' as={motion.div} _hover={{ bg: 'red' }}  >share</Button>
                  <Button>view</Button>
                  <Button>buy</Button>


                </Center>

              </PopoverContent>
            </Box>
          </Popover>

















        </Box>



        }
      </AnimatePresence>
      <VStack
        as={motion.div}
        w="100%"
        p="1rem"
        rounded="1rem"
        overflow="hidden"
        bg="rgba(0,0,0,0.03)"
        onContextMenu={event => {
          event.preventDefault();
          event.stopPropagation();
          return false;
        }}
        
        {...rest}
        {...bind()}
        scrollSnapAlign='start'
        scrollSnapStop={'always'}
        style={{
        height: "calc(-230px + 100dvh)"

        }}

      >
        <Box w="100%" overflow="hidden">
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
