import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";
import { AmplifyServer } from "aws-amplify/adapter-core";
import { runWithAmplifyServerContext } from "./utils/serverContext";
import { cookies, headers } from "next/headers";
import { logger } from "./utils/logger";
import { apiURLs } from "./constants/apiUrls";
import { env } from "./config/environment";

interface ApiResponse {
  ip: string;
  country_code: string;
  country_name: string;
  region_name: string;
  city_name: string;
  latitude: number;
  longitude: number;
  zip_code: string;
  time_zone: string;
  asn: string;
  as: string;
  is_proxy: boolean;
}

async function fetchIpLocation(ip_address: string) {
  const apiUrl = `https://api.ip2location.io/?key=${env.IP2LOCATION_KEY}&ip=`;

    console.log('ip from api : ', ip_address);

    if (!ip_address) {
        return NextResponse.json({ message: "Ip not provided" }, { status: 400 });
    }

    try {
        const response = await fetch(`${apiUrl}${ip_address}`);

        console.log('response form api: ', response);

        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        const data: ApiResponse = await response.json();

        return data

    } catch (error) {
      throw new Error("Something went wrong!");
      
    }
}

export async function middleware(request: NextRequest) {


  try {
    const response = NextResponse.next();
    const tempIp = headers()?.get("x-forwarded-for")?.split(",")[0];
    const countryDataCookie = request.cookies.get("country-data");

    let refetchCountryData = false;

    if (countryDataCookie) {
      const parsedData = JSON.parse(countryDataCookie.value);
      if (parsedData.ip !== tempIp) {
        refetchCountryData = true;
      }
    } else {
      refetchCountryData = true;
    }

    console.log('ip from middleware: ', tempIp);
    if (refetchCountryData && tempIp) {
      console.log("IP changed or no cookie, fetching new location for IP: ", tempIp);
      const data = await fetchIpLocation(tempIp);
      console.log("data from middleware: ", data);
      if (data) {
        response.cookies.set("country-data", JSON.stringify({ ...data, ip: tempIp }));
        console.log("cookie set: ", JSON.stringify({ ...data, ip: tempIp }));
      }
    }
    const url = new URL(request.url);

    const authenticated = await runWithAmplifyServerContext({
      nextServerContext: { request, response },
      operation: async (contextSpec: AmplifyServer.ContextSpec) => {
        try {
          const session = await fetchAuthSession(contextSpec);
          console.log("run");
          return (
            session.tokens?.accessToken !== undefined &&
            session.tokens?.idToken !== undefined
          );
        } catch (error) {
          console.log(error);
          return false;
        }
      },
    });

    console.log('authenticated: ', authenticated);

    if (authenticated) {
      if (url.pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/profile", request.url));
      }
      return response;
    }
    if (!authenticated) {
      if (
        url.pathname.startsWith("/profile") ||
        url.pathname.startsWith("/orders") ||
        url.pathname.startsWith("/digital-invoice") ||
        url.pathname.startsWith("/checkout")
      ) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
      }
    }

    return response;
  } catch (error) {
    console.error("ERROR: ", error)
  }
}

export const config = {
  matcher: [
    "/auth/:path*",
    "/profile",
    "/orders/:path*",
    "/digital-invoice/:path*",
    "/test/cancel",
    "/"
  ],
};
