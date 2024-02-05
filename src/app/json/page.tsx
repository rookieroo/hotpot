'use client'

import { FC } from 'react'
import dynamic from "next/dynamic";
const JsonEditorApp = dynamic(() => import('@/components/json-editor/JsonEditorApp'), {ssr: false})

const page: FC = () => {
  return (
    <>
      <JsonEditorApp />
    </>
  )
}

export default page
