'use client'
import {CommandMenu} from "@/components/layout/header/command-menu"
import {MainNav} from "@/components/layout/header/main-nav"
import {MobileNav} from "@/components/layout/header/mobile-nav"
import {ModeToggle} from "@/components/layout/header/mode-toggle"
import {Button} from "@/components/ui/button"
import {Drawer, DrawerContent, DrawerTrigger} from "@/ui/drawer";
import {Paintbrush} from "lucide-react";
import {Customizer, getThemeCode} from "@/components/theme/ThemeCustomizer";
import {SettingToggle} from "@/components/layout/header/setting-toggle";
import {HideOnScroll} from "@/components/customize-ui/HideOnScroll";
import {useConfig} from "@/store/useConfig";
import {useEffect} from "react";
import {themes} from "@/components/theme/themes";
import {usePathname} from "next/navigation";
import {useTheme} from "next-themes";
import {mergeThemes} from "@/components/theme/trending-mui-theme";

export function SiteHeader() {
  const [config, setConfig] = useConfig()
  const pathname = usePathname()
  const {resolvedTheme} = useTheme()

  useEffect(() => {
    if (!config) {
      return
    }
    const activeTheme = themes.find((theme) => theme.name === config.theme)
    const css = getThemeCode(activeTheme, config.radius)
    const style = document.createElement('style');
    style.textContent = css
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [config])

  useEffect(() => {
    const shadcnTheme = themes.find(t => t.name === config.theme)
    if (!shadcnTheme) return
    setConfig(
      {
        ...config,
        mergeTheme: mergeThemes(resolvedTheme, config.theme)
      }
    );
  }, [resolvedTheme, config?.theme]);

  return (
    <HideOnScroll threshold={config.threshold}>
      <header
        style={{position: config.threshold === 666 ? 'static' : 'sticky'}}
        className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container border-b border-border/40 flex h-14 max-w-screen-2xl items-center">
          <MainNav/>
          <MobileNav/>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu/>
            </div>
            <nav className="flex items-center">
              <ModeToggle/>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-9 px-0 lg:hidden"
                  >
                    <Paintbrush className="h-4 w-4"/>
                    <span className="sr-only">Customize</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="p-6 pt-0">
                  <Customizer/>
                </DrawerContent>
              </Drawer>
              <SettingToggle/>
            </nav>
          </div>
        </div>
      </header>
    </HideOnScroll>
  )
}
