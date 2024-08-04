import { logger } from "@/utils/logger";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try{
  const data = (await req.formData()).get("xmlmsg");

  return NextResponse.json(
    {
      data: data,
    },
    { status: 200 }
    );
  }
  catch (err) {
    logger.log("Error",err)
  }
}
