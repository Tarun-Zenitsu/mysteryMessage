import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
export { default } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  if (token) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: ["/signin", "/signup", "/", "/dashboard/:path*", "/verify/:path*"],
};
