import { FC } from 'react'
import dynamic from "next/dynamic";
const MdEditorEx = dynamic(() => import('@/components/markdown/MarkDownEditor'), {ssr: false})
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Markdown Editor',
  description: 'Find your own editor & tools & games',
}
const page: FC = () => {
  return (
    <>
      <MdEditorEx />
    </>
  )
}

export default page
