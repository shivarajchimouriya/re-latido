import { logger } from "@/utils/logger";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  filter: Record<string, any>;
}

const AppliedFilters = ({ filter }: IProps) => {
  logger.log("filters ", filter);
  const filterMap = Object.entries(filter);

  return (
    <Flex flexWrap={"wrap"}>
      <Text
        fontSize="2rem"
        textTransform="capitalize"
        fontWeight="bold"
        my="2rem"
      >
        {" "}results from applied Filters{" "}
      </Text>
    </Flex>
  );
};

export default AppliedFilters;
