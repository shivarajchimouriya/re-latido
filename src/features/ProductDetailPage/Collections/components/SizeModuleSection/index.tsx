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
  productDetail,
}: {
  productId: string;
  productName: string;
  productDetail: any;
}) {
  logger.log("product detail: ", productDetail);
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlAge = searchParams.get("age");
  const urlHeight = searchParams.get("height");
  const urlWeight = searchParams.get("weight");

  const psid = searchParams.get("psid");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [heightOptionsValues, setHeightOptionsValues] = useState<string[]>([]);
  const [recommendedSize, setRecommendedSize] = useState<any>();
  const [selectedFit, setSelectedFit] = useState("General");
  const [showSizeSelector, setShowSizeSelector] = useState(false);
  const [selectedSpecs, setSelectedSpecs] = useState<any>();

  useEffect(() => {
    console.log("selected fit: ", selectedFit);
  }, [selectedFit]);

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
  ] = useGetNodesLazyQuery({
    onCompleted() {
      setShowSizeSelector(true);
    },
  });

  const getNodesCall = (queryNodeValues: any) => {
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
  };

  const getMultipleNodesCall = (queryNodeValues: any) => {
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
  };

  const variables = [
    { key: "age", value: sizeDetails.age.toString() },
    { key: "height", value: sizeDetails.height },
    { key: "weight", value: sizeDetails.weight.toString() },
  ];

  const queryNodeValues = {
    product: productName,
    Weight: sizeDetails.weight.toString(),
    Height: sizeDetails.height.toString(),
    Fit: selectedFit || "General",
    Gender: "male",
    Age: sizeDetails?.age.toString(),
  };

  const sizeDetailSubmit = () => {
    const sizeQuery = new URLSearchParams(searchParams);
    variables.forEach((el) => {
      if (sizeQuery.has(el.key)) {
        sizeQuery.set(el.key, el.value);
      } else {
        sizeQuery.append(el.key, el.value);
      }
    });
    router.push(`?${sizeQuery}`);
    getNodesCall(queryNodeValues);
    getMultipleNodesCall(queryNodeValues);
    onClose();
  };

  const handleFitChange = (e: string) => {
    setSelectedFit(e);
    getMultipleNodesCall({ ...queryNodeValues, Fit: e });
  };

  const fitData = multipleNodeData?.nodes?.data?.map((item: any) => {
    return {
      name: item?.attributes.products[0].title,
      size: item?.attributes.output,
      nodeID: item?.id,
      fitType: item?.attributes.attribute_values?.data[0]?.attributes?.valueOne,
    };
  });

  // const indexWithComfort =
  //   nodeData?.nodes?.data.findIndex((el) =>
  //     el.attributes?.attribute_values?.data.find(
  //       (item) => item.attributes?.valueOne === selectedFit
  //     )
  //   ) || 0;

  useEffect(() => {
    const exactSelectedSpecs = productDetail?.product_specification?.find(
      (ps: any) => ps?._id === psid
    );
    if (exactSelectedSpecs) {
      setSelectedSpecs(exactSelectedSpecs)
    }
  }, [psid, selectedFit, sizeDetailSubmit]);



  const filteredSizeRange = productDetail?.product_specification?.filter((el:any) => {
  return el?._id===psid
})
const range=new Set(filteredSizeRange?.[0]?.size_range.map((el:any)=>el.size))
logger.log("range",range)
  return (
    <>
      <FitSelection
        selectedFit={selectedFit}
        onChange={handleFitChange}
        productId={productId}
        />
      {nodeData?.nodes?.data ? (
        <SizeSelector
        sizeRange={range}
          fitData={fitData}
          recommendation={nodeData?.nodes?.data}
        />
      ) : (
        <ButtonComponent
          productId={productId}
          heightOptionsValues={heightOptionsValues}
          setSizeDetails={setSizeDetails}
          sizeDetailSubmit={sizeDetailSubmit}
          onOpen={onOpen}
        />
      )}
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
