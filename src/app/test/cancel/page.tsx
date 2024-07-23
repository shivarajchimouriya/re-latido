import React, { useEffect } from "react";
import { logger } from "@/utils/logger";
import { cookies, headers } from "next/headers";

interface IProps {
  params: string;
}

export default async function Page() {


  const headersList =  headers()
  logger.log('headers',headersList)

  // useEffect(() => {
  //   console.log("window: ", window.location.href);
  //   console.log("window path: ", window.location.pathname);
  // }, []);

  return (
    <div
      style={{
        fontSize: "2rem",
      }}
    >
      cancel page
    </div>
  );
}
