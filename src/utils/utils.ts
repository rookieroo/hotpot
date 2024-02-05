import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ResolvablePromise } from "@excalidraw/excalidraw/types/utils";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const computeColor = (color: string) => {
  if (color.length !== 6) {
    color = `${color}${color}`
  }
  // rgb values
  const r = parseInt(color.substr(0, 2), 16)
  const g = parseInt(color.substr(2, 2), 16)
  const b = parseInt(color.substr(4, 2), 16)

  return {r, g, b}
}

// Determine the accessible color of text
export function getAccessibleColor (hex: string) {
  let color = hex.replace(/#/g, "")
  const {r, g, b} = computeColor(color)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? "#000000" : "#FFFFFF"
}

// Change hex color into RGB
export const getRGBColor = (hex: string, type: string) => {
  let color = hex.replace(/#/g, "")
  const {r, g, b} = computeColor(color)
  return `--color-${type}: ${r}, ${g}, ${b};`
}

export const resolvablePromise = () => {
  let resolve!: any;
  let reject!: any;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  (promise as any).resolve = resolve;
  (promise as any).reject = reject;
  return promise as ResolvablePromise<any>;
};
