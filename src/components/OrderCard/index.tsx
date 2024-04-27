import AppImage from "@/components/AppImage";
import { dateDifference } from "@/lib/DateModeling";
import { CommaSeprator } from "@/lib/PriceFormat";
import { Box, Flex, Grid, Progress, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface IProps {
  categoryName: string;
  primaryImage: string;
  name: string;
  price: number;
  size: number;
  completionProcess: string;
  leatherType: string;
  paymentStatus: string;
  orderId: string;
  deliveryDate: string;
  quantity: number;
  hideProgress?: boolean;
  hideDaysLeft?: boolean;
}

export default function OrderCard({
  categoryName,
  primaryImage,
  name,
  price,
  size,
  completionProcess,
  leatherType,
  paymentStatus,
  orderId,
  deliveryDate,
  quantity,
  hideProgress,
  hideDaysLeft,
}: IProps) {
  let today = new Date().toISOString();
  const leftToDeliver = dateDifference(deliveryDate, today);

  
  const getProgressValue = () => {
    console.log("completionProcess", completionProcess);
    switch (completionProcess?.toLowerCase()) {
      case "ordered":
        return 20;
      case "assigned":
        return 40;
      case "dispatched":
        return 60;
      case "in_store":
        return 80;
      case "delivered":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <Grid
      className="order-card"
      rounded={"1rem"}
      overflow={"hidden"}
      placeItems={"center"}
    >
      <Flex
        width={"100%"}
        gap={"1.6rem"}
        alignItems={"center"}
        padding={"1.6rem 1.6rem 0 1.6rem"}
      >
        <Box width={100}>
          <Text
            fontSize={"0.9rem"}
            textTransform={"uppercase"}
            fontWeight={"bold"}
            color={"textSecondary"}
          >
            {categoryName}
          </Text>
          <Text fontSize={"1.4rem"}>{name}</Text>
        </Box>
        <Text fontWeight="bold" fontSize={"2rem"} ml={"0.4rem"}>
          NPR. {CommaSeprator(price) + " "}
        </Text>
      </Flex>
      <Flex
        padding={"0 1.6rem"}
        width={"100%"}
        gap="2rem"
        justify={"space-between"}
        placeItems={"center"}
      >
        <AppImage
          style={{ objectFit: "contain", borderRadius: "0.4rem" }}
          src={primaryImage}
          height={150}
          width={100}
          alt="product image"
        />
        <VStack
          fontSize={"1.2rem"}
          height={"100%"}
          width={"100%"}
          alignItems={"flex-start"}
        >
          <Flex gap={"1rem"}>
            <Text>Payment Status:</Text>
            <Box>
              {paymentStatus === "payment_complete" ? (
                <Text
                  fontWeight={"bold"}
                  textTransform={"capitalize"}
                  color={"success"}
                >
                  Complete
                </Text>
              ) : (
                <Text
                  fontWeight={"bold"}
                  textTransform={"capitalize"}
                  color={"error"}
                >
                  Incomplete
                </Text>
              )}
            </Box>
          </Flex>
          <Flex gap={"1rem"}>
            <Grid placeItems={"center"}>
              <Text>Leather Type</Text>
              <Text width={"100%"} className="order-card-leather">
                {leatherType || "N/A"}
              </Text>
            </Grid>
            <Grid placeItems={"center"}>
              <Text>Size</Text>
              <Text fontWeight={"bold"} fontSize={"1.4rem"}>
                {size}
              </Text>
            </Grid>
            <Grid placeItems={"center"}>
              <Text>Qty</Text>
              <Text fontWeight={"bold"} fontSize={"1.4rem"}>
                {quantity}
              </Text>
            </Grid>
          </Flex>

          <Flex gap={"1rem"}>
            <Text>Order No:</Text>
            <Text fontWeight={"bold"}>{orderId}</Text>
          </Flex>
          {!hideDaysLeft && <Text>{leftToDeliver} days left to deliver</Text>}
        </VStack>
      </Flex>
      {!hideProgress ? (
        <Box width={"100%"} className="order-progress-bar">
          <Text
            textTransform={"uppercase"}
            color={paymentStatus !== "payment_complete" ? "error" : "success"}
            width={"100%"}
            textAlign={"center"}
            fontWeight={"bold"}
            pt={"1rem"}
          >
            {paymentStatus !== "payment_complete" ? "Pending" : "Ordered"}
          </Text>
          <Progress
            rounded={"0.4rem"}
            background={"progressBackground"}
            width={getProgressValue() + "%" || 20}
            height={"0.4rem"}
            value={getProgressValue()}
          />
        </Box>
      ): <Box pb={"2rem"}></Box>}
    </Grid>
  );
}
