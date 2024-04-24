import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  return (
    <Box>
      <IconButton
        icon={<RiSearch2Line />}
        aria-label="search"
        fontSize="2rem"
      />
    </Box>
  );
};

export default Search;
