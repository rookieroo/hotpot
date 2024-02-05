'use client'

import { FC } from 'react'
import type { Metadata } from 'next'
import {TinyMCE} from "@/components/tinymce";

const page: FC = () => {
  return (
    <>
      <TinyMCE />
    </>
  )
}

export default page
