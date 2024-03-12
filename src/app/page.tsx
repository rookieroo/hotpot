import Image from 'next/image'
import Link from 'next/link'
import LargeHeading from '@/components/ui/large-heading'
import Paragraph from '@/components/ui/paragraph'

import type { Metadata } from 'next'
import {SiteFooter} from "../components/layout/site-footer";

export const metadata: Metadata = {
  title: 'Hotpot | Json | Markdown | Tinymce | Excalidraw',
  description: 'Find your own editor & tools',
}

export default function Home() {

  return (
    <div className='h-[100vh] flex flex-col items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full bg-skin-primary gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading
            size='lg'
            className='three-d text-black dark:text-light-gold'>
            Try to use <br />
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
            <Link
              href='/markdown'
              className='underline underline-offset-2 text-black dark:text-light-gold'>
              Markdown Editor
            </Link>
            <br />
            <Link
              href='/json'
              className='underline underline-offset-2 text-black dark:text-light-gold'>
              Json Editor
            </Link>
            <br />
            <Link
              href='/tinymce'
              className='underline underline-offset-2 text-black dark:text-light-gold'>
              TinyMCE Editor
            </Link>
          </Paragraph>

          <div className='relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
              priority
              className='img-shadow '
              quality={100}
              style={{ objectFit: 'contain' }}
              fill
              src='/typewriter.png'
              alt='typewriter'
            />
          </div>
          <SiteFooter/>
        </div>
      </div>
    </div>
  )
}
