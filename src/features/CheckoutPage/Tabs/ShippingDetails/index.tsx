"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { IForm, formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { env } from "@/config/environment";
import { logger } from "@/utils/logger";
import { PhoneNumberUtil } from "google-libphonenumber";
import { useFetchShippingDetails } from "../../data/useFetchShippingDetails";
import { useRouter } from "next/navigation";
import { IOrderData } from "@/resources/Order/interface";
import { useUpdateShippingDetails } from "../../data/useUpdateShippingDetails";
import { useGetTokens } from "@/hooks/client/useGetToken";
import useLocalStorage from "@/hooks/client/useLocalStorage";
import useHandleErrorToast from "@/hooks/client/useAppToast";

const ShippingDetails = () => {
  const handleErrorToast = useHandleErrorToast();
  const { mutateAsync, isPending } = useUpdateShippingDetails();
  const { value, setValue } = useLocalStorage("shippingDetails");

  const {
    handleSubmit,
    control,
    getValues,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: value?.address,
      city: value?.city,
      country: value?.country,
      fullName: value?.full_name,
      landmark: value?.landmark,
      phone: value?.phone_number,
    },
  });
  const router = useRouter();

  const { token } = useGetTokens();
  const validatePhone = (phone: string) => {
    try {
      const phoneUtil = PhoneNumberUtil.getInstance();
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (err) {
      setError("phone", { message: "phone number is invalid" });
    }
  };
  const onSubmit = async (data: IForm) => {
    const phone = data.phone;
    const validPhone = validatePhone(phone);
    if (!validPhone) {
      setError("phone", { message: "phone number is invalid" });
      return;
    }
    const checkoutData = localStorage.getItem("checkout");
    if (!checkoutData || !token) {
      return;
    }

    const productDetail = JSON.parse(checkoutData) as IOrderData;
    const checkoutId = productDetail.checkout_id;
    const formReqdata = {
      checkout_id: checkoutId,
      shipping_details: {
        address: data.address,
        city: data.city,
        country: data.country,
        full_name: data.fullName,
        landmark: data.landmark,
        phone_number: data.phone,
      },
      _id: productDetail._id,
    };

    try {
      const res = await mutateAsync({ data: formReqdata, token });
      setValue(formReqdata?.shipping_details);

      localStorage.setItem("checkout",JSON.stringify(res.data))
      router.push("/checkout?tab=payment");
    } catch (error) {
      handleErrorToast(error)
      logger.log("error", error);
    }
  };

  logger.log(errors);

  return (
    <VStack w="full" align="start">
      <Box textTransform="uppercase" fontSize="3xl" p="1rem" w="full">
        <Text> shipping </Text>
        <Text fontWeight="bold"> DEtails </Text>
      </Box>

      <VStack
        spacing="2rem"
        w="full"
        p="1rem"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl w="full">
          <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
            full name *
          </FormLabel>
          <Input variant="underline" id="name" {...register("fullName")} />
          <Text color="error">{errors.fullName?.message} </Text>
        </FormControl>

        <FormControl w="full">
          <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
            phone *
          </FormLabel>
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => {
              return (
                <PhoneInput
                  style={{ width: "100%", borderRadius: "0" }}
                  inputStyle={{
                    width: "100%",
                    border: "none",
                    borderBottom: "1px solid black",
                    borderRadius: "0",
                  }}
                  defaultCountry="np"
                  value={value}
                  countrySelectorStyleProps={{
                    buttonStyle: {
                      border: "none",
                      borderBottom: "1px solid black",
                      borderRadius: "0",
                    },
                  }}
                  onChange={(phone) => {
                    onChange(phone);
                  }}
                />
              );
            }}
          />
          <Text color="error">{errors.phone?.message} </Text>
        </FormControl>

        <FormControl w="full">
          <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
            country *
          </FormLabel>
          <Input variant="underline" id="name" {...register("country")} />
          <Text color="error">{errors.country?.message} </Text>
        </FormControl>

        <FormControl w="full">
          <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
            city *
          </FormLabel>
          <Input
            variant="underline"
            required
            id="name"
            {...register("city", { required: "city is required" })}
          />
          <Text color="error">{errors.city?.message} </Text>
        </FormControl>

        <FormControl w="full">
          <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
            address *
          </FormLabel>
          <Controller
            name="address"
            control={control}
            render={({ field: { onChange } }) => {
              return (
                <ReactGoogleAutocomplete
                  defaultValue={getValues("address")}
                  apiKey={env.GOOGLE_API_KEY}
                  className="google_autocomplete"
                  style={{
                    padding: "1rem 0",
                  }}
                  onChange={onChange}
                  onPlaceSelected={(place) => {
                    const formattedPlace = place?.formatted_address;
                    if (formattedPlace) onChange(formattedPlace || "");
                  }}
                />
              );
            }}
          />

          <Text color="error"> {errors.address?.message} </Text>
        </FormControl>

        <FormControl w="full">
          <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
            landmark *
          </FormLabel>
          <Input
            required
            variant="underline"
            id="name"
            {...register("landmark", {
              required: { message: "landmark is requuired", value: true },
            })}
          />
          <Text color="error">{errors.landmark?.message} </Text>
        </FormControl>

        <Button
          disabled={isPending ? true : false}
          opacity={isPending ? "0.6" : "1"}
          mt="3rem"
          p="1rem"
          w="100%"
          border="1px solid black"
          rounded="md"
          fontWeight="bold"
          fontSize="1.4rem"
          bg="black"
          color="white"
          type="submit"
          isLoading={isSubmitting}
        >
          next
        </Button>
      </VStack>
    </VStack>
  );
};

export default ShippingDetails;
