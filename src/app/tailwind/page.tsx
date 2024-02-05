import type {Metadata} from 'next'
import {HamburgerMenu} from "@/components/animate-svg/hamburger-menu";

export const metadata: Metadata = {
  title: 'Similarity API | Dashboard',
  description: 'Free & open-source text similarity API',
}

const page = async () => {

  return (
    <div className='max-w-7xl mx-auto mt-16'>
      <HamburgerMenu open={false}></HamburgerMenu>
      <div className="ms-52 my-10 text-5xl font-extrabold">
        <span
          className="animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent"> Tailwind CSS Animation </span>
      </div>
      <div className="mx-auto mt-10 w-full max-w-sm rounded-md border border-gray-300 p-4">
        <div className="animate-pulse space-x-4">
          <div className="grid">
            <div className="flex">
              <div className="w-10 rounded-full bg-slate-200"></div>
              <div className="ms-4 w-full space-y-6">
                <div className="h-2 rounded bg-slate-200"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-slate-200"></div>
                    <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  </div>
                  <div className="h-2 rounded bg-slate-200"></div>
                </div>
              </div>
            </div>
            <div className="mt-5 space-y-6 py-1">
              <div className="h-2 rounded bg-slate-200"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                </div>
                <div className="h-2 rounded bg-slate-200"></div>
              </div>
              <div className="h-2 rounded bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-40 flex">
        <div className="relative mx-auto h-28 w-28 animate-spin rounded-full border-2 p-4">
          <span className="absolute right-5 top-2 flex h-3 w-3">
            <span className="bg-white-500 relative inline-flex h-3 w-3 rounded-full bg-gray-500"> </span>
          </span>
        </div>
      </div>
      <div className="my-40 flex">
        <div className="relative mx-auto h-10 w-10 animate-bounce">
          <div className="mx-auto h-16 w-16 animate-pulse rounded-full bg-gray-400"></div>
            <span className="absolute flex h-5 w-5 animate-spin">
            <span className="h-4 w-4 rounded-full bg-gray-400"> </span>
            </span>
        </div>
      </div>
      <div className="my-40 flex">
        <div className="mx-auto h-20 w-20 animate-spin rounded-3xl p-6 outline-dotted outline-2 outline-gray-500"></div>
      </div>
      <div className="my-40 flex">
        <div className="relative mx-auto h-10 w-10">
          <div className="relative mx-auto ms-5 h-24 w-24 animate-bounce rounded-full border-2">
            <div className="absolute bottom-0 right-10">
              <div className="relative h-40 animate-bounce">
                <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-40 flex">
        <div className="relative mx-auto mt-5 animate-[propel_5s_infinite]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="h-16 w-16">
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </div>
      </div>
      <div className="my-40 flex">
        <div className="relative mx-auto h-28 w-28 animate-[flip_5s_infinite] border border-red-200">
          <div className="h-14 animate-[flip_5s_infinite] bg-red-100"></div>
        </div>
      </div>
      <div className="animate-[wiggle_1s_ease-in-out_infinite]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="h-16 w-16">
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
      </div>
    </div>
  )
}

export default page
