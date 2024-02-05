'use client'

import React, {useEffect} from 'react'
import { Icons } from '@/components/customize-ui/Icons'
import { Button } from '@/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu'
import { useTheme as useRadixTheme } from "@/store/useTheme";
import {getAccessibleColor, getRGBColor} from "@/utils/utils";
import useStore from "@/store/useStore";

export function ThemeToggle() {
  const { theme, setTheme } = useRadixTheme()
  const color = useStore(useRadixTheme, (state) => state.color)

  useEffect(() => {
    if (!color) {
      return
    }
    const primaryColor = getRGBColor(color, "primary")
    const a11yColor = getRGBColor(getAccessibleColor(color), "a11y")
    let css = `:root {${primaryColor} ${a11yColor}}`;
    const style = document.createElement('style');
    style.textContent = css
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [color])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm'>
          <Icons.Sun className='rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100' />
          <Icons.Moon className='absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem onClick={() => setTheme({...theme, appearance: 'light'})}>
          <Icons.Sun className='mr-2 h-4 w-4' />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme({...theme, appearance: 'dark'})}>
          <Icons.Moon className='mr-2 h-4 w-4' />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme({...theme, appearance: 'inherit'})}>
          <Icons.Laptop className='mr-2 h-4 w-4' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
