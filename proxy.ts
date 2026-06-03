import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth-server";

export async function proxy(request: NextRequest) {
	// Convex + Better Auth uses a JWT cookie (convex_jwt), not the default
	// better-auth session_token that getSessionCookie checks by default.
	if (!(await isAuthenticated())) {
		const loginUrl = new URL("/auth/login", request.url);
		loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
		return NextResponse.redirect(loginUrl);
	}

	return NextResponse.next();
}

export const config = {
	// Only protect routes that require authentication. /blog is public.
	matcher: ["/create"],
};