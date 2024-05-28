import { DigitalInvoicePage } from "@/features/DigitalInvoicePage";
import React from "react";
interface IProps {
  params: {
    id: string;
  };
}
export default function DigitalInvoice({ params }: IProps) {
  return <DigitalInvoicePage id={params?.id} />;
}
