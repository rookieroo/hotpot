'use client'

import { FC } from 'react'
import dynamic from "next/dynamic";
const MdEditorEx = dynamic(() => import('@/components/markdown/MarkDownEditor'), {ssr: false})

const page: FC = () => {
  return (
    <>
      <MdEditorEx />
    </>
  )
}

export default page
