import { FC } from 'react'
import dynamic from "next/dynamic";
const ExcalidrawApp = dynamic(() => import('@/components/excalidraw/ExcalidrawApp'), {ssr: false})

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Excalidraw & sharp your ideas',
  description: 'Find your own editor & tools & games',
}

const page: FC = () => {
  return (
    <>
      <ExcalidrawApp />
    </>
  )
}

export default page
