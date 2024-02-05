import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {ThemeOptions, themePropDefs} from "@radix-ui/themes";

export const InitTheme: ThemeOptions = {
  appearance: themePropDefs.appearance.default,
  accentColor: themePropDefs.accentColor.default,
  grayColor: themePropDefs.grayColor.default,
  panelBackground: themePropDefs.panelBackground.default,
  radius: themePropDefs.radius.default,
  scaling: themePropDefs.scaling.default,
}
const CardColor = ""

export const useTheme = create(
  persist(
    (set, get) => ({
      color: CardColor,
      theme: InitTheme,
      setThemeColor: (color: string) => set({ color: color }),
      setTheme: (theme: ThemeOptions) => set({ theme: theme }),
    }),
    {
      name: 'custom-theme', // name of the item in the storage (must be unique)
    },
  ),
)
