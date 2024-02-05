import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@/ui/command";
import {docsConfig} from "@/config/docs";
import {CircleIcon, FileIcon, LaptopIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons";
import * as React from "react";
import {useRouter} from "next/navigation";
import {useTheme} from "next-themes";


export function ShadcnCMDK(props) {
  const router = useRouter()
  const { setTheme } = useTheme()
  const {open, setOpen} = props

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Links">
          {docsConfig.mainNav
            .filter((navitem) => !navitem.external)
            .map((navItem) => (
              <CommandItem
                key={navItem.href}
                value={navItem.title}
                onSelect={() => {
                  runCommand(() => router.push(navItem.href as string))
                }}
              >
                <FileIcon className="mr-2 h-4 w-4" />
                {navItem.title}
              </CommandItem>
            ))}
        </CommandGroup>
        {docsConfig.sidebarNav.map((group) => (
          <CommandGroup key={group.title} heading={group.title}>
            {group.items.map((navItem) => (
              <CommandItem
                key={navItem.href}
                value={navItem.title}
                onSelect={() => {
                  runCommand(() => router.push(navItem.href as string))
                }}
              >
                <div className="mr-2 flex h-4 w-4 items-center justify-center">
                  <CircleIcon className="h-3 w-3" />
                </div>
                {navItem.title}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
        <CommandSeparator />
        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
            <SunIcon className="mr-2 h-4 w-4" />
            Light
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
            <MoonIcon className="mr-2 h-4 w-4" />
            Dark
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
            <LaptopIcon className="mr-2 h-4 w-4" />
            System
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
