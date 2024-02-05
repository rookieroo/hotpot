'use client'

import * as React from "react";
import {Customizer} from "@/components/theme/ThemeCustomizer";
import {HamburgerMenu} from "@/components/animate-svg/hamburger-menu";
import {useState} from "react";
import {Popover, PopoverTrigger, PopoverContent} from "@/ui/popover";
import {ClickAwayListener} from "@mui/material";
import {Button} from "@/ui/button";

export function SettingToggle() {
  const [open, setOpen] = useState(false);
  const hambugerRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          onClick={() => setOpen(o => !o)}
          ref={hambugerRef}
          variant="ghost"
          className="w-9 px-0 hidden lg:inline-flex"
        >
          <HamburgerMenu
            open={open}
            className="fill-current w-4 h-4"
          />
          <span className="sr-only">Time Line</span>
        </Button>
      </PopoverTrigger>
      <ClickAwayListener
        onClickAway={(event) => {
          if (!hambugerRef.current!.contains(event.target as Node)) {
            setOpen(false);
          }
        }}
      >
        <PopoverContent className="w-80">
          <Customizer/>
        </PopoverContent>
      </ClickAwayListener>
    </Popover>
  )
}
