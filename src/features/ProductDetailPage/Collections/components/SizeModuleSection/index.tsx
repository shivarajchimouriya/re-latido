"use client";
import { logger } from "@/utils/logger";
import { useEffect, useState } from "react";
import FitSelection from "../FitSelection";
import ButtonComponent from "../Button";
import SizeModal from "../SizeModal";
import { useDisclosure } from "@chakra-ui/react";

interface ISizeDetails {
  age: number;
  height: string;
  weight: number;
}

export default function SizeModuleSection({
  productId,
}: {
  productId: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [heightOptionsValues, setHeightOptionsValues] = useState<string[]>([]);

  const [sizeDetails, setSizeDetails] = useState<ISizeDetails>({
    height: "4.11",
    weight: 60,
    age: 24,
  });

  const heightOptions = () => {
    const height = [];
    for (let heightFit = 1; heightFit <= 8; heightFit++) {
      for (let heightIn = 0; heightIn <= 12; heightIn++) {
        height.push(`${heightFit}'${heightIn}"`);
      }
    }
    setHeightOptionsValues(height);
  };

  useEffect(() => {
    heightOptions();
  }, []);

  const sizeDetailSubmit = () => {
    logger.log("values: ", sizeDetails);

    // const queryNodeValues = {
    //   product: productDetail.name,
    //   Weight: values.weight.toString(),
    //   Height: values.height.toString(),
    //   Fit: "general",
    //   Gender: "male",
    //   Age: values?.age.toString(),
    // };

    // getNodes({
    //   variables: {
    //     filters: {
    //       and: [
    //         {
    //           products: { title: { in: [queryNodeValues.product as string] } },
    //         },
    //         {
    //           attribute_values: {
    //             and: [
    //               {
    //                 attribute: { name: { in: ["Fit"] } },
    //               },
    //               {
    //                 valueOne: {
    //                   in: [
    //                     FIT_ENUM.COMFORT,
    //                     FIT_ENUM.GENERAL,
    //                     FIT_ENUM.SKIN_TIGHT,
    //                     FIT_ENUM.REGULAR,
    //                   ],
    //                 },
    //               },
    //             ],
    //           },
    //         },
    //         {
    //           attribute_values: {
    //             and: [
    //               {
    //                 attribute: { name: { in: ["Gender"] } },
    //               },
    //               { valueOne: { in: [queryNodeValues.Gender] } },
    //             ],
    //           },
    //         },
    //         {
    //           attribute_values: {
    //             and: [
    //               {
    //                 attribute: { name: { in: ["Weight"] } },
    //               },
    //               { valueOne: { lte: queryNodeValues?.Weight } },
    //               { valueTwo: { gte: queryNodeValues?.Weight } },
    //             ],
    //           },
    //         },
    //         {
    //           attribute_values: {
    //             and: [
    //               {
    //                 attribute: { name: { in: ["Height"] } },
    //               },
    //               { valueOne: { in: [queryNodeValues?.Height] } },
    //             ],
    //           },
    //         },
    //       ],
    //     },
    //   },
    // });

    // getMultipleNodes({
    //   variables: {
    //     filters: {
    //       and: [
    //         { products: { title: { in: [queryNodeValues.product as string] } } },
    //         {
    //           attribute_values: {
    //             and: [
    //               {
    //                 attribute: { name: { in: ["Fit"] } },
    //               },
    //               { valueOne: { in: [queryNodeValues.Fit] } },
    //             ],
    //           },
    //         },
    //         {
    //           attribute_values: {
    //             and: [
    //               {
    //                 attribute: { name: { in: ["Gender"] } },
    //               },
    //               { valueOne: { in: [queryNodeValues.Gender] } },
    //             ],
    //           },
    //         },
    //         {
    //           attribute_values: {
    //             and: [
    //               {
    //                 attribute: { name: { in: ["Weight"] } },
    //               },
    //               { valueOne: { lte: queryNodeValues?.Weight } },
    //               { valueTwo: { gte: queryNodeValues?.Weight } },
    //             ],
    //           },
    //         },
    //         {
    //           attribute_values: {
    //             and: [
    //               {
    //                 attribute: { name: { in: ["Height"] } },
    //               },
    //               { valueOne: { in: queryNodeValues?.Height as any } },
    //             ],
    //           },
    //         },
    //       ],
    //     },
    //   },
    // });
  };

  return (
    <>
      <FitSelection productId={productId} />
      <ButtonComponent
        productId={productId}
        heightOptionsValues={heightOptionsValues}
        setSizeDetails={setSizeDetails}
        sizeDetailSubmit={sizeDetailSubmit}
        onOpen={onOpen}
      />
      <SizeModal
        heightOptions={heightOptionsValues}
        productId={productId}
        isOpen={isOpen}
        onClose={onClose}
        setSizeDetails={setSizeDetails}
        sizeDetailSubmit={sizeDetailSubmit}
      />
    </>
  );
}
