'use client'

import { cn } from '@/utils/utils'
import { useRouter } from 'next/navigation'
import { ButtonHTMLAttributes, FC } from 'react'
import Icons from './Icons'
import { Button } from '@/ui/button'

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const BackButton: FC<BackButtonProps> = ({ className, ...props }) => {
  const router = useRouter()
  return (
    <Button
      variant='ghost'
      {...props}
      onClick={() => router.back()}
      className={cn('w-fit', className)}>
      <>
        <Icons.ChevronLeft className='mr-2 h-4 w-4' />
        Back
      </>
    </Button>
  )
}

export default BackButton
