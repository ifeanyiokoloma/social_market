import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const brandName = "Perfect Market"

export const authorUrl = "ifeanyiokoloma.netlify.app";

export const appWebsite = "yumarket.netlify.app";

export const siteName = "Perfect Market Site";

export const siteUserName = "Perfect_market_site";
