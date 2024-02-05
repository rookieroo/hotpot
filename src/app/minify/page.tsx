'use client'

import { FC } from 'react'
import dynamic from "next/dynamic";
const Minify = dynamic(() => import('@/components/minify/minify'), {ssr: false})

const page: FC = () => {
  return (
    <>
      <Minify />
    </>
  )
}

export default page
