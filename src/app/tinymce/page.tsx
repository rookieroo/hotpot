'use client'

import { FC } from 'react'
import dynamic from "next/dynamic";
const TinyMCE = dynamic(() => import('@/components/tinymce/TinyMCE'), {ssr: false})

const page: FC = () => {
  return (
    <>
      <TinyMCE />
    </>
  )
}

export default page
