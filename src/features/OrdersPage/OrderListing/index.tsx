import React from "react";
import { TODO } from "../../../../global";
import { Grid } from "@chakra-ui/react";
import OrderCard from "@/components/OrderCard";

interface IProps {
  orders: TODO;
}
export default function OrderListing({ orders }: IProps) {
    return <Grid gap={"1.6rem"} width={"100%"}>
        {orders?.map((order: TODO) => (
            <OrderCard
                key={order._id} categoryName={order?.product?.category?.title}
                primaryImage={order?.product?.primary_image}
                name={order?.product?.name}
                price={order?.product_specification?.price?.value || order?.total_amount}
                size={order?.product_specification?.size}
                completionProcess={order?.completion_process}
                leatherType={order?.product_specification?.leather_id?.item_name}
                paymentStatus={order?.payment_status}
                orderId={order?.order_no}
                deliveryDate={order?.delivery_date}
                quantity={1}
            />
        ))}
  </Grid>;
}