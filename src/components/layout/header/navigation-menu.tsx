"use client"

import * as React from "react"
import Link from "next/link"

import {cn} from "@/utils/utils"
import {Icons} from "@/components/customize-ui/Icons"
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
                  <nav.icon className="h-6 w-6"/>
                  {nav.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {index === 0 &&
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Icons.triangle className="h-6 w-6"/>
                          <div className="mb-2 mt-4 text-lg font-medium">
                            usehooks/hotpot
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {t("Find your food")}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    }
                    {
                      nav.items.map(sub_nav => (
                        <ListItem key={sub_nav.code} href={sub_nav.href} title={t(sub_nav.code)}>
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
  React.ComponentPropsWithoutRef<"a">>(({className, title, children, ...props}, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
