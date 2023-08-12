import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default async function cn(...inputs:ClassValue[]) {
    return twMerge(clsx(inputs));
}