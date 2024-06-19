"use client";
import React, { useEffect, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";

const useProfile = () => {
  const [res, setRes] = useState<any>();
  const getUserProfile = async () => {
    const response = await getCurrentUser();
    setRes(response);
  };

  useEffect(() => {
    getUserProfile();
  },[])

  return res;
};

export default useProfile;
