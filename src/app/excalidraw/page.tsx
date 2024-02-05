'use client'

import { FC } from 'react'
import dynamic from "next/dynamic";
const ExcalidrawApp = dynamic(() => import('@/components/excalidraw/ExcalidrawApp'), {ssr: false})

const page: FC = () => {
  return (
    <>
      <ExcalidrawApp />
    </>
  )
}

export default page
