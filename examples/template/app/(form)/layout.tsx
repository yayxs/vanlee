import { Suspense } from 'react'

import Link from 'next/link'

export const key = 'force-dynamic'

function Loading() {
  return (
    <div className='h-10 mt-5 flex-1 rounded-xl bg-sky-500 text-white flex items-center justify-center '>
      load
    </div>
  )
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function CusComp() {
  await sleep(5000)
  return (
    <div className='h-10 mt-5 mb-2 flex-1 rounded-xl bg-indigo-500 text-white flex items-center justify-center'>
      Hello, Layout!
    </div>
  )
}

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className='p-5'>
      <nav className='flex items-center justify-center gap-10 text-blue-600'>
        <Link href={'/about'}>about</Link>
        <Link href={'/set'}>set</Link>
      </nav>

      <Suspense fallback={<Loading />}>
        <CusComp></CusComp>
      </Suspense>
      {children}
    </div>
  )
}
