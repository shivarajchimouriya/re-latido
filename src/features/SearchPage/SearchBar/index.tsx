"use client";
import { logger } from "@/utils/logger";
import { debounce, throttle } from "@/utils/misc";
import { Box, Flex, FormControl, Input } from "@chakra-ui/react";
import { useDebounce } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
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

  const handleSubmit = (form: FormData) => {
    const keyword = form.get("keyword");
    router.push(`/search?keyword=${keyword}`);
  };

  return (
    <Flex w="100%" justify="space-between" p="1.2rem" align="center">
      <Box fontSize="2rem">
        <BiSearch />
      </Box>
      <form action={handleSubmit}>
        <FormControl w="100%" px="1.5rem">
          <Input
            ref={ref}
            name="keyword"
            type="search"
            fontSize="2rem"
            w="100%"
            onChange={handleChange}
            _focusWithin={{ outline: "none" }}
            borderBottom="1.2px solid black"
          />
        </FormControl>
      </form>

      <Box fontSize="2rem" onClick={onCancel}>
        <CgClose />
      </Box>
    </Flex>
  );
};

export default SearchBar;
