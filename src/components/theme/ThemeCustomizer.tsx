"use client"

import * as React from "react"
import {
  CheckIcon,
  CopyIcon,
  MoonIcon,
  ResetIcon,
  SunIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  LaptopIcon
} from "@radix-ui/react-icons"
import template from "lodash.template"
import {Paintbrush} from "lucide-react"
import {useTheme} from "next-themes"
import {cn} from "@/utils/utils"
import {useConfig} from "@/store/useConfig"
import {copyToClipboardWithMeta} from "@/components/theme/copyButton"
import {Button} from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {Label} from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {Skeleton} from "@/components/ui/skeleton"
import {Theme, themes} from "@/components/theme/themes"
import "@/styles/mdx.css"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {useTranslation, i18n} from "@/locales/client";
import {TbLetterE, TbLetterZ, TbArrowDown, TbArrowDownBar, TbArrowDownCircle} from "react-icons/tb";

export function ThemeCustomizer() {
  const [config, setConfig] = useConfig()
  const {resolvedTheme: mode} = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex items-center space-x-2">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="md:hidden">
            <Paintbrush className="mr-2 h-4 w-4"/>
            Customize
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-6 pt-0">
          <Customizer/>
        </DrawerContent>
      </Drawer>
      <div className="hidden md:flex">
        <div className="mr-2 hidden items-center space-x-0.5 lg:flex">
          {mounted ? (
            <>
              {["zinc", "rose", "blue", "green", "orange"].map((color) => {
                const theme = themes.find((theme) => theme.name === color)
                const isActive = config.theme === color

                if (!theme) {
                  return null
                }

                return (
                  <Tooltip key={theme.name}>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() =>
                          setConfig({
                            ...config,
                            theme: theme.name,
                          })
                        }
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs",
                          isActive
                            ? "border-[--theme-primary]"
                            : "border-transparent"
                        )}
                        style={
                          {
                            "--theme-primary": `hsl(${
                              theme?.activeColor[
                                mode === "dark" ? "dark" : "light"
                                ]
                            })`,
                          } as React.CSSProperties
                        }
                      >
                        <span
                          className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-full bg-[--theme-primary]"
                          )}
                        >
                          {isActive && (
                            <CheckIcon className="h-4 w-4 text-white"/>
                          )}
                        </span>
                        <span className="sr-only">{theme.label}</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      align="center"
                      className="rounded-[0.5rem] bg-zinc-900 text-zinc-50"
                    >
                      {theme.label}
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </>
          ) : (
            <div className="mr-1 flex items-center gap-4">
              <Skeleton className="h-6 w-6 rounded-full"/>
              <Skeleton className="h-6 w-6 rounded-full"/>
              <Skeleton className="h-6 w-6 rounded-full"/>
              <Skeleton className="h-6 w-6 rounded-full"/>
              <Skeleton className="h-6 w-6 rounded-full"/>
            </div>
          )}
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Paintbrush className="mr-2 h-4 w-4"/>
              Customize
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="center"
            className="z-40 w-[340px] rounded-[0.5rem] bg-white p-6 dark:bg-zinc-950"
          >
            <Customizer/>
          </PopoverContent>
        </Popover>
      </div>
      <CopyCodeButton/>
    </div>
  )
}

export function Customizer() {
  const [mounted, setMounted] = React.useState(false)
  const {setTheme: setMode, resolvedTheme: mode} = useTheme()
  const [config, setConfig] = useConfig()
  const {t} = useTranslation("settings");
  const {t: c} = useTranslation("settings", { keyPrefix: 'colors' });

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
    setConfig({
      ...config,
      lang: lang
    })
  };

  const handleChangeMode = (mode) => {
    setMode(mode)
    setConfig({
      ...config,
      mode: mode
    })
  };

  const handleChangeDirection = (direction) => {
    document.body.dir = direction;
    setConfig({
      ...config,
      direction: direction
    })
  };

 const handleHeaderAlignChange = (style) => {
   let threshold = 0
   if (style === "fixed") {
     threshold = 9999
   } else if (style === "hideOnScroll") {
     threshold = 50
   } else if (style === "static") {
     threshold = 666
   }
    setConfig({
      ...config,
      threshold: threshold
    })
  };

  return (
    <>
      <div className="flex items-start pt-4 md:pt-0">
        <div className="space-y-1 pr-2">
          <div className="font-semibold leading-none tracking-tight">
            {t("Pick a style and color for your components.")}
          </div>
          {/*<div className="text-xs text-muted-foreground">
            {t("Customize")}
          </div>*/}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto rounded-[0.5rem]"
          onClick={() => {
            setConfig({
              ...config,
              theme: "zinc",
              radius: 0.5,
            })
          }}
        >
          <ResetIcon/>
          <span className="sr-only">{t('Reset')}</span>
        </Button>
      </div>
      <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
        <div className="space-y-1.5">
          <Label className="text-xs">{t("Color")}</Label>
          <div className="grid grid-cols-3 gap-2">
            {themes.map((theme) => {
              const isActive = config.theme === theme.name

              return mounted ? (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={theme.name}
                  onClick={() => {
                    setConfig({
                      ...config,
                      theme: theme.name,
                    })
                  }}
                  className={cn(
                    "justify-start",
                    isActive && "border-2 border-primary"
                  )}
                  style={
                    {
                      "--theme-primary": `hsl(${
                        theme?.activeColor[mode === "dark" ? "dark" : "light"]
                      })`,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className={cn(
                      "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
                    )}
                  >
                    {isActive && <CheckIcon className="h-4 w-4 text-white"/>}
                  </span>
                  {c(theme.label)}
                </Button>
              ) : (
                <Skeleton className="h-8 w-full" key={theme.name}/>
              )
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">{t('Radius')}</Label>
          <div className="grid grid-cols-5 gap-2">
            {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
              return (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={value}
                  onClick={() => {
                    setConfig({
                      ...config,
                      radius: parseFloat(value),
                    })
                  }}
                  className={cn(
                    config.radius === parseFloat(value) &&
                    "border-2 border-primary"
                  )}
                >
                  {value}
                </Button>
              )
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">{t('Mode')}</Label>
          <div className="grid grid-cols-3 gap-2">
            {mounted ? (
              <>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => handleChangeMode("light")}
                  className={cn(config.mode === "light" && "border-2 border-primary")}
                >
                  <SunIcon className="mr-1 -translate-x-1"/>
                  {t("Light")}
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => handleChangeMode("dark")}
                  className={cn(config.mode === "dark" && "border-2 border-primary")}
                >
                  <MoonIcon className="mr-1 -translate-x-1"/>
                  {t("Dark")}
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => handleChangeMode("system")}
                  className={cn(config.mode === "system" && "border-2 border-primary")}
                >
                  <LaptopIcon className="mr-1 -translate-x-1"/>
                  {t("System")}
                </Button>
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-full"/>
                <Skeleton className="h-8 w-full"/>
              </>
            )}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">{t('Lang')}</Label>
          <div className="grid grid-cols-2 gap-2">
            {mounted ? (
              <>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => handleChangeLang("zh")}
                  className={cn(config.lang === "zh" && "border-2 border-primary")}
                >
                  <TbLetterZ className="mr-1 -translate-x-1"/>
                  中文
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => handleChangeLang("en")}
                  className={cn(config.lang === "en" && "border-2 border-primary")}
                >
                  <TbLetterE className="mr-1 -translate-x-1"/>
                  EN
                </Button>
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-full"/>
                <Skeleton className="h-8 w-full"/>
              </>
            )}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">{t('Header Align Style')}</Label>
          <div className="grid grid-cols-3 gap-2">
            {mounted ? (
              <>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => handleHeaderAlignChange("fixed")}
                  className={cn(config.threshold === 9999 && "border-2 border-primary")}
                >
                  <TbArrowDownBar className="mr-1 -translate-x-1"/>
                  {t("Fixed")}
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => handleHeaderAlignChange("static")}
                  className={cn(config.threshold === 666 && "border-2 border-primary")}
                >
                  <TbArrowDown className="mr-1 -translate-x-1"/>
                  {t("Static")}
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => handleHeaderAlignChange("hideOnScroll")}
                  className={cn(config.threshold === 50 && "border-2 border-primary")}
                >
                  <TbArrowDownCircle className="mr-1 -translate-x-1"/>
                  {t("Hide")}
                </Button>
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-full"/>
                <Skeleton className="h-8 w-full"/>
              </>
            )}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">{t('Direction')}</Label>
          <div className="grid grid-cols-2 gap-2">
            {mounted ? (
              <>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => handleChangeDirection("ltr")}
                  className={cn(config.direction === "ltr" && "border-2 border-primary")}
                >
                  <ArrowRightIcon className="mr-1 -translate-x-1"/>
                  {t('ltr')}
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => handleChangeDirection("rtl")}
                  className={cn(config.direction === "rtl" && "border-2 border-primary")}
                >
                  <ArrowLeftIcon className="mr-1 -translate-x-1"/>
                  {t('rtl')}
                </Button>
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-full"/>
                <Skeleton className="h-8 w-full"/>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

function CopyCodeButton() {
  const [config] = useConfig()
  const activeTheme = themes.find((theme) => theme.name === config.theme)
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <>
      {activeTheme && (
        <Button
          onClick={() => {
            copyToClipboardWithMeta(getThemeCode(activeTheme, config.radius), {
              name: "copy_theme_code",
              properties: {
                theme: activeTheme.name,
                radius: config.radius,
              },
            })
            setHasCopied(true)
          }}
          className="md:hidden"
        >
          {hasCopied ? (
            <CheckIcon className="mr-2 h-4 w-4"/>
          ) : (
            <CopyIcon className="mr-2 h-4 w-4"/>
          )}
          Copy
        </Button>
      )}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="hidden md:flex">Copy code</Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl outline-none">
          <DialogHeader>
            <DialogTitle>Theme</DialogTitle>
            <DialogDescription>
              Copy and paste the following code into your CSS file.
            </DialogDescription>
          </DialogHeader>
          <>
            <CustomizerCode/>
            {activeTheme && (
              <Button
                size="sm"
                onClick={() => {
                  copyToClipboardWithMeta(
                    getThemeCode(activeTheme, config.radius),
                    {
                      name: "copy_theme_code",
                      properties: {
                        theme: activeTheme.name,
                        radius: config.radius,
                      },
                    }
                  )
                  setHasCopied(true)
                }}
                className="absolute right-4 top-4 bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground"
              >
                {hasCopied ? (
                  <CheckIcon className="mr-2 h-4 w-4"/>
                ) : (
                  <CopyIcon className="mr-2 h-4 w-4"/>
                )}
                Copy
              </Button>
            )}
          </>
        </DialogContent>
      </Dialog>
    </>
  )
}

function CustomizerCode() {
  const [config] = useConfig()
  const activeTheme = themes.find((theme) => theme.name === config.theme)

  return (
    <div data-rehype-pretty-code-fragment="">
        <pre className="max-h-[450px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            <span className="line text-white">@layer base &#123;</span>
            <span className="line text-white">&nbsp;&nbsp;:root &#123;</span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--background:{" "}
              {activeTheme?.cssVars.light["background"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--foreground:{" "}
              {activeTheme?.cssVars.light["foreground"]};
            </span>
            {[
              "card",
              "popover",
              "primary",
              "secondary",
              "muted",
              "accent",
              "destructive",
            ].map((prefix) => (
              <>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                  {
                    activeTheme?.cssVars.light[
                      prefix as keyof typeof activeTheme.cssVars.light
                      ]
                  }
                  ;
                </span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                  {
                    activeTheme?.cssVars.light[
                      `${prefix}-foreground` as keyof typeof activeTheme.cssVars.light
                      ]
                  }
                  ;
                </span>
              </>
            ))}
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--border:{" "}
              {activeTheme?.cssVars.light["border"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--input:{" "}
              {activeTheme?.cssVars.light["input"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--ring:{" "}
              {activeTheme?.cssVars.light["ring"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--radius: {config.radius}rem;
            </span>
            <span className="line text-white">&nbsp;&nbsp;&#125;</span>
            <span className="line text-white">&nbsp;</span>
            <span className="line text-white">&nbsp;&nbsp;.dark &#123;</span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--background:{" "}
              {activeTheme?.cssVars.dark["background"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--foreground:{" "}
              {activeTheme?.cssVars.dark["foreground"]};
            </span>
            {[
              "card",
              "popover",
              "primary",
              "secondary",
              "muted",
              "accent",
              "destructive",
            ].map((prefix) => (
              <>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                  {
                    activeTheme?.cssVars.dark[
                      prefix as keyof typeof activeTheme.cssVars.dark
                      ]
                  }
                  ;
                </span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                  {
                    activeTheme?.cssVars.dark[
                      `${prefix}-foreground` as keyof typeof activeTheme.cssVars.dark
                      ]
                  }
                  ;
                </span>
              </>
            ))}
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--border:{" "}
              {activeTheme?.cssVars.dark["border"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--input:{" "}
              {activeTheme?.cssVars.dark["input"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--ring:{" "}
              {activeTheme?.cssVars.dark["ring"]};
            </span>
            <span className="line text-white">&nbsp;&nbsp;&#125;</span>
            <span className="line text-white">&#125;</span>
          </code>
        </pre>
    </div>
  )
}

export function getThemeCode(theme, radius: number) {
  if (!theme) {
    return ""
  }

  return template(BASE_STYLES_WITH_VARIABLES)({
    colors: theme.cssVars,
    radius,
  })
}

const BASE_STYLES_WITH_VARIABLES = `
  :root {
    --background: <%- colors.light["background"] %>;
    --foreground: <%- colors.light["foreground"] %>;
    --card: <%- colors.light["card"] %>;
    --card-foreground: <%- colors.light["card-foreground"] %>;
    --popover: <%- colors.light["popover"] %>;
    --popover-foreground: <%- colors.light["popover-foreground"] %>;
    --primary: <%- colors.light["primary"] %>;
    --primary-foreground: <%- colors.light["primary-foreground"] %>;
    --secondary: <%- colors.light["secondary"] %>;
    --secondary-foreground: <%- colors.light["secondary-foreground"] %>;
    --muted: <%- colors.light["muted"] %>;
    --muted-foreground: <%- colors.light["muted-foreground"] %>;
    --accent: <%- colors.light["accent"] %>;
    --accent-foreground: <%- colors.light["accent-foreground"] %>;
    --destructive: <%- colors.light["destructive"] %>;
    --destructive-foreground: <%- colors.light["destructive-foreground"] %>;
    --border: <%- colors.light["border"] %>;
    --input: <%- colors.light["input"] %>;
    --ring: <%- colors.light["ring"] %>;
    --radius: <%- radius %>rem;
  }

  .dark {
    --background: <%- colors.dark["background"] %>;
    --foreground: <%- colors.dark["foreground"] %>;
    --card: <%- colors.dark["card"] %>;
    --card-foreground: <%- colors.dark["card-foreground"] %>;
    --popover: <%- colors.dark["popover"] %>;
    --popover-foreground: <%- colors.dark["popover-foreground"] %>;
    --primary: <%- colors.dark["primary"] %>;
    --primary-foreground: <%- colors.dark["primary-foreground"] %>;
    --secondary: <%- colors.dark["secondary"] %>;
    --secondary-foreground: <%- colors.dark["secondary-foreground"] %>;
    --muted: <%- colors.dark["muted"] %>;
    --muted-foreground: <%- colors.dark["muted-foreground"] %>;
    --accent: <%- colors.dark["accent"] %>;
    --accent-foreground: <%- colors.dark["accent-foreground"] %>;
    --destructive: <%- colors.dark["destructive"] %>;
    --destructive-foreground: <%- colors.dark["destructive-foreground"] %>;
    --border: <%- colors.dark["border"] %>;
    --input: <%- colors.dark["input"] %>;
    --ring: <%- colors.dark["ring"] %>;
  }
`