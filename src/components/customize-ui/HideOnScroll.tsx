'use client'

import Slide from "@mui/material/Slide";
import useScrollTrigger from "@/hooks/use-scroll-trigger";

interface Props {
  children: React.ReactElement;
  threshold?: number;
}

export function HideOnScroll(props: Props) {
  const { children, threshold = 50} = props;

  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: false,
    threshold: threshold,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
