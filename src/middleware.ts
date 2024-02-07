import { NextRequest, NextResponse } from "next/server";

export const config = {
  // matcher: ["/((?!_next|api/auth).*)(.+)", "/"],
  matcher: ["/((?!_next|api).*)"],
};

const authPages = ["/login", "/signup", "/"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token");

  if (!authPages.includes(pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (authPages.includes(pathname)) {
    if (token) {
      return NextResponse.redirect(new URL("/onboarding", request.url));
    }
  }
  return NextResponse.next();
}
