import bcrypt from 'bcryptjs';
import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 8);
  return hashedPassword;
};