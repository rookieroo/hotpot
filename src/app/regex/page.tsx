'use client'

import { FC } from 'react'
import dynamic from "next/dynamic";
const Regex = dynamic(() => import('@/components/regex/regex'), {ssr: false})

const page: FC = () => {
  return (
    <>
      <Regex />
    </>
  )
}

export default page
