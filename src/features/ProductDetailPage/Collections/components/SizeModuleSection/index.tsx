"use client";
import { logger } from "@/utils/logger";
import { useEffect, useState } from "react";
import FitSelection from "../FitSelection";
import ButtonComponent from "../Button";
import SizeModal from "../SizeModal";
import { useDisclosure } from "@chakra-ui/react";
import { FIT_ENUM } from "../SizeModal/FitEnums";
import { useGetNodesLazyQuery } from "@/GraphQl/Generated/graphql";
import SizeSelector from "../SizeSelector";
import { useSearchParams, useRouter } from "next/navigation";

export interface ISizeDetails {
  age: string;
  height: string;
  weight: string;
}

export default function SizeModuleSection({
  productId,
  productName,
}: {
  productId: string;
  productName: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlAge = searchParams.get("age");
  const urlHeight = searchParams.get("height");
  const urlWeight = searchParams.get("weight");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [heightOptionsValues, setHeightOptionsValues] = useState<string[]>([]);

  const [sizeDetails, setSizeDetails] = useState<ISizeDetails>({
    height: urlHeight || "4.11",
    weight: urlWeight || "60",
    age: urlAge || "24",
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

  const [getNodes, { data: nodeData, loading: nodeQueryLoading }] =
    useGetNodesLazyQuery({
      onCompleted: () => {
        // setPreviouslyFetched(true);
      },
      notifyOnNetworkStatusChange: true,
      // skip: true,
      fetchPolicy: "network-only", // Used for first execution
      nextFetchPolicy: "cache-first", // Used for subsequent executions
    });

  const [
    getMultipleNodes,
    { data: multipleNodeData, loading: multipleNodeQueryLoading },
  ] = useGetNodesLazyQuery();
  const sizeDetailSubmit = () => {

    const sizeQuery = new URLSearchParams(searchParams);
    sizeQuery.append("age", sizeDetails.age.toString());
    sizeQuery.append("height", sizeDetails.height);
    sizeQuery.append("weight", sizeDetails.weight.toString());

    router.push(`?${sizeQuery}`);

    const queryNodeValues = {
      product: productName,
      Weight: sizeDetails.weight.toString(),
      Height: sizeDetails.height.toString(),
      Fit: "general",
      Gender: "male",
      Age: sizeDetails?.age.toString(),
    };

    getNodes({
      variables: {
        filters: {
          and: [
            {
              products: { title: { in: [queryNodeValues.product as string] } },
            },
            {
              attribute_values: {
                and: [
                  {
                    attribute: { name: { in: ["Fit"] } },
                  },
                  {
                    valueOne: {
                      in: [
                        FIT_ENUM.COMFORT,
                        FIT_ENUM.GENERAL,
                        FIT_ENUM.SKIN_TIGHT,
                        FIT_ENUM.REGULAR,
                      ],
                    },
                  },
                ],
              },
            },
            {
              attribute_values: {
                and: [
                  {
                    attribute: { name: { in: ["Gender"] } },
                  },
                  { valueOne: { in: [queryNodeValues.Gender] } },
                ],
              },
            },
            {
              attribute_values: {
                and: [
                  {
                    attribute: { name: { in: ["Weight"] } },
                  },
                  { valueOne: { lte: queryNodeValues?.Weight } },
                  { valueTwo: { gte: queryNodeValues?.Weight } },
                ],
              },
            },
            {
              attribute_values: {
                and: [
                  {
                    attribute: { name: { in: ["Height"] } },
                  },
                  { valueOne: { in: [queryNodeValues?.Height] } },
                ],
              },
            },
          ],
        },
      },
    });

    getMultipleNodes({
      variables: {
        filters: {
          and: [
            {
              products: { title: { in: [queryNodeValues.product as string] } },
            },
            {
              attribute_values: {
                and: [
                  {
                    attribute: { name: { in: ["Fit"] } },
                  },
                  { valueOne: { in: [queryNodeValues.Fit] } },
                ],
              },
            },
            {
              attribute_values: {
                and: [
                  {
                    attribute: { name: { in: ["Gender"] } },
                  },
                  { valueOne: { in: [queryNodeValues.Gender] } },
                ],
              },
            },
            {
              attribute_values: {
                and: [
                  {
                    attribute: { name: { in: ["Weight"] } },
                  },
                  { valueOne: { lte: queryNodeValues?.Weight } },
                  { valueTwo: { gte: queryNodeValues?.Weight } },
                ],
              },
            },
            {
              attribute_values: {
                and: [
                  {
                    attribute: { name: { in: ["Height"] } },
                  },
                  { valueOne: { in: queryNodeValues?.Height as any } },
                ],
              },
            },
          ],
        },
      },
    });

    onClose();
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
      <SizeSelector />
      <SizeModal
        heightOptions={heightOptionsValues}
        productId={productId}
        isOpen={isOpen}
        onClose={onClose}
        setSizeDetails={setSizeDetails}
        sizeDetails={sizeDetails}
        sizeDetailSubmit={sizeDetailSubmit}
      />
    </>
  );
}
