"use client"

import { cn } from "@/utils/utils"
import { useConfig } from "@/lib/../../store/useConfig"

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const [config] = useConfig()

  return (
    <div
      className={cn(
        `theme-${config.theme || defaultTheme}`,
        "w-full",
        className
      )}
      style={
        {
          "--radius": `${config.radius ? config.radius : 0.5}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
