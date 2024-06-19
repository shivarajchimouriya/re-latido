import { logger } from "@/utils/logger";
import {
  Box,
  Center,
  Grid,
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";

interface IProps {
  imageUrl: string;
  editorRef: any;
}

export default function ImagePlayground({ imageUrl, editorRef }: IProps) {
  const [zoomValue, setZoomValue] = useState(10);
  const [rotationValue, setRotationValue] = useState(0);
  return (
    <Grid placeItems="center" width="full">
      <Box>
        <AvatarEditor
          ref={editorRef}
          image={imageUrl}
          width={250}
          height={250}
          borderRadius={200}
          border={1}
          color={[0, 0, 0, 0.72]}
          scale={zoomValue / 10}
          rotate={rotationValue}
        />
      </Box>
      <Box width="full" mt="1rem">
        <Text color="base" fontSize="1.6rem" fontWeight="semibold">
          Zoom
        </Text>
        <Slider
          min={10}
          max={50}
          step={1}
          aria-labelledby="Zoom"
          width="auto"
          aria-label="slider"
          onChange={(e) => setZoomValue(e)}
          defaultValue={10}
        >
          <SliderTrack rounded="full" bg="gray.600" h="1.2px">
            <SliderFilledTrack rounded="full" bg="primary" h="2px" />
          </SliderTrack>
          <SliderThumb
            top="0rem"
            left="-0.8rem"
            bg="base"
            width="1.2rem"
            height="1.2rem"
            rounded="full"
          />
        </Slider>
      </Box>
      <Box width="full" mt="1rem">
        <Text color="base" fontSize="1.6rem" fontWeight="semibold">
          Rotate
        </Text>
        <Slider
          min={-180}
          max={180}
          step={1}
          defaultValue={0}
          aria-labelledby="Rotation"
          width="auto"
          aria-label="slider"
          onChange={(e) => setRotationValue(e)}
        >
          <SliderTrack rounded="full" bg="gray.600" h="1.2px">
            <SliderFilledTrack rounded="full" bg="primary" h="2px" />
          </SliderTrack>
          <SliderThumb
            top="0rem"
            left="-0.8rem"
            bg="base"
            width="1.2rem"
            height="1.2rem"
            rounded="full"
          />
        </Slider>
      </Box>
    </Grid>
  );
}
