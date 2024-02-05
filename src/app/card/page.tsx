'use client'

import ColorPicker from "@/components/card-theme/colorPicker"
import IconFacebook from "@/components/card-theme/IconFacebook"
import IconGitHub from "@/components/card-theme/IconGitHub"
import IconInstagram from "@/components/card-theme/IconInstagram"
import IconLinkedIn from "@/components/card-theme/IconLinkedIn"
import IconTwitter from "@/components/card-theme/IconTwitter"
import useStore from "@/store/useStore";
import {useTheme} from "@/store/useTheme";


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
      <div
        className="min-h-screen grid content-center place-content-center bg-skin-primary bg-opacity-10 bg-edit-dots p-5">
        <div className="bg-white w-full sm:w-[500px] text-center rounded-2xl px-5 pb-5 shadow-xl">
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
                  className="h-10 w-10 sm:h-12 sm:w-12 grid place-content-center rounded-lg border border-opacity-40 focus:ring-2 focus:ring-offset-2  bg-skin-primary bg-opacity-30 text-skin-primary hover:bg-opacity-100 hover:text-skin-a11y border-skin-primary focus:ring-skin-primary"
                  rel="noreferrer"
                >
                  <link.icon className="h-5 w-5"/>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="absolute left-[calc(50vw-100px)] w-[200px] bottom-5 sm:bottom-14 rounded-xl bg-white p-3 text-center flex items-center space-x-4 shadow-xl">
          <ColorPicker
            color={color}
            onChange={setThemeColor}
            presetColors={presetColors}
          />
          <p className="text-sm font-medium text-gray-500">Custom Color</p>
        </div>
      </div>
    </>
  )
}

const links = [
  {
    icon: IconTwitter,
    href: "https://twitter.com/fbrill",
  },
  {
    icon: IconGitHub,
    href: "https://github.com/fbrill",
  },
  {
    icon: IconInstagram,
    href: "https://instagram.com/fbrill",
  },
  {
    icon: IconFacebook,
    href: "https://facebook.com/fbrill",
  },
  {
    icon: IconLinkedIn,
    href: "https://linkedin.com/in/fbrill",
  },
]

export default NodCard;
