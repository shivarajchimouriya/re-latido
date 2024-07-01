import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";
import { AmplifyServer } from "aws-amplify/adapter-core";
import { runWithAmplifyServerContext } from "./utils/serverContext";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

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
}

export const config = {
  matcher: ["/auth/:path*", "/profile", "/orders/:path*", "/digital-invoice/:path*"],
};
