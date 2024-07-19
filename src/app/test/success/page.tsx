"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function page() {
  const url = usePathname();
  console.log('url: ', url);
  const urlEncodedString =
    "xmlmsg=%3CMessage+date%3D%2217%2F07%2F2024+03%3A18%3A51%22%3E++++%3CVersion%3E1.0%3C%2FVersion%3E++++%3COrderID%3E10003731%3C%2FOrderID%3E++++%3CSessionId%3E5xqte7etu1g4%3C%2FSessionId%3E++++%3CLanguage%3Een%3C%2FLanguage%3E++++%3CTransactionType%3EPurchase%3C%2FTransactionType%3E++++%3COrderDescription%3Etestdocument%3C%2FOrderDescription%3E++++%3CPurchaseAmount%3E100%3C%2FPurchaseAmount%3E++++%3CPurchaseAmountScr%3E1%3C%2FPurchaseAmountScr%3E++++%3CTotalAmount%3E100%3C%2FTotalAmount%3E++++%3CTotalAmountScr%3E1%3C%2FTotalAmountScr%3E++++%3CCurrency%3E524%3C%2FCurrency%3E++++%3CCurrencyScr%3ENepalese+Rupee%3C%2FCurrencyScr%3E++++%3CTranDateTime%3E17%2F07%2F2024+03%3A18%3A51%3C%2FTranDateTime%3E++++%3COrderStatus%3ECANCELED%3C%2FOrderStatus%3E++++%3COrderStatusScr%3ECanceled%3C%2FOrderStatusScr%3E++++%3CRezultOperation%3EOperation+result%3C%2FRezultOperation%3E++++%3CBankName%3EPSP+NABIL%3C%2FBankName%3E++++%3CShopName%3Elatido.com.np%3C%2FShopName%3E%3C%2FMessage%3E&orderId=10003731&sessionId=5xqte7etu1g4&merchant=NABIL106748&language=en";
  const urlParams = new URLSearchParams(urlEncodedString);
  const xmlMsg = decodeURIComponent(urlParams.get("xmlmsg") as any);

  const parseXml = (xmlString: any) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");
    return xmlDoc;
  };

  const extractData = (xmlDoc: any) => {
    const data = {
      date: xmlDoc.getElementsByTagName("Message")[0].getAttribute("date"),
      version: xmlDoc.getElementsByTagName("Version")[0].textContent,
      orderId: xmlDoc.getElementsByTagName("OrderID")[0].textContent,
      sessionId: xmlDoc.getElementsByTagName("SessionId")[0].textContent,
      language: xmlDoc.getElementsByTagName("Language")[0].textContent,
      transactionType:
        xmlDoc.getElementsByTagName("TransactionType")[0].textContent,
      orderDescription:
        xmlDoc.getElementsByTagName("OrderDescription")[0].textContent,
      purchaseAmount:
        xmlDoc.getElementsByTagName("PurchaseAmount")[0].textContent,
      purchaseAmountScr:
        xmlDoc.getElementsByTagName("PurchaseAmountScr")[0].textContent,
      totalAmount: xmlDoc.getElementsByTagName("TotalAmount")[0].textContent,
      totalAmountScr:
        xmlDoc.getElementsByTagName("TotalAmountScr")[0].textContent,
      currency: xmlDoc.getElementsByTagName("Currency")[0].textContent,
      currencyScr: xmlDoc.getElementsByTagName("CurrencyScr")[0].textContent,
      tranDateTime: xmlDoc.getElementsByTagName("TranDateTime")[0].textContent,
      orderStatus: xmlDoc.getElementsByTagName("OrderStatus")[0].textContent,
      orderStatusScr:
        xmlDoc.getElementsByTagName("OrderStatusScr")[0].textContent,
      rezultOperation:
        xmlDoc.getElementsByTagName("RezultOperation")[0].textContent,
      bankName: xmlDoc.getElementsByTagName("BankName")[0].textContent,
      shopName: xmlDoc.getElementsByTagName("ShopName")[0].textContent,
    };
    return data;
  };

    const xmlDoc = parseXml(xmlMsg);
    
    console.log('xml doc: ', xmlDoc);

  const data = extractData(xmlDoc);

  return (
    <div
      style={{
        fontSize: "2rem",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Transaction Details
        </h1>
        <br />
        <br />
        <p>
          <strong>Date:</strong> {data.date}
        </p>
        <p>
          <strong>Version:</strong> {data.version}
        </p>
        <p>
          <strong>Order ID:</strong> {data.orderId}
        </p>
        <p>
          <strong>Session ID:</strong> {data.sessionId}
        </p>
        <p>
          <strong>Language:</strong> {data.language}
        </p>
        <p>
          <strong>Transaction Type:</strong> {data.transactionType}
        </p>
        <p>
          <strong>Order Description:</strong> {data.orderDescription}
        </p>
        <p>
          <strong>Purchase Amount:</strong> {data.purchaseAmount}
        </p>
        <p>
          <strong>Purchase Amount (Scr):</strong> {data.purchaseAmountScr}
        </p>
        <p>
          <strong>Total Amount:</strong> {data.totalAmount}
        </p>
        <p>
          <strong>Total Amount (Scr):</strong> {data.totalAmountScr}
        </p>
        <p>
          <strong>Currency:</strong> {data.currency}
        </p>
        <p>
          <strong>Currency (Scr):</strong> {data.currencyScr}
        </p>
        <p>
          <strong>Transaction Date and Time:</strong> {data.tranDateTime}
        </p>
        <p>
          <strong>Order Status:</strong> {data.orderStatus}
        </p>
        <p>
          <strong>Order Status (Scr):</strong> {data.orderStatusScr}
        </p>
        <p>
          <strong>Result Operation:</strong> {data.rezultOperation}
        </p>
        <p>
          <strong>Bank Name:</strong> {data.bankName}
        </p>
        <p>
          <strong>Shop Name:</strong> {data.shopName}
        </p>
      </div>
    </div>
  );
}
