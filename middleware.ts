import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./lib/get-user";

async function middleware(request: NextRequest) {
  const authRoutes = ["/sign-in", "/sign-up"];
  const getAuthState = await getUser();

  if (!authRoutes.includes(request.nextUrl.pathname) && getAuthState === null) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (authRoutes.includes(request.nextUrl.pathname) && getAuthState !== null) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/sign-in",
    "/sign-up",
    "/dashboard",
    "/dashboard/:path",
    "/dashboard/:path/:path2",
  ],
};

export default middleware;
