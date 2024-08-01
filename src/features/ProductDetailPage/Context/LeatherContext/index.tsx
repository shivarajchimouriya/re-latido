"use client";
import { useSearchParams } from "next/navigation";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ILeatherContext {
  activeLeather: string;
  lid: string;
  psid: string;
  setPsid: (psid: string) => void;
  setLid: (lid: string) => void;
  changeLeather: (leatherId: string) => void;
  leatherMode: appModeType;
  toggleLeatherMode: () => void;
  intersection: any;
  setIntersection: (el: any) => void;
}
export type appModeType = "dark" | "light";

export const LeatherContext = createContext<ILeatherContext | null>(null);
interface IProps {
  children: ReactNode;
}

const LeatherProvider = ({ children }: IProps) => {
  const searchParams = useSearchParams();

  const [activeLeather, setActiveLeather] = useState("");
  const [lid, setLid] = useState(searchParams.get("lid") || "");
  const [psid, setPsid] = useState(searchParams.get("psid") || "");
  const [leatherMode, setLeatherMode] = useState<appModeType>("light");
  const [intersection, setIntersection] = useState<any>([]);

  useEffect(() => {
    const mode =
      (localStorage.getItem("leatherMode") as appModeType | null) ?? "light";
    setLeatherMode(mode);
  }, []);

  const changeActiveLeather = (leatherId: string) => {
    setActiveLeather(leatherId);
  };

  const toggleLeatherMode = () => {
    if (leatherMode === "dark") {
      setLeatherMode("light");

      localStorage.setItem("leatherMode", "light");
    } else {
      setLeatherMode("dark");
      localStorage.setItem("leatherMode", "dark");
    }
  };

  return (
    <LeatherContext.Provider
      value={{
        activeLeather,
        changeLeather: changeActiveLeather,
        lid,
        psid,
        setLid,
        setPsid,
        leatherMode,
        toggleLeatherMode,
        intersection,
        setIntersection,
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
