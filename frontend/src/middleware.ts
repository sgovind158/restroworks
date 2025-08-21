import { NextResponse } from "next/server";

// Supported locales
const locales = ["en", "hi"];

// Get the preferred locale from headers or fallback to 'en'
function getLocale(request: Request) {
  const acceptLang = request.headers.get("accept-language");
  if (acceptLang) {
    const preferred = acceptLang.split(",")[0].split("-")[0];
    if (locales.includes(preferred)) return preferred;
  }
  return "en"; // default locale
}

/**
 * Middleware function to handle locale-based routing.
 *
 * Checks if the request pathname already contains a locale prefix.
 * If not, it determines the appropriate locale using `getLocale` and redirects
 * the request to the same path prefixed with the detected locale.
 *
 * @param request - The incoming request object, expected to have a `nextUrl` property.
 * @returns A redirect response if the pathname does not contain a locale; otherwise, nothing.
 */
export function middleware(request: any) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale in the path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
  ],
};
