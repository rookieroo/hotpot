import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import {create} from "zustand";
import {persist} from "zustand/middleware";

type MenuTabs = {
  update_flag: string
  menu_tabs: object[]
  tabList: object
  menu: object
  tab: object
  sub_tab: object
}

const initMenuTabs: MenuTabs = {
  update_flag: "",
  menu_tabs: [],
  tabList: null,
  menu: null,
  tab: null,
  sub_tab: null,
}

export const useMenu = create(
  persist(
    (set, get) => ({
      menu_tabs: initMenuTabs,
      setMenuTabs: (mt: MenuTabs) => set({
        menu_tabs: mt
      }),
    }),
    {
      name: 'menu_tabs', // name of the item in the storage (must be unique)
    },
  ),
)

const menuTabsAtom = atomWithStorage<MenuTabs>("tabs", {
  update_flag: "",
  menu_tabs: [],
  tabList: null,
  menu: null,
  tab: null,
  sub_tab: null,
})

export function useMenuTabsWithStorage() {
  return useAtom(menuTabsAtom)
}
