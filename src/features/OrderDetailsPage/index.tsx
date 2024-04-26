import React from "react";
import orderDetails from "@/data/mock/orderDetails";
import { Container, Flex, Grid, Text } from "@chakra-ui/react";
import OrderCard from "@/components/OrderCard";
import { dateDifference } from "@/lib/DateModeling";
import CustomizedProgress from "./Collections/components/CustomizedProgress";

interface IProps {
  orderId: string;
}
export default function OrderDetailsPage({ orderId }: IProps) {
  const { data } = orderDetails;

  const today = new Date().toISOString();
  const deliveryDate = data?.orderDetail?.delivery_date;
  const diff = dateDifference(deliveryDate, today);
  return (
    <Container>
      <Grid>
        {diff > 0 && (
          <Text
            width={"100%"}
            fontSize={"1.2rem"}
            textAlign={"right"}
            mb={"0.6rem"}
            textTransform={"uppercase"}
            fontWeight={"600"}
            color={"progressBackground"}
          >
            {diff} days remaining
          </Text>
        )}
        <OrderCard
          categoryName={data?.orderDetail?.product?.category?.title}
          primaryImage={data?.orderDetail?.product?.primary_image}
          name={data?.orderDetail?.product?.name}
          price={
            data?.orderDetail?.product_specification?.price?.value ||
            data?.orderDetail?.total_amount
          }
          size={data?.orderDetail?.product_specification?.size}
          completionProcess={data?.orderDetail?.completion_process}
          leatherType={
            data?.orderDetail?.product_specification?.leather_id?.item_name
          }
          paymentStatus={data?.orderDetail?.payment_status}
          deliveryDate={data?.orderDetail?.delivery_date}
          orderId={data?.orderDetail?.order_no + ""}
          quantity={1}
          hideProgress={true}
          hideDaysLeft={true}
        />

        <Text
          variant="h6"
          py={"2rem"}
          color={"textSecondary"}
          textAlign={"center"}
        >
          The tracking number of your order is XDFJIFD, you can track your order
          here.
        </Text>

        <CustomizedProgress
        orderProgress={data?.orderProgress}
        />

        {/* <Box display="flex" justifyContent="center" marginTop={1}>
          {data?.data?.data?.orderDetail?.payment_status ===
          'payment_complete' ? (
            <CustomizedProgress
              orderProgress={data?.data?.data?.orderProgress}
            />
          ) : (
            <Button
              // className={combineStyles([justifyCenter, flex, container])}
              onClick={completeOrderPress}
              style={{
                backgroundColor: colors.offBlack,
                color: colors.white,
                padding: 15,
                marginTop: 10,
              }}>
              COMPLETE YOUR ORDER
            </Button>
          )}
        </Box> */}
      </Grid>
    </Container>
  );
}
