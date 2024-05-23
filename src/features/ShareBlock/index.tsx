"use client";
import { VStack, Grid, GridItem, Center, Button, Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { MdDoneAll } from "react-icons/md";
import ShareIcon from "../ProductDetailPage/Collections/components/ShareIcon";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaFacebookMessenger, FaWhatsapp, FaViber, FaRedditAlien, FaTelegramPlane } from "react-icons/fa";

interface IProps{
    isOpen:boolean,
    onClose:()=>void,
    url:string,
    title?:string
}

const ShareBlock = ({isOpen,onClose,url,title='latido'}:IProps) => {

    const links = [
        {
            icon: <FaFacebook />,
            link: "fb.com",
            color: "fb",
            shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${url}`
        },
        {
            icon: <BsTwitterX />,
            link: "fb.com",
            color: "x",
            shareUrl: `https://twitter.com/intent/tweet?text=${title}&url=${url}`
        },
        {
            icon: <FaFacebookMessenger />,
            link: "fb.com",
            color: "messenger",
            shareUrl: `https://www.facebook.com/dialog/send?link=${url}&app_id=291494419107518&redirect_uri=${url}`
        },
        {
            icon: <FaWhatsapp />,
            link: "fb.com",
            color: "whatsapp",
            shareUrl: `https://web.whatsapp.com/send?text=${url}`
        }, {
            icon: <FaViber />,
            name: "viber.com",
            color: "viber",
            shareUrl: `viber://forward?text=${encodeURIComponent(title + " " + url) // or any Viber icon
                }`
        },
        
        {
            icon: <FaRedditAlien />,
            name: "reddit.com",
            color: "reddit",
            shareUrl: `https://reddit.com/submit?url=${encodeURIComponent(
                url
            )}&title=${encodeURIComponent(title)}`
        },
        {
            icon: <FaTelegramPlane />,
            name: "telegram",
            color: "telegram",
            shareUrl: `https://t.me/share/url?url=${encodeURIComponent(
                url
            )}&text=${encodeURIComponent(title)}`
        }
    ];


  const [copied, setCopied] = useState(false);

      const onButtonClick = (link: string) => {
    try {
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {}
  };

  return <AnimatePresence>
            {isOpen && <>

                <Box  as={motion.div}
                
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                
                onClick={onClose} position='fixed' inset='0' w='full' h='full' bg='rgba(0,0,0,0.3)' zIndex={1000}  ></Box>

                <VStack
                as={motion.div}
                
                
                initial={{y:"100%"}}
                animate={{y:"0%",transition:{bounce:false}}}
                exit={{y:"100%"}}
                
                position={'fixed'} left='0' right='0' bottom='0' h='20rem' zIndex={1000} w='full'   >

                    <Grid w='90%' h='full' gap='.5rem' placeItems='center' p='.5rem' templateColumns='repeat(4,1fr)' bg='rgba(255,255,255,0.4)' backdropFilter='auto' backdropBlur='10px'  roundedTop='1rem'  >
                        {links.map((el) => {
                            return <GridItem key={el.name}   >

                                <ShareIcon color={el.color} icon={el.icon} shareUrl={el.shareUrl} />

                            </GridItem>


                        })}

                        <GridItem>
                             <Center position="relative" h="7rem" w="7rem" role="group">
      <Button
        fontSize="1.8rem"
        p=".7rem"
        backdropFilter="auto"
        backdropBlur="10px"
        w="full"
        h="full"
        rounded="1rem"
        color="white"
        transitionDuration=".4s"
        border="thin"
        onClick={()=>onButtonClick('lknk')}
      >
        {copied ? <MdDoneAll color="green" /> : <IoCopyOutline />}

      </Button>
    </Center>
                        </GridItem>

                    </Grid>



                </VStack>


            </>
            }
</AnimatePresence>
};

export default ShareBlock;
