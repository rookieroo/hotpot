import {useQuery} from '@tanstack/react-query'
import {ls} from "@/utils/storage";

const fetchMenuTabs = async () => {
  const tabs = await ls.asyncGet('menu_tabs')
  const append = tabs && tabs.state.menu_tabs.update_flag || ''
  console.log('append', append)
  const url = `https://api.rebang.today/v1/menu_tabs?update_flag=${append}`
  const res: string = await (
    await fetch(url)
  ).json()
  return res
}

const useMenuTabs = (wait = 100) => {
  return useQuery({
    queryKey: ['menu_tabs', wait],
    queryFn: () => fetchMenuTabs(),
  })
}

const fetchTabList = async (append) => {
  const url = `https://api.rebang.today/v1/items?${append}`
  const res: string = await (
    await fetch(url)
  ).json()
  return res
}

const useTabList = (append, wait = 100) => {
  return useQuery({
    queryKey: ['tab_list', wait],
    queryFn: () => fetchTabList(append),
  })
}

export {useMenuTabs, fetchMenuTabs, useTabList, fetchTabList}
