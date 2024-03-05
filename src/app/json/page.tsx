import { FC } from 'react'
import dynamic from "next/dynamic";
const JsonEditorApp = dynamic(() => import('@/components/json-editor/JsonEditorApp'), {ssr: false})

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Json Editor',
  description: 'Find your own editor & tools & games',
}

const page: FC = () => {
  return (
    <>
      <JsonEditorApp />
    </>
  )
}

export default page
