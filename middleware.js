import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const tokenCookie = req.cookies.get("adminSession");
  const token = tokenCookie?.value;

  // Allow login page without JWT
  if (req.nextUrl.pathname === "/admin/login") return NextResponse.next();

  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.next();
  } catch {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/admin", "/admin/:path*"], // protect /admin and all subpaths
};
