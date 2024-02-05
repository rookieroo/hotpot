"use client"

import * as React from "react"
import {LaptopIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {useTranslation} from "@/locales/client";
import {useConfig} from "@/store/useConfig";

export function ModeToggle() {
  const { setTheme } = useTheme()
  const [config, setConfig] = useConfig()
  const {t} = useTranslation("settings");

  const handleChangeMode = (mode) => {
    setTheme(mode)
    setConfig({
      ...config,
      mode: mode
    })
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-9 px-0">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t("Toggle theme")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChangeMode("light")}>
          <SunIcon className="mr-1 -translate-x-1" />
          {t("Light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeMode("dark")}>
          <MoonIcon className="mr-1 -translate-x-1" />
          {t("Dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeMode("system")}>
          <LaptopIcon className="mr-1 -translate-x-1" />
          {t("System")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
