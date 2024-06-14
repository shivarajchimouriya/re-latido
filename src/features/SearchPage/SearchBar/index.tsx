"use client";
import { logger } from "@/utils/logger";
import { debounce, throttle } from "@/utils/misc";
import { Box, Flex, FormControl, Input } from "@chakra-ui/react";
import { useDebounce } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState
} from "react";
import { BiSearch } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [term, setTerm] = useState("");
  const terms = useDebounce(term, 1000);
  const router = useRouter();
  logger.log("terms", terms);

  function onCancel() {
    if (ref.current) ref.current.value = "";
  }

  useEffect(() => {}, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
  };
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  const handleSubmit = (form: FormData) => {
    const keyword = form.get("keyword");
    router.push(`/search?keyword=${keyword}`);
  };
  return (
    <Flex w='full' justify='center' mt='2rem' position="fixed" zIndex="10" mt="0" bg="base" py="2rem" pt="4rem">
    <Flex w="95%" rounded='full' justify="space-between"p='1rem' align="center"
     border='1px solid'
     borderColor='gray.400' 
     as={motion.div}
     layoutId='search_bar'
    >
      <Box fontSize="1rem" p='.5rem'  ml='.5rem' mr='.5rem'  rounded='full'>
        <BiSearch />
      </Box>
      <form action={handleSubmit}  style={{width:"100%"}}>
        <FormControl w="100%" px=".5rem" rounded='full'   >
          <Input
          autoFocus
            ref={ref}
            name="keyword"
            border='none'
            type="search"
            defaultValue={keyword ?? ""}
            fontSize="1.5rem"
            py="0"
            w="100%"
            onChange={handleChange}
            _focusWithin={{ outline: "none" }}
            
          />
        </FormControl>
      </form>

      <Box fontSize="1rem" onClick={onCancel} bg='gray.200'p='.5rem'  mr='1rem' rounded='full'  >
        <CgClose />
      </Box>
    </Flex>
    </Flex>
  );
};

export default SearchBar;
