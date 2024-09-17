import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const brandName = "Perfekt Mart"

export const authorUrl = "ifeanyiokoloma.com.ng";

export const appWebsite = "perfektmart.com.ng";

export const siteName = "Perfekt Mart";

export const siteUserName = "perfektmart";

export const phone = "+2349014967299";

export const email = "ifeanyiokoloma@gmail.com";
