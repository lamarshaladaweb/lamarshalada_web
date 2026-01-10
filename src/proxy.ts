import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rutas que JAMÁS deben redirigirse
  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/terminos") ||
    pathname.startsWith("/aviso-legal") ||
    pathname.startsWith("/go") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Todo lo demás
  return NextResponse.redirect(
    new URL(`https://api.lamarshalada.com/go${pathname}`)
  );
}

export const config = {
  matcher: "/:path*",
};