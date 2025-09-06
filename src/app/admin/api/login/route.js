import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { username, password } = await req.json();

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET,
      { expiresIn: parseInt(process.env.JWT_EXPIRES_IN) }
    );

    const res = NextResponse.json({ success: true });
    res.cookies.set({
      name: "adminSession",
      value: token,
      httpOnly: true,
      maxAge: parseInt(process.env.JWT_EXPIRES_IN),
      path: "/",
    });

    return res;
  }

  return NextResponse.json({ success: false, error: "Invalid credentials" });
}
