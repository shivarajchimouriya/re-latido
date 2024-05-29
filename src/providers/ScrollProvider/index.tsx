"use client";
import { logger } from "@/utils/logger";
import { usePathname } from "next/navigation";
import React, { ChangeEvent, ComponentProps, ReactNode, UIEvent, useEffect } from "react";
import { IoReturnUpForwardOutline } from "react-icons/io5";

interface IProps {
  selectorClassName: string;
  children:ReactNode
}

const ScrollProvider = ({selectorClassName,children}:IProps) => {

const pathName=usePathname() ||"home";
const key=pathName+'_depth'

  useEffect(() => {

      const boxContainer=document.querySelector(`.${selectorClassName}`)  as HTMLElement;
const scrollDepth=sessionStorage.getItem(key) ||0;
logger.log('scroll depth',scrollDepth)
if(scrollDepth){
boxContainer.scrollTop=(Number(scrollDepth))
}




const handleScroll=(e:any)=>{
    if(!e.target) return;
    const scrollPosition=e.target.scrollTop as number;
    sessionStorage.setItem(key,String(scrollPosition))

}
const handlePageReload=()=>{
  sessionStorage.clear()
}
boxContainer?.addEventListener("scroll",handleScroll)

window.addEventListener("beforeunload",  handlePageReload )


return ()=>{
  boxContainer?.removeEventListener("scroll",handleScroll);


}



  }, [selectorClassName,key]);

  return <> {children} </>;
};

export default ScrollProvider;
