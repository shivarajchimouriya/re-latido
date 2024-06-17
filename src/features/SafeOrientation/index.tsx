"use client";
import React from "react";
import useOrientation from "@/hooks/client/useOrientation";
import { Container } from "@chakra-ui/react";
import NotAllowedToView from "../NotAllowedToView";
import useDeviceDetection from "@/hooks/client/useDeviceDetection";

export default function SafeOrientation({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLandscape = useOrientation();
  const device = useDeviceDetection();
  if (device === "desktop") {
    return <NotAllowedToView />;
  }
  if (isLandscape) {
    return <NotAllowedToView landscape={isLandscape} />;
  }
  return <Container>{children}</Container>;
}
