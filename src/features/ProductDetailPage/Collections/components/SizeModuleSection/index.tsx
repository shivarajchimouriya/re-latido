"use client";
import { logger } from "@/utils/logger";
import { useCallback, useEffect, useMemo, useState } from "react";
import FitSelection from "../FitSelection";
import ButtonComponent from "../Button";
import SizeModal from "../SizeModal";
import { Button, useDisclosure, useToast } from "@chakra-ui/react";
import { FIT_ENUM } from "../SizeModal/FitEnums";
import { useGetNodesLazyQuery } from "@/GraphQl/Generated/graphql";
import SizeSelector from "../SizeSelector";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useBuy } from "./data/useBuy";
import { useGetTokens } from "@/hooks/client/useGetToken";
import SizeRecommendationLoader from "../SizeRecommendationLoader";
import SizeRecommendationNotFound from "../SizeRecommendationNotFound";
import Toast from "@/components/Toast";
import useHandleErrorToast from "@/hooks/client/useAppToast";

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
  const handleErrorToast = useHandleErrorToast();
  const toast = useToast();
  const PWA = "pwa";
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlAge = searchParams.get("age");
  const urlHeight = searchParams.get("height");
  const urlWeight = searchParams.get("weight");

  const psid = searchParams.get("psid");
  const lid = searchParams.get("lid");
  const s = searchParams.get("s");
  const urlFit = searchParams.get("fit");

  const findLeatherIndex = productDetail.product_specification.findIndex(
    (val: any) => val?._id === psid
  );

  const leatherDetails =
    productDetail?.product_specification?.[findLeatherIndex];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [heightOptionsValues, setHeightOptionsValues] = useState<string[]>([]);
  const [selectedFit, setSelectedFit] = useState(urlFit || "Regular Fit");
  const [selectedSpecs, setSelectedSpecs] = useState<any>();

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
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "network-only",
      nextFetchPolicy: "cache-first",
    });

  const [
    getMultipleNodes,
    { data: multipleNodeData, loading: multipleNodeQueryLoading },
  ] = useGetNodesLazyQuery();

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

  const queryNodeValues = {
    product: productName,
    Weight: urlWeight?.toString(),
    Height: urlHeight?.toString(),
    Fit: selectedFit || "General",
    Gender: "male",
    Age: urlAge?.toString(),
  };

  const sizeDetailSubmit = (height: string, weight: string, age: string) => {
    const sizeQuery = new URLSearchParams(searchParams.toString());

    if (!urlAge || !urlHeight || !urlWeight) {
      sizeQuery.append("height", height);
      sizeQuery.append("weight", weight);
      sizeQuery.append("age", age);
    } else {
      sizeQuery.set("height", height);
      sizeQuery.set("weight", weight);
      sizeQuery.set("age", age);
    }
    router.replace(`?${sizeQuery.toString()}`, { scroll: false });
    getNodesCall(queryNodeValues);
    getMultipleNodesCall(queryNodeValues);
    onClose();
  };

  const handleFitChange = (e: string) => {
    if (!urlHeight || !urlWeight) {
      onOpen();
    }
    setSelectedFit(e);
  };

  const fitData = multipleNodeData?.nodes?.data?.map((item: any) => {
    return {
      name: item?.attributes.products[0].title,
      size: item?.attributes.output,
      nodeID: item?.id,
      fitType: item?.attributes.attribute_values?.data[0]?.attributes?.valueOne,
    };
  });

  const indexWithComfort =
    nodeData?.nodes?.data.findIndex((el) =>
      el.attributes?.attribute_values?.data.find(
        (item) => item.attributes?.valueOne === selectedFit
      )
    ) || 0;

  useEffect(() => {
    const exactSelectedSpecs = productDetail?.product_specification?.find(
      (ps: any) => ps?._id === psid
    );
    if (exactSelectedSpecs) {
      setSelectedSpecs(exactSelectedSpecs);
    }
  }, [psid, selectedFit, sizeDetailSubmit]);

  useEffect(() => {
    getNodesCall(queryNodeValues);
    getMultipleNodesCall(queryNodeValues);
  }, [urlAge, urlHeight, urlWeight, selectedFit]);

  const range = new Map(
    selectedSpecs?.size_range.map((el: any) => {
      return [el.size, el];
    })
  );
  const { token } = useGetTokens();
  const { mutateAsync, isPending } = useBuy();
  const handleBuyClick = async (price: number, srid: string) => {
    if (!token) {
      sessionStorage.setItem("productUrl", window?.location?.href);
      router.push("/auth/login");
      return;
    }

    const payload = {
      product_specification: {
        price: {
          currency: "Nrs",
          value: price,
        },
        product_specification_id: psid as string,
        size_range_id: srid,
        leather_id: leatherDetails?.leather_id._id as string,
        size: Number(s) as number,
        pattern_package: nodeData?.nodes?.data[indexWithComfort]?.attributes
          ?.outputLevel as string,
      },
      sizing: {
        height: Number(urlHeight),
        weight: Number(urlWeight),
      },
      product: productId,
      lining: leatherDetails?.default_lining as string,
      hardware: leatherDetails?.default_hardware as string,
      total_amount: price,
      origin: PWA,
    };

    let hasURLPropError = false;

    const validateUrlProps = () => {
      const incoming = [psid, lid, urlAge, urlFit, urlHeight, urlWeight];
      incoming.forEach((el) => {
        if (el === "undefined" || !el) {
          hasURLPropError = true;
          return;
        }
      });
    };
    validateUrlProps();

    if (hasURLPropError) {
      toast({
        position: "top",
        duration: 3000,
        render: ({ onClose }) => {
          return (
            <Toast
              status="error"
              onClose={onClose}
              message="Enter size details and select size to buy product."
            />
          );
        },
      });
      return;
    } else {
      localStorage.setItem("selected", JSON.stringify(payload));
      try {
        const res = await mutateAsync({ data: payload, token });
        localStorage.setItem("checkout", JSON.stringify(res?.data));
        router.push("/checkout");
      } catch (error) {
        handleErrorToast(error)
        logger.error(error);
      }
    }
  };

  const handleSizeCardClick = (val: number) => {
    nodeData?.nodes?.data.forEach((fit: any) => {
      if (fit?.attributes?.output === val) {
        const dataToSearch = fit?.attributes?.attribute_values?.data;
        if (dataToSearch) {
          // find the index with the fitting
          const index = dataToSearch?.findIndex((item: any) => {
            const valueOne = item?.attributes?.valueOne;
            return typeof valueOne === "string" && valueOne.match(/^[^\d.]+$/);
          });
          const valueFromData = dataToSearch?.[index]?.attributes?.valueOne;
          if (valueFromData) {
            setSelectedFit(valueFromData);
          }
        }
      }
    });
  };

  return (
    <>
      <FitSelection
        selectedFit={selectedFit}
        onChange={handleFitChange}
        productId={productId}
      />

      {nodeData?.nodes?.data?.length || 0 > 0 ? (
        <>
          <SizeSelector
            sizeRange={range}
            onOpen={onOpen}
            activeFit={selectedFit}
            fitData={fitData ? fitData : null}
            recommendation={nodeData?.nodes?.data}
            handleBuyClick={handleBuyClick}
            handleSizeCardClick={handleSizeCardClick}
            isPending={isPending}
          />
        </>
      ) : nodeQueryLoading ? (
        <SizeRecommendationLoader />
      ) : nodeData?.nodes?.data?.length || 0 <= 0 ? (
        <>
          {!urlAge || !urlHeight || !urlWeight || nodeQueryLoading ? null : (
            <SizeRecommendationNotFound />
          )}
          <ButtonComponent onOpen={onOpen} />
        </>
      ) : (
        <ButtonComponent onOpen={onOpen} />
      )}
      <SizeModal
        heightOptions={heightOptionsValues}
        isOpen={isOpen}
        onClose={onClose}
        // setSizeDetails={setSizeDetails}
        // sizeDetails={sizeDetails}
        sizeDetailSubmit={sizeDetailSubmit}
      />
    </>
  );
}
