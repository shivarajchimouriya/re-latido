import React from "react";
import { profileData } from "@/data/mock/profileData";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Grid,
  HStack,
  Text,
  VStack
} from "@chakra-ui/react";
import { TbFileInvoice, TbLogout, TbShoppingBagCheck } from "react-icons/tb";
import AppImage from "@/components/AppImage";
import { appColor } from "@/theme/foundations/colors";
import { AddSpaceOnPhone } from "@/lib/AddSpaceOnPhone";
import { DateDifference, EpochToRedable } from "@/lib/DateModeling";
import Link from "next/link";
import { FaFileInvoiceDollar } from "react-icons/fa";

export default function ProfilePage() {
  const { data } = profileData;
  return (
    <Grid width={"100%"}>
      <Flex
        justifyContent={"start"}
        alignItems={"center"}
        p={"1rem"}
        gap={"2rem"}
        mt={"2.5rem"}
      >
        <AppImage
          style={{ borderRadius: "100%" }}
          alt={data.name}
          src={data.profile_image}
          width={90}
          height={90}
        />
        <Grid gap={"0.4rem"}>
          <Text
            fontSize={"1.6rem"}
            fontWeight={"bold"}
            color="textPrimary"
            textTransform={"uppercase"}
          >
            {data.name}
          </Text>
          <Box fontSize={"1.4rem"} color="textSecondary">
            <Text>
              {AddSpaceOnPhone(data.phone)}
            </Text>
            <Text>
              {data.email}
            </Text>
          </Box>
        </Grid>
      </Flex>
      <Flex p={8} gap={"2rem"} color={"textPrimary"} alignItems={"center"}>
        <Button
          as={Link}
          href={`/profile/edit`}
          px={"1rem"}
          py={"0.3rem"}
          fontWeight={"bold"}
          fontSize={"1.2rem"}
          border={"1px solid " + appColor.textPrimary}
          rounded={"0.4rem"}
        >
          Edit Profile
        </Button>
        <Flex
          fontSize={"1.2rem"}
          gap={"0.4rem"}
          alignItems={"center"}
          textTransform={"uppercase"}
        >
          <Text>With latido since</Text>
          <Text fontWeight={"bold"}>
            {EpochToRedable(DateDifference(data.createdAt))}
          </Text>
        </Flex>
      </Flex>
      <ButtonGroup
        orientation="vertical"
        fontSize={"1.6rem"}
        fontWeight={"bold"}
        color={"textPrimary"}
        mt={"3rem"}
        width={"inherit"}
        p={8}
      >
        <Link href="/orders">
          <Button
            px={"1rem"}
            py={"1rem"}
            rounded={"0.4rem"}
            fontWeight={"bold"}
            justifyContent={"flex-start"}
          >
            <Flex gap={"2rem"} left={0} alignItems={"center"}>
              <TbShoppingBagCheck fontSize={"2rem"} />
              Orders
            </Flex>
          </Button>
        </Link>

        <Link href="/digital-invoice">
          <Button
            px={"1rem"}
            py={"1rem"}
            rounded={"0.4rem"}
            fontWeight={"bold"}
            justifyContent={"flex-start"}
          >
            <Flex gap={"2rem"} left={0} alignItems={"center"}>
              <FaFileInvoiceDollar
                fontSize={"2rem"}
                style={{ marginLeft: "-0.3rem" }}
              />
              Invoice
            </Flex>
          </Button>
        </Link>

        <Link href={"/auth/logout"}>
          <Button
            px={"1rem"}
            py={"1rem"}
            rounded={"0.4rem"}
            fontWeight={"bold"}
            justifyContent={"flex-start"}
          >
            <Flex gap={"2rem"} left={0} alignItems={"center"} color="red.500">
              <TbLogout fontSize={"2rem"} />
              Logout
            </Flex>
          </Button>
        </Link>
      </ButtonGroup>
    </Grid>
  );
}
