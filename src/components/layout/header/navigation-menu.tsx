"use client"

import * as React from "react"
import Link from "next/link"
import {cn} from "@/utils/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/ui/navigation-menu"
import {MenuNavs} from "@/components/layout/header/menu";
import {useTranslation} from "@/locales/client";

export function HeaderNavigationMenu() {
  const {t} = useTranslation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {MenuNavs.map((nav, index) => (
          <div key={nav.title}>
            {
              nav.items.length &&
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <nav.icon className="h-6 w-6" />&nbsp;
                  {nav.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.5fr_.5fr]">
                    {
                      nav.items.map(sub_nav => (
                        <ListItem subtab={sub_nav} key={sub_nav.code} href={sub_nav.href} title={t(sub_nav.code)}>
                          {t(`${sub_nav.code}.info`)}
                        </ListItem>
                      ))
                    }
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            }
            {nav.items.length === 0 &&
              <NavigationMenuItem>
                <Link href={nav.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t(nav.title)}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            }
          </div>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">>(({subtab, className, title, children, ...props}, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="grid grid-cols-2 gap-2">
            <subtab.icon className="h-6 w-6"/>
            <div className="text-sm font-medium">{subtab.code}</div>
          </div>
          {/*<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>*/}
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
