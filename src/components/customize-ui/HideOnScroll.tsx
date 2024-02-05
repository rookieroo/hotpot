'use client'

import Slide from "@mui/material/Slide";
import useScrollTrigger from "@/hooks/use-scroll-trigger";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
  threshold?: number;
}

export function HideOnScroll(props: Props) {
  const { children, window, threshold = 50} = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: false,
    threshold: threshold,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
