'use client'

import { FC } from 'react'
import dynamic from "next/dynamic";
const MahjongApp = dynamic(() => import('@/components/mahjong/MahjongApp'), {ssr: false})

const page: FC = () => {
  return (
    <>
      <MahjongApp />
    </>
  )
}

export default page
