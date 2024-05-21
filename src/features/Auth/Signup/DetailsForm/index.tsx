"use client";
import { logger } from "@/utils/logger";
import { signUp } from "aws-amplify/auth";
import {
  Box,
  Button,
  FocusLock,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
  useDisclosure
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { RefObject, useState } from "react";
import { Calendar } from "react-date-range";
import { Controller, Form, FormProvider, useForm, useFormContext } from "react-hook-form";
import { BiCalendar, BiRightArrow } from "react-icons/bi";
import { MdEditNotifications } from "react-icons/md";
import AuthProvider from "@/providers/AuthProvider";
import Autocomplete, { usePlacesWidget ,ReactGoogleAutocompleteInputProps,ReactGoogleAutocompleteProps} from "react-google-autocomplete";
import { env } from "@/config/environment";
import { zodResolver } from "@hookform/resolvers/zod";
import { dateToMonthDayYear } from "@/utils/date";
import { ISignupForm, signupSchema } from "../schema";
import { CgArrowRight } from "react-icons/cg";
import dayjs from "dayjs";
interface IForm {
  full_name: string;
  address: string;
  gender: string;
  date_of_birth: string;
  phone_number: string;
  email: string;
}


interface IProps{
    changeView:(view:number)=>void
}


const DetailsForm = ({changeView}:IProps) => {
  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    register,
    formState: { errors, isSubmitting }
  } = useFormContext<ISignupForm>();
  const [activeGender, setActiveGender] = useState("male");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [view, setView] = useState(1)

  const genders: Array<"male" | "female" | "other"> = [
    "male",
    "female",
    "other"
  ];
  const handleGender = (gender: "male" | "female" | "other") => {
    setActiveGender(gender);
  };

  const handleCalendarChange = (values: Date) => {
    logger.log("values", values);
  };

  const formSubmit = (data:ISignupForm) => {
    logger.log("data",data)
    signUp({
      username: "shivraaz45@gmail.com",
      password: "Axios@123",
      options: {
        userAttributes: {
          name: "shiv"
        }
      }
    });
  };

  const { ref } = usePlacesWidget({
    apiKey: env.GOOGLE_API_KEY,
    onPlaceSelected: (place) =>{
      
      console.log(place)
    }
    // setValue("address",place.formatted_address)}
  });

  return    <VStack w="full" p="1rem">
        <Text fontSize="3rem" fontWeight={"bold"} w="full" py="2rem">
          Signup
        </Text>
        <VStack w="full" gap="3rem" as="form" onSubmit={handleSubmit(formSubmit)}>
          <FormControl w="full">
            <FormLabel htmlFor="name" fontSize="fl" textTransform="uppercase">
              fullname
            </FormLabel>
            <Input variant="underline" id="name" {...register("full_name")} />
           <Text color="error">
              {" "}{errors?.full_name?.message}{" "}
            </Text>

          </FormControl>

          <FormControl w="full" gap="1rem">
            <FormLabel fontSize="fl" htmlFor="name" textTransform="uppercase">
              address
            </FormLabel>
            <Controller
            control={control}
            name='address'
            render={({field:{onChange,value}})=>
            <Autocomplete
            className="google_places_autocomplete"
            
                
        apiKey={env.GOOGLE_API_KEY}
   
        defaultValue={value}
    
        onPlaceSelected={(place)=>{
            console.log("place",place.formatted_address)
        onChange(place.formatted_address)
        }}
        
        />}
            
            />
            <Text color="error">
              {" "}{errors?.address?.message}{" "}
            </Text>
          </FormControl>

          <FormControl w="full">
            <FormLabel fontSize="fl" htmlFor="gender" textTransform="uppercase">
              gender
            </FormLabel>
            <Controller name="gender" control={control} render={({ field: { onChange, value } }) => <HStack mt="1rem" gap="1rem" textTransform="uppercase" fontSize="1.2rem">
                  {genders.map(el => {
                    const isActive = el === value;
                    return <Box key={el} position="relative" p=".5rem" px="2rem" onClick={() => {
                          onChange(el);
                          const values = getValues();
                          logger.log("values", values);
                          handleGender(el);
                        }}>
                        <Text color={isActive ? "white" : ""} transitionDuration=".4s">
                          {el}
                        </Text>
                        <AnimatePresence>
                          {isActive && <Box layoutId="gender" rounded="md" as={motion.div} position="absolute" inset="0" w="full" h="full" bg="black" isolation="isolate" zIndex="-1" />}
                        </AnimatePresence>
                      </Box>;
                  })}
                </HStack>} />
            <Text color="error">
              <Text color="error">
              {" "}{errors?.gender?.message}{" "}
            </Text>
            </Text>
          </FormControl>

          <FormControl w="full">
            <FormLabel htmlFor="name" textTransform="uppercase" fontSize="fl">
              date of birth
            </FormLabel>
            <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} closeOnBlur={false} isLazy>
              <PopoverTrigger>
                <HStack w="full" justify="space-between">
                  <Text fontSize="1.2rem">
                    {" "}{getValues("date_of_birth")}{" "}
                  </Text> <IconButton fontSize="2rem" icon={<BiCalendar />} aria-label="calendar" />
                </HStack>
              </PopoverTrigger>

              <PopoverContent p={5}>
                <Box zIndex={"1000000000"}>
                  <Controller control={control} name="date_of_birth" render={({ field: { onChange } }) => {
                      return <Calendar onChange={val => {
                            const d = dayjs(val).format("MM/DD/YYYY")
                            onChange(d);
                            onClose();
                          }} />;
                    }} />
                </Box>
              </PopoverContent>
            </Popover>
            <Text color="error">
              {" "}{errors?.date_of_birth?.message}{" "}
            </Text>
          </FormControl>

          <FormControl w="full">
            <FormLabel htmlFor="name" fontSize="fl" textTransform="uppercase">
              email
            </FormLabel>
            <Input variant="underline" id="name" {...register("email")} />
            <Text color="error">
              {" "}{errors?.email?.message}{" "}
            </Text>
          </FormControl>

          <FormControl w="full">
            <FormLabel htmlFor="name" fontSize="fl" textTransform="uppercase">
              phone number
            </FormLabel>
            <Input variant="underline" id="name" {...register("phone_number")} />
          
          <Text color="error">
              {" "}{errors?.phone_number?.message}{" "}
            </Text>
          </FormControl>

          <IconButton  
          alignSelf='end'
          onClick={()=>changeView(1)}
          aria-label="next"
          icon={<CgArrowRight/>}
           p="1rem" 
          rounded="full" 
          
          fontWeight="bold" fontSize="1.4rem" bg="black" color="white"/>
        </VStack>
      </VStack>
};

export default DetailsForm;
