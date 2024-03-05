import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import { Style } from "@/components/theme/styles"
import { Theme } from "@/components/theme/themes"
import {TLanguage} from "@/locales";
import {i18n} from "@/locales/client";
import {ThemeOptions} from "@mui/material/styles";

type Config = {
  style: Style["name"]
  theme: Theme["name"]
  radius: number
  lang: TLanguage
  direction: "ltr" | "rtl"
  mode: "light" | "dark" | "system"
  threshold: number
  mergeTheme: ThemeOptions
}

const configAtom = atomWithStorage<Config>("config", {
  style: "new-york",
  theme: "slate",
  mode: "system",
  radius: 0.5,
  lang: i18n.language || 'zh',
  direction: 'ltr',
  threshold: 20,
  mergeTheme: {}
})

export function useConfig() {
  return useAtom(configAtom)
}
