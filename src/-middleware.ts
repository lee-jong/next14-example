import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // console.log("########", request.cookies.get("bell"));
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/todo",
};
