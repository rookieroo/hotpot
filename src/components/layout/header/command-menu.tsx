"use client"

import * as React from "react"
import { DialogProps } from "@radix-ui/react-alert-dialog"
import { cn } from "@/utils/utils"
import { Button } from "@/components/ui/button"
import {ShadcnCMDK} from "@/components/cmdk/shadcn";
import {useTranslation} from "@/locales/client";

export function CommandMenu({ ...props }: DialogProps) {
  const [open, setOpen] = React.useState(false)
  const [macOS, setIsMac] = React.useState(false)
  const {t: s} = useTranslation("settings", { keyPrefix: 'search' });

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    setIsMac(navigator && navigator.platform.toUpperCase().indexOf('MAC') >= 0)
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">{s("Search Tabs & Actions...")}</span>
        <span className="inline-flex lg:hidden">{s("Search...")}</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">{macOS ? '⌘' : 'Ctrl+'}</span>K
        </kbd>
      </Button>
      <ShadcnCMDK open={open} setOpen={setOpen} />
    </>
  )
}
