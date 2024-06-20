"use client";
import React from "react";
import LatidoHeader from "../LatidoHeader";
import {
  Box,
  FormControl,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function LogoWithSearch({ onClose }: { onClose: () => void }) {
  return (
    <Grid gap="2rem" width="96%">
      <LatidoHeader />
      <Link href="/search">
        <Box
          bg="light-black"
          rounded="8px"
          pl="1.6rem"
          onClick={onClose}
        >
          <FormControl>
            <InputGroup>
              <InputLeftElement h="full">
                <CiSearch color="white" fontSize="1.6rem" />
              </InputLeftElement>
              <Input
                readOnly
                fontSize="1.2rem"
                pl="2.4rem"
                border="none"
                type="text"
                color="white"
                fontWeight="medium"
                _placeholder={{
                  color: "base",
                  opacity: 0.6,
                }}
                placeholder="Search your product"
              />
            </InputGroup>
          </FormControl>
        </Box>
      </Link>
    </Grid>
  );
}
