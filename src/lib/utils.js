import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const handleCampaignRedirect = (campaignDetails, influencerId) => {
  const href = window.location.href;
  let redirectUrl;
  let cookieDomain;

  // console.log({ href, campaignDetails }); // Debugging log

  if (href.includes(".com")) {
    redirectUrl = "https://signup.payglocal.com/gl-gcc/self-onboarding/login";
    cookieDomain = ".payglocal.com";
  } else if (href.includes(".in") && !window?.location?.pathname?.includes("/inf/")) {
    redirectUrl = href.includes("dev.")
      ? "https://gcc.uat.internal.payglocal.in/gl-gcc/self-onboarding/login"
      : "https://signup.payglocal.in/gl-gcc/self-onboarding/login";
    cookieDomain = ".payglocal.in";
  } else if (window?.location?.pathname.includes("/inf/")){
    redirectUrl = href.includes("localhost")
    ? `https://gcc.dev.payglocal.in/inf/${influencerId}`
    : (href.includes("dev.") 
    ? `https://gcc.uat.payglocal.in/inf/${influencerId}`
    : `https://signup.payglocal.in/inf/${influencerId}`);
  }
  else {
    redirectUrl = "https://signup.payglocal.com/gl-gcc/self-onboarding/login";
  }

  // console.log("Redirect URL:", redirectUrl); // Debugging log
  // console.log("Cookie Domain:", cookieDomain); // Debugging log

  if (redirectUrl) {
    // Set the cookie for 30 minutes
    const cookieExpiration = new Date();
    cookieExpiration.setTime(cookieExpiration.getTime() + 30 * 60 * 1000); // 30 minutes

    document.cookie = `campaignDetails=${campaignDetails}; expires=${cookieExpiration.toUTCString()}; path=/; domain=${cookieDomain};`;

    // Redirect to the appropriate URL
    window.location.href = redirectUrl;
  }
};

export const getBase64EncodedCampaignDetails = () => {
  const urlParams = new URLSearchParams(window?.location?.search);
  return btoa(urlParams.toString());
};

export const extractUtmParams = (queryString) => {
  const params = new URLSearchParams(queryString);

  return {
    utm_campaign: params?.get("utm_campaign"),
    utm_source: params?.get("utm_source"),
    utm_medium: params?.get("utm_medium"),
    utm_id: params?.get("utm_id"),
  };
};
