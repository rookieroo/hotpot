import { FC } from 'react'
import dynamic from "next/dynamic";
const Minify = dynamic(() => import('@/components/minify/minify'), {ssr: false})
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minify Your Code',
  description: 'Find your own editor & tools & games',
}

const page: FC = () => {
  return (
    <>
      <Minify />
    </>
  )
}

export default page
