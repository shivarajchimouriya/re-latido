"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface ILeatherContext {
  activeLeather: string;
  lid: string;
  psid: string;
  setPsid: (psid: string) => void;
  setLid: (lid: string) => void;
  changeLeather: (leatherId: string) => void;
}

const LeatherContext = createContext<ILeatherContext | null>(null);
interface IProps {
  children: ReactNode;
}

const LeatherProvider = ({ children }: IProps) => {
  const [activeLeather, setActiveLeather] = useState("");
  const [lid, setLid] = useState("");
  const [psid, setPsid] = useState("");
  const changeActiveLeather = (leatherId: string) => {
    setActiveLeather(leatherId);
  };

  return (
    <LeatherContext.Provider
      value={{
        activeLeather,
        changeLeather: changeActiveLeather,
        lid,
        psid,
        setLid,
        setPsid
      }}
    >
      {children}
    </LeatherContext.Provider>
  );
};

export default LeatherProvider;

export const useActiveLeather = () => {
  return useContext(LeatherContext);
};
