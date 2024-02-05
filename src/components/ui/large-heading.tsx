'use client'
import {FC, useEffect} from 'react'

import { cn } from '@/utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import {useTheme} from "@/lib/../../store/useTheme";
import {getAccessibleColor, getRGBColor} from "@/utils/utils";

const headingVariants = cva(
  'text-black bg-skin-primary dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: 'text-4xl md:text-5xl lg:text-6xl',
        lg: 'text-5xl md:text-6xl lg:text-7xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading: FC<LargeHeadingProps> = ({
  children,
  className,
  size,
  ...props
}) => {

  return (
    <h1 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  )
}

export default LargeHeading
