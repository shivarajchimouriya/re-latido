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
  try {
    const apiUrl = apiURLs.getLocationByIp.locationIp;
    const res = await fetch(`${env.SITE_URL}${apiUrl}`, {
      method: "POST",
      body: JSON.stringify({ ip_address: ip_address }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    logger.log("FetchIp Location", res)
    if (res.ok) {
      const data: ApiResponse = await res.json();
      return data;
    }
    else {
      throw new Error(JSON.stringify(res))
    }
  } catch (error) {
    console.error("Error: ", error)
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
