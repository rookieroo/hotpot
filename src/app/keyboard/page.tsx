'use client'

import { FC } from 'react'
import dynamic from "next/dynamic";
const MyKeyBoard = dynamic(() => import('@/components/keyboard/index'), {ssr: false})

const page: FC = () => {
  return (
    <>
      <MyKeyBoard />
    </>
  )
}

export default page
