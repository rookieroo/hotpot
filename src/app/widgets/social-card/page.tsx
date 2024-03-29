'use client'

import { useTheme } from "@/store/useTheme";
import useStore from "@/store/useStore";
import Icons from "@/components/customize-ui/Icons";
import {WidgetsCustomizer} from "@/components/widgets-diy/WidgetsCustomizer";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/ui/card";


function NodCard() {
  const color = useStore(useTheme, (state) => state.color)
  const { setThemeColor } = useTheme()

  const presetColors = [
    "#6231af",
    "#db2777",
    "#f59e0b",
    "#2dd4bf",
    "#06b6d4",
    "#10b981",
  ]

  return (
    <>
      <div className="m-[1.5rem] h-[calc(100vh-5rem)]] grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 flex justify-center">
            <div className="bg-muted sm:w-[500px] text-center rounded-2xl px-5 pb-5 shadow-xl">
              <div className="w-28 h-28 bg-skin-primary rounded-full mx-auto -mt-14"/>
              <div className="m-5">
                <p className="m-2 font-extrabold text-3xl tracking-tight text-skin-primary">
                  Jane Cooper
                </p>
                <p className="m-2 font-medium text-xl text-gray-500">
                  Person Title
                </p>
                <p className="m-2 font-light text-gray-400">
                  An optional overview about this person as a quick bio.
                </p>
              </div>
              <ul className="flex mt-5 sm:my-5 justify-center space-x-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target="_blank"
                      className="h-10 w-10 sm:h-12 sm:w-12 grid place-content-center rounded-lg border border-opacity-40 focus:ring-2 focus:ring-offset-2  bg-muted bg-opacity-30 text-primary hover:bg-opacity-100 hover:text-skin-a11y border-skin-primary focus:text-primary"
                      rel="noreferrer"
                    >
                      <link.icon className="h-5 w-5"/>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3 hidden md:block">
          {/*<CardHeader>
            <CardTitle>DIY</CardTitle>
            <CardDescription>
              此配置优先级高于全局配置
            </CardDescription>
          </CardHeader>*/}
          <CardContent>
            <WidgetsCustomizer />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

const links = [
  {
    icon: Icons.X,
    href: "https://twitter.com/rookieroo",
  },
  {
    icon: Icons.twitter,
    href: "https://twitter.com/rookieroo",
  },
  {
    icon: Icons.github,
    href: "https://github.com/rookieroo",
  },
  {
    icon: Icons.instagram,
    href: "https://instagram.com/rookieroo",
  },
  {
    icon: Icons.facebook,
    href: "https://facebook.com/rookieroo",
  },
  {
    icon: Icons.linkedin,
    href: "https://linkedin.com/in/rookieroo",
  },
  {
    icon: Icons.xiaohongshu,
    href: "https://linkedin.com/in/rookieroo",
  },
]

export default NodCard;
