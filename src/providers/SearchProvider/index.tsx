"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface ISeachContext {
  keyword: string;
  setKeyword: (value: string) => void;
}
const searchContext = createContext<ISeachContext | null>(null);

interface IProps {
  children: ReactNode;
}

const SearchProvider = ({ children }: IProps) => {
  const [keyword, setKeyword] = useState("");

  const contextValue: ISeachContext = {
    keyword,
    setKeyword
  };
  return (
    <searchContext.Provider value={contextValue}>
      {children}
    </searchContext.Provider>
  );
};

export default SearchProvider;

export const useSearchContext = () => useContext(searchContext);
