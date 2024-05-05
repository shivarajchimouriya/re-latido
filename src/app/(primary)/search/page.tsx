import SearchContainer from "@/features/SearchPage/SearchContainer";
import React from "react";

interface IProps {
  searchParams: {
    keyword: string;
    gender: string;
  };
}

const Page = ({ searchParams }: IProps) => {
  const { gender, keyword } = searchParams;

  return <SearchContainer gender={gender} keyword={keyword} />;
};

export default Page;
