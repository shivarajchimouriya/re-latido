import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

interface Inputs {
  age: string;
  height1: number;
  height2: number;
  weight: number;
}
interface IProps {
  handleClose: () => void
}
export default function SizeFrom({handleClose}: IProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Container className="fitting-card-container" mx={"2rem"}>
      <Flex gap={"0.8rem"} mb={"2rem"} fontSize={"1.8rem"}  textTransform="uppercase">
        <Text variant={"h1"} >
          Fitting
        </Text>
        <Text
          variant={"h1"}
          fontWeight="bold"
        >
          Room
        </Text>
      </Flex>
      <form className="fitting_room_form" onSubmit={handleSubmit(onSubmit)}>
        <Flex placeItems={"center"}>
          <Box>
            <FormControl width={"fit-content"} my={"1rem"}>
              <FormLabel className="fitting-card-label" htmlFor="age">
                Age
              </FormLabel>

              <InputGroup className="fitting-card-input-group">
                <Input
                  className="fitting-card-input"
                  min={0}
                  max={120}
                  id="age"
                  {...register("age", { required: true })}
                  type="number"
                />
                <span className=" fitting-card-postfix">yrs</span>
                {errors.age && (
                  <FormErrorMessage>This field is required</FormErrorMessage>
                )}
              </InputGroup>
            </FormControl>
            <FormControl my={"1rem"}>
              <FormLabel className="fitting-card-label" htmlFor="height">
                Height
                          </FormLabel>
                          <Flex gap={"1rem"}>
                              
              <InputGroup className="fitting-card-input-group" id="height">
                <Input
                  id="height1"
                  className="fitting-card-input"
                  min={0}
                  max={12}
                  {...register("height1", { required: true })}
                  type="number"
                />
                <span className=" fitting-card-postfix">ft</span>
                {/* <InputRightElement children="ft" /> */}
                {errors.height1 && (
                  <FormErrorMessage>This field is required</FormErrorMessage>
                )}
              </InputGroup>
              <InputGroup className="fitting-card-input-group" id="height2">
                <Input
                  id="height2"
                  className="fitting-card-input"
                  min={0}
                  max={12}
                  {...register("height2", { required: true })}
                  type="number"
                  />
                <span className=" fitting-card-postfix">in</span>
                {errors.height2 && (
                    <FormErrorMessage>This field is required</FormErrorMessage>
                )}
              </InputGroup>
                </Flex>
            </FormControl>
            <FormControl width="fit-content" my={"1rem"}>
              <FormLabel className="fitting-card-label" htmlFor="weight">
                Weight
              </FormLabel>
              <InputGroup className="fitting-card-input-group">
                <Input
                  id="weight"
                  className="fitting-card-input"
                  {...register("weight", { required: true })}
                  type="number"
                />
                <span className=" fitting-card-postfix">kg</span>

                {errors.weight && (
                  <FormErrorMessage>This field is required</FormErrorMessage>
                )}
              </InputGroup>
            </FormControl>
          </Box>
        </Flex>
            <ButtonGroup my={"2rem"} orientation="vertical" gap={"1rem"} width={"100%"}>
              <Button px={"4rem"} fontSize={"1.4rem"} className="primary-button" type="submit">Submit</Button>
              <Button px={"4rem"} fontSize={"1.4rem"} className="secondary-button" onClick={handleClose} type="reset">Cancel</Button>
            </ButtonGroup>
      </form>
    </Container>
  );
}
