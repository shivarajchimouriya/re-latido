"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Link,
  Button,
  Modal,
  useToast,
  useModal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import { dateToMonthDayYear } from "@/utils/date";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import InvoiceCard from "../InvoiceCard";
import InvoicePdf from "../InvoicePdf";
import { appColor } from "@/theme/foundations/colors";
import { logger } from "@/utils/logger";
import Toast from "@/components/Toast";

interface InvoiceProps {
  invoiceId: number;
  date: string;
  billingAddress?: string;
  deliveryAddress?: string;
  subtotal: number;
  promoDiscount?: number;
  finalAmount: number;
  createdAt: string;
  productName: string;
  currency: string;
  full_name: string;
}

const Invoice: React.FC<InvoiceProps> = ({
  invoiceId,
  date,
  billingAddress = "N/A",
  deliveryAddress = "N/A",
  subtotal,
  promoDiscount,
  finalAmount,
  createdAt,
  productName,
  currency,
  full_name,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToast();

  const onDownloadClicked = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const invoice: any = document.querySelector("#invoice");
    const data = await html2canvas(invoice);
    const img = data.toDataURL("image/png");

    const a4Width = 210 * 2;
    const a4Height = 297 * 2;

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const marginX = (pageWidth - a4Width) / 2;
    const marginY = (pageHeight - a4Height) / 2;

    pdf.addImage(img, "PNG", marginX, marginY, a4Width, a4Height);
    if (
      pdf.save(
        `Invoice-${invoiceId}-${full_name
          .split(" ")
          .join("-")
          .toLocaleLowerCase()}.pdf`
      )
    ) {
      toast({
        position: "top",
        render: ({ onClose }) => {
          return (
            <Toast status="success" onClose={onClose} message="Pdf Saved." />
          );
        },
      });
      onClose();
    }
  };

  return (
    <Box
      width={"100%"}
      py="6"
      bg="background"
      borderRadius="lg"
      fontFamily="Arial, sans-serif"
      px={8}
    >
      <VStack spacing="4" mb="6">
        <HStack w="100%">
          <VStack w={"50%"} align="start" spacing="0">
            <Text color="black" fontSize={"1.2rem"}>
              INVOICE ID
            </Text>
            <Text fontWeight="bold" fontSize={"1.2rem"}>
              #{invoiceId}
            </Text>
          </VStack>
          <VStack align="start" spacing="0">
            <Text color="black" fontSize={"1.2rem"}>
              DATE
            </Text>
            <Text fontWeight="bold" fontSize={"1.2rem"}>
              {dateToMonthDayYear(date)}
            </Text>
          </VStack>
        </HStack>
        <HStack w="100%">
          <VStack w={"50%"} align="start" spacing="0">
            <Text fontSize={"1.2rem"} color="black">
              BILLING ADDRESS
            </Text>
            <Text fontWeight="bold" fontSize={"1.2rem"}>
              {billingAddress}
            </Text>
          </VStack>
          <VStack align="start" spacing="0">
            <Text fontSize={"1.2rem"} color="black">
              DELIVERY ADDRESS
            </Text>
            <Text fontWeight="bold" fontSize={"1.2rem"}>
              {deliveryAddress}
            </Text>
          </VStack>
        </HStack>
      </VStack>
      <InvoiceCard
        finalAmount={finalAmount}
        promoDiscount={promoDiscount}
        subtotal={subtotal}
      />
      <Button
        type="button"
        width="full"
        onClick={onOpen}
        fontSize={"1.2rem"}
        textDecoration={"underline"}
        display="block"
        textAlign="end"
        mt="8"
        color="blue.500"
      >
        Download as PDF
      </Button>
      {isOpen ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg={"rgba(0, 0, 0, 0.8)"} />

          <ModalContent
            h="fit-content"
            bg={appColor.base}
            boxShadow={"lg"}
            display={"grid"}
            placeItems={"center"}
            rounded={"8px"}
            m={4}
            border={"1px solid var(--text-primary)"}
          >
            <Box id="invoice" width="96%">
              <InvoicePdf
                order_no={invoiceId}
                createdAt={createdAt}
                productName={productName}
                currency={currency}
                price={subtotal}
                total_amount={finalAmount}
                full_name={full_name}
              />
            </Box>
            <Box padding={2} width="full">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                w={"full"}
                className="primary-button"
                onClick={onDownloadClicked}
              >
                Download
              </Button>
            </Box>
          </ModalContent>
        </Modal>
      ) : null}
    </Box>
  );
};

export default Invoice;
