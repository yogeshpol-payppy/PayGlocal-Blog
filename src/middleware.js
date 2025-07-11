import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;
  if (
    ["/amazon", "/freelancer", "/mca", "/blog/stripe-alternative-india-options"].includes(
      pathname
    )
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // Filter out static assets
  const isAsset = pathname.startsWith("/_next") || pathname.includes(".");

  if (host.startsWith("freelancer.") && !isAsset) {
    const url = new URL('/freelancer', request.url)
    // if (pathname.startsWith("/inf/")) {
    //   let newUrl = new URL("/freelancer", request.url); // Serve root content
    //   // Rewrite to serve the root content but retain the original path in the browser
    //   return NextResponse.rewrite(newUrl);
    // }
    return NextResponse.rewrite(url);
  }
  if (host.startsWith("mca.") && !isAsset) {
    const url = new URL('/mca', request.url)
    return NextResponse.rewrite(url);
  }

  if (host.startsWith("marketplace.") && !isAsset) {
    const allowedPaths = [
      "/marketplace",
      "/blog/stripe-alternative-india-options",
      "/compliance",
      "/merchant-terms",
      "/privacy-policy",
      "/cookie-policy",
      "/grievance-redressal",
      "/terms-and-conditions",
      "/zero-tolerance-compliance-centre",
      "/refund-policy",
      "/merchant-onboarding-policy"
    ];

    if (allowedPaths?.includes(pathname)) {
        return NextResponse.next();
    }
    // Create the new URL based on the desired path (preserve base)
    let newUrl = new URL("/amazon", request.url);
    // Copy over the search parameters from the original URL to the new URL
    newUrl.search = request.nextUrl.search;
    // Return the rewritten response with the updated URL
    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}
