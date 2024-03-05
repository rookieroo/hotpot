import { FC } from 'react'
import dynamic from "next/dynamic";
const TinyMCE = dynamic(() => import('@/components/tinymce/TinyMCE'), {ssr: false})
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TinyMCE Rich Text Editor',
  description: 'Find your own editor & tools & games',
}
const page: FC = () => {
  return (
    <>
      <TinyMCE />
    </>
  )
}

export default page
