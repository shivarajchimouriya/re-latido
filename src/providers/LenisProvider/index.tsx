"use client";
import React, { ReactNode, useEffect } from "react";
import Lenis from '@studio-freight/lenis'
interface IProps {
  children: ReactNode;
}
const LenisProvider = ({ children }: IProps) => {

useEffect(()=>{



const lenis = new Lenis({smoothWheel:true,wheelMultiplier:1.5,});



function raf(time:number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
},[])

  return (
    <>
      {children}
    </>
  );
};

export default LenisProvider;
