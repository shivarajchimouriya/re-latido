"use client";

import {
  Box,
  Flex,
  Grid,
  IconButton,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import React from "react";
import { TODO } from "../../../../../../global";
import { IoMdCheckmark } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";
import { ImCheckmark } from "react-icons/im";

interface IProps {
  orderProgress: TODO;
}
export default function CustomizedProgress({ orderProgress }: IProps) {
  let activeStepCustom;
  if (orderProgress?.leather_cleaning_complete) {
    activeStepCustom = 5;
  } else if (orderProgress?.leather_verification_complete) {
    activeStepCustom = 4;
  } else if (orderProgress?.leather_stitching_complete) {
    activeStepCustom = 3;
  } else if (orderProgress?.leather_cutting_complete) {
    activeStepCustom = 2;
  } else if (orderProgress?.package_selection_complete) {
    activeStepCustom = 1;
  } else {
    activeStepCustom = 0;
  }

  const steps = [
    { title: "Pattern Selection" },
    { title: "Leather Cutting" },
    { title: "Stitching" },
    { title: "Verifying" },
    { title: "Cleaning" },
  ];

  const { activeStep } = useSteps({
    index: activeStepCustom,
    count: steps.length,
  });
  1;
  return (
    <Grid placeItems={"center"} mt={"2rem"}>
      <Stepper
        variant={"ankit"}
        index={activeStep}
        orientation="vertical"
        height="400px"
        gap="0"
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <Flex alignItems={"center"} placeItems={"center"} gap={"1rem"}>
              <StepIndicator>
                <StepStatus
                  complete={
                    <IconButton
                      p={"0.6rem"}
                      background={"var(--progress-background)"}
                      border={"4px solid var(--progress-background)"}
                      rounded={"100%"}
                      aria-label="checkmark"
                      icon={<ImCheckmark color="white" />}
                    />
                  }
                  incomplete={
                    <IconButton
                      p={"0.6rem"}
                      background={"var(--primary)"}
                      border={"4px solid var(--primary)"}
                      rounded={"100%"}
                      aria-label="checkmark"
                      icon={<ImCheckmark color="var(--base)" />}
                    />
                  }
                  active={
                    <IconButton
                      p={"0.6rem"}
                      background={"var(--base)"}
                      border={"4px solid var(--progress-background)"}
                      rounded={"100%"}
                      aria-label="checkmark"
                      icon={<ImCheckmark color="var(--progress-background)" />}
                    />
                  }
                />
              </StepIndicator>

              <Box
                flexShrink="0"
                fontSize={"1.4rem"}
                fontWeight={"bold"}
                color={
                  index <= activeStep
                    ? "var(--progress-background)"
                    : "var(--primary)"
                }
              >
                <StepTitle>{step.title}</StepTitle>
              </Box>
            </Flex>
            <Box ml={"1.3rem"}>
              <StepSeparator />
            </Box>
          </Step>
        ))}
      </Stepper>
    </Grid>
  );
}
