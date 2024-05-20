"use client";
import { logger } from "@/utils/logger";
import React from "react";

interface IProps {
  data: any;
}

const ProfileClient = ({ data }: IProps) => {
  logger.log("data", data);
  return <div>ProfileClient</div>;
};

export default ProfileClient;
