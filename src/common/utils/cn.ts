import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names into a single string, efficiently merging Tailwind CSS
 * classes using twMerge. It accepts multiple class values and uses clsx to handle
 * conditional class names, ensuring that the final output is a well-formed string
 * suitable for use in class attributes.
 *
 * @param inputs - A list of class values that can be strings, arrays, or objects.
 * @returns A single string with merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
