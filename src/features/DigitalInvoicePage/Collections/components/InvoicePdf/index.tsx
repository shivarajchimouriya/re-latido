import {
  Box,
  Divider,
  Grid,
  Text,
  Container,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
} from "@chakra-ui/react";

import LogoIcon from "@/components/Icons/Logo";
import { appColor } from "@/theme/foundations/colors";
import dayjs from "dayjs";
import { CommaSeprator } from "@/lib/PriceFormat";
import AppImage from "@/components/AppImage";
import { brandLogoWide } from "@/constants/images";
interface IProps {
  order_no: number;
  createdAt: string;
  productName: string;
  currency: string;
  price: number;
  total_amount: number;
  full_name: string;
}

function InvoicePDF({
  order_no,
  createdAt,
  productName,
  currency,
  price,
  total_amount,
  full_name,
}: IProps) {
  return (
    <Box
      p={2}
      mt={4}
      bg="white"
      width="100%"
      outline={"0.5px solid var(--primary)"}
      rounded={"8px"}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        my={12}
      >
        <AppImage src={brandLogoWide} height={50} width={200} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginBottom={5}
      >
        <Text
          variant="h1"
          fontSize="3rem"
          fontWeight={500}
          lineHeight={0.8}
          mb={4}
        >
          INVOICE
        </Text>
        <Text fontWeight="bold" variant="h6">
          Order #{order_no}
        </Text>
      </Box>
      <Box marginBottom={5} mx={4}>
        <Text variant="subtitle1" fontWeight="bold">
          Hi, {full_name}
        </Text>
        <Text variant="h6" color={appColor.base}></Text>
      </Box>
      <Box marginBottom={5} mx={4}>
        <Container>
          <Grid>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text variant="h6"> Date:</Text>
              <Text fontWeight="bold" variant="h6">
                {dayjs(createdAt).format("MMM D, YYYY")}
              </Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text variant="h6">Client:</Text>
              <Text
                fontWeight="bold"
                variant="h6"
                style={{ textTransform: "capitalize" }}
              >
                {full_name}
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Box bg="#E3EDF7" borderRadius="10px" padding="15px 15px">
        {/* table heading */}
        <Table width={"full"} textAlign="left">
          <Thead>
            <Tr>
              <Th>
                <Text fontWeight="bold" color={appColor.black}>
                  Product Name
                </Text>
              </Th>
              <Th>
                <Text fontWeight="bold" color={appColor.black}>
                  Qty
                </Text>
              </Th>
              <Th></Th>
              <Th>
                <Text align="right" fontWeight="bold" color={appColor.black}>
                  Total
                </Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Text variant="h6" my={2}>
                  {productName}
                </Text>
              </Td>
              <Td>
                <Text variant="h6">1</Text>
              </Td>
              <Td></Td>
              <Td>
                <Text
                  variant="h6"
                  align="right"
                  style={{ textTransform: "uppercase" }}
                >
                  {currency} {CommaSeprator(price)}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td colSpan={4} textAlign="right" justifyItems={"end"} right={0}>
                <Flex justifyContent={"end"} my={2}>
                  <Divider height={"0.5px"} w={"60%"} bg={appColor.black} />
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td colSpan={3}>
                <Text align="right" variant="h6">
                  Subtotal:
                </Text>
              </Td>
              <Td>
                <Text variant="h6" align="right">
                  NRS {CommaSeprator(total_amount || 0)}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td colSpan={3}>
                <Text align="right" variant="h6">
                  Shipping Fee:
                </Text>
              </Td>
              <Td>
                <Text variant="h6" align="right">
                  NRS {0}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td colSpan={4} textAlign="right" justifyItems={"end"} right={0}>
                <Flex justifyContent={"end"} my={2}>
                  <Divider height={"0.5px"} w={"70%"} bg={appColor.black} />
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td colSpan={3}>
                <Text align="right" fontWeight="bold" variant="h6">
                  Total Amount:
                </Text>
              </Td>
              <Td>
                <Text variant="h6" fontWeight="bold" align="right">
                  NRS {CommaSeprator(total_amount || 0)}
                </Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Grid
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: 10,
          }}
        ></Grid>
      </Box>
    </Box>
  );
}

export default InvoicePDF;
