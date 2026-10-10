import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  // Allow authenticated users to access protected routes
  if (session?.user) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to sign in
  const signInUrl = new URL("/signin", request.url);
  signInUrl.searchParams.set("reason", "auth-required");

  // Remember the page the user wanted to visit
  signInUrl.searchParams.set(
    "callbackURL",
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
  );

  return NextResponse.redirect(signInUrl);
}

export const config = {
  matcher: ["/profile/:path*", "/product/:path"],
};
