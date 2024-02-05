'use client'
import {Icons} from "@/components/customize-ui/Icons";
import {Box} from "@mui/material";
import * as React from "react";

interface Props {
  open: boolean;
  onOpen?: () => void;
}

export function HamburgerMenu(props: Props & React.HTMLAttributes<SVGElement>) {
  const {open, onOpen, ...rest} = props

  return (
    <Box
      sx={{
        position: 'relative',
        '& rect': {
          transformOrigin: 'center',
          transition: '0.2s',
        },
        ...(open && {
          '& rect:first-of-type': {
            transform: 'translate(1.5px, 1.6px) rotateZ(-45deg)',
          },
          '& rect:last-of-type': {
            transform: 'translate(1.5px, -1.2px) rotateZ(45deg)',
          },
        }),
      }}
    >
      <Icons.hamburgerMenu {...rest} />
    </Box>
  );
}
