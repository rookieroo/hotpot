import { FC } from 'react'
import 'simplebar-react/dist/simplebar.min.css'

import DocumentationTabs from '@/components/documentation/DocumentationTabs'
import type { Metadata } from 'next'
import {BookmarkIcon} from "@radix-ui/react-icons";
import {Button} from "@/ui/button";
import LargeHeading from "@/ui/large-heading";
import Paragraph from "@/ui/paragraph";

export const metadata: Metadata = {
  title: 'Similarity API | Documentation',
  description: 'Free & open-source text similarity API',
}

const page: FC = () => {
  return (
    <div className='container max-w-7xl mx-auto mt-12'>
      <div className='flex flex-col items-center gap-6'>
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>
        <Button
          className="w-20"
        >
          <BookmarkIcon width="16" height="16" /> Bookmark
        </Button>
        <DocumentationTabs />
      </div>
    </div>
  )
}

export default page
