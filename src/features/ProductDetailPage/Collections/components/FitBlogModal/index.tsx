"use client";

import { Sheet } from "react-modal-sheet";
import { useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

interface IProps {
  blog: string;
  isOpen: boolean;
  onClose: () => void;
}

const FitBlogModal = ({ blog, isOpen, onClose }: IProps) => {
  return (
    <>
      <Sheet
        isOpen={isOpen}
        onClose={onClose}
        snapPoints={[500, 400, 0]}
        initialSnap={0}
      >
        
        <Sheet.Container
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
        >
          <Sheet.Header />
          <Sheet.Content>
            <VStack   gap='1rem' p='1.3rem'  h="15rem" color='white' fontSize='1.5rem'   >
              <Text   _firstLetter={{fontSize:"3rem",fontWeight:"bold"}}  >
                
                Handcrafted by skilled Nepalese artisans, Latido's jackets are
                more than fashion pieces; they're cultural statements. The
                company sources high-quality leather from local tanneries,
                supporting Nepal's economy while ensuring premium materials for
                their creations.
              </Text>
              <Text>
                Latido's impact extends beyond fashion, with collaborations
                supporting cultural preservation and music education in Nepal.
                Despite its niche focus, the brand has gained international
                recognition, shipping its unique jackets worldwide.
              </Text>
              <Text>

As Latido evolves, it remains committed to its core mission of cultural fusion, exploring new designs and sustainable practices while honoring Nepal's rich heritage and the global appeal of rock culture.

              </Text>
            </VStack>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={ (e)=> {
e.stopPropagation()
onClose()

        }}   />
      </Sheet>
    </>
  );
};

export default FitBlogModal;
