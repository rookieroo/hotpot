import type {Metadata} from 'next'
import {SiteFooter} from "../components/layout/site-footer";
import {HomeTabs} from "../components/home/home-tabs";

export const metadata: Metadata = {
  title: 'Hotpot | Json | Markdown | Tinymce | Excalidraw',
  description: 'Find your own editor & tools',
}

export default function Home() {

  return (
    <div className='w-full flex-col sm:flex'>
      <HomeTabs />
      <SiteFooter/>
    </div>
  )
}
