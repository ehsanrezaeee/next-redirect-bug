import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
    const accToken = request.cookies.get("CTA1")?.value ?? "";

    if (accToken) {
            return NextResponse.next();
    } else {
        if (request.nextUrl.pathname !== "/openroute") {
            return NextResponse.redirect(new URL("/openroute", request.url));
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/((?!api|_next|.*\\..*).*)",
        "/((?!protectedroute|$).*)]",
    ],
};