'use client'
import Link from 'next/link'

import { useState, useEffect, Suspense } from 'react'

function Loading() {
  return (
    <div className='h-10 mt-5 mb-2 flex-1 rounded-xl bg-sky-500 text-white flex items-center justify-center'>
      Loading
    </div>
  )
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function CustomComponent() {
  await sleep(1000)
  return (
    <div className='h-10 mt-5 mb-2 flex-1 rounded-xl bg-indigo-500 text-white flex items-center justify-center'>
      Hello, Template!
    </div>
  )
}

export default function Template({ children }: { children: React.ReactNode }) {
  const [text, setText] = useState('')

  useEffect(() => {}, [])

  return (
    <div className='p-5'>
      <Suspense fallback={<Loading />}>
        <CustomComponent />
      </Suspense>
      {/* <nav className='flex items-center justify-center gap-10 text-blue-600'>
        <Link href={'/about'}>about</Link>
        <Link href={'/set'}>set</Link>
      </nav> */}
      <label
        htmlFor='text'
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        输入框
      </label>
      <div className='mt-2'>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type='text'
          name=''
          id='text'
          required
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
      </div>
      {children}
    </div>
  )
}
