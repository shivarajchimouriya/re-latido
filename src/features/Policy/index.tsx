import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const PolicyContainer = () => {
  return (
    <VStack w="full" p="1rem" bg="dark_bg" color="white" fontSize="1.4rem">
      <Text
        color="#707580"
        fontSize="2.3rem "
        textTransform="uppercase"
        py="1rem"
      >
        policy
      </Text>

      <Box as="ol" p="2rem" display="flex" flexDir="column" gap="2rem">
        <Box>
          <Box as="li" py="1rem" fontWeight="bold" fontSize="1.6rem">
            {" "}Collection of Personal Information:{" "}
          </Box>
          <Text>
            When you register with us or voluntarily provide information, we may
            request "personal information." This encompasses data that enables
            us to identify you personally. The purpose of collecting this
            information is multifaceted, including, but not limited to,
            informing you about promotional opportunities, providing event
            updates, offering services, and enhancing your experience on our
            website. It's important to note that you have the option to
            unsubscribe from our email list at any time, should you wish to do
            so. Your privacy and preferences are of utmost importance to us.
          </Text>
        </Box>

        <Box>
          <Box as="li" py="1rem" fontWeight="bold" fontSize="1.6rem">
            Shipping & Delivery Information
          </Box>
          <Text>
            At Latido, we provide a single, reliable shipping service to ensure
            your orders are delivered promptly. The delivery time may vary based
            on your location. Our shipping service is designed to bring our
            exceptional products to your doorstep with care and efficiency. You
            can expect a timely and dependable delivery experience for all your
            orders.
          </Text>
        </Box>

        <Box>
          <Box as="li" py="1rem" fontWeight="bold" fontSize="1.6rem">
            {" "}Order Tracking
          </Box>
          <Text>
            To track your order, we will send you a tracking code via email. You
            can use this code to visit the logistic company’s website. Simply
            follow these steps:
          </Text>
          <Box as="ul" p="2rem">
            <Box as="li">
              {" "}Check your email for the tracking code we've sent you.
            </Box>

            <Box as="li">Visit the Logistic Companys website</Box>

            <Box as="li">
              Locate the tracking section on the logistic company’s website.
            </Box>

            <Box as="li">Enter the tracking code provided in your email.</Box>

            <Box as="li">
              Click "Track" to view the real-time status and location of your
              order as it makes its way to your destination.
            </Box>
            <Box as="li">
              If you have any questions or encounter any issues while tracking
              your order, please don't hesitate to contact our customer support
              team. We are here to assist you throughout the process and ensure
              your order reaches you smoothly. Your satisfaction is our
              priority, and we aim to provide you with a hassle-free shopping
              experience.
            </Box>
          </Box>
        </Box>

        <Box>
          <Box as="li" py="1rem" fontWeight="bold" fontSize="1.6rem">
            Warranty{" "}
          </Box>
          <Text>
            At Latido , we meticulously craft our products to seamlessly
            integrate into your life for many years to come. We take immense
            pride in our products, the materials we use, and our design process.
            We are fully committed to standing behind our creations.
          </Text>

          <Text>
            In the rare event that you encounter any issues with your purchase,
            we are pleased to offer comprehensive warranty coverage, subject to
            certain production limitations. Our warranty encompasses repair and
            maintenance services to ensure your continued satisfaction.
          </Text>

          <Text>
            It's important to note that our warranty does not extend to
            instances where issues arise due to the inherent nature of leather
            products or external factors beyond our control.
          </Text>

          <Text>
            Should you have any inquiries or require further assistance, please
            do not hesitate to reach out to our dedicated quality control team.
            We are here to assist you and address any concerns you may have.
            Your satisfaction remains our top priority.
          </Text>
        </Box>

        <Box>
          <Box as="li" py="1rem" fontWeight="bold" fontSize="1.6rem">
            {" "}Payment Terms{" "}
          </Box>
          <Text>
            To facilitate a seamless ordering process, we kindly request full
            payment at the time of placing your order. We accept the following
            payment methods for your convenience: Phonepay.
          </Text>
        </Box>

        <Box>
          <Box as="li" py="1rem" fontWeight="bold" fontSize="1.6rem">
            {" "}Exchange & Refund Policy{" "}
          </Box>
          <Text>
            As we do not stock any jackets it allows use to effectively
            personalize each orders, hence we refrain from taking exchange or
            returns for orders. Hence, Personalized items are not eligible for
            exchange unless they are defective or damaged upon receipt.
          </Text>
        </Box>
      </Box>

      <Box>
        <Box py="1rem" fontWeight="bold" fontSize="1.6rem">
          6a. Exchanges
        </Box>
        <Box as="ul" p="2rem">
          <Text as="li">
            We offer exchanges for items that are defective, damaged, or if you
            received the wrong item. If you need to exchange an item, please
            contact us at help@latido.com.np within 7 days of receiving the
            item.
          </Text>
          <Text as="li">
            We will provide instructions on how to return the item for an
            exchange. If the item is no longer in stock, we will issue a refund
            or offer a suitable alternative.
          </Text>
        </Box>
      </Box>

      <Box>
        <Box py="1rem" fontWeight="bold" fontSize="1.6rem">
          6 b. Shipping
        </Box>
        <Box as="ul" p="2rem">
          <Text as="li">
            Shipping costs for returns and exchanges are the responsibility of
            the customer unless the return or exchange is due to an error on our
            part.
          </Text>
        </Box>
      </Box>
      <Box>
        <Box py="1rem" fontWeight="bold" fontSize="1.6rem">
          6c. Shipping
        </Box>
        <Box as="ul" p="2rem">
          <Text as="li">
            If you have any questions about our Return and Refund Policy or need
            assistance with a return or exchange, please contact our customer
            support team at help@latido.com.np or +977 – 9801154484.
          </Text>
        </Box>
      </Box>
    </VStack>
  );
};

export default PolicyContainer;
