import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.json({ message: 'Logged out' });
  res.cookies.set({
    name: 'adminSession',
    value: '',
    httpOnly: true,
    path: '/',
    maxAge: 0, // expires immediately
  });
  return res;
}
