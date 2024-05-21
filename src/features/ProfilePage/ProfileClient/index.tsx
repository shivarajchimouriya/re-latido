"use client";
import { logger } from "@/utils/logger";
import React from "react";
import { getCurrentUser, fetchAuthSession } from "aws-amplify/auth";
interface IProps {
  data: any;
}

const ProfileClient = () => {
  fetchAuthSession().then(val => {
    logger.log("val", val);
  });

  return <div>ProfileClient</div>;
};

export default ProfileClient;
