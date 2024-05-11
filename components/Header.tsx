'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import menuData from '@/data/headMenu'
import { ModeToggle } from './ModeToggle'

export default function Header() {
  const [sticky, setSticky] = useState(false)

  return (
    <>
      <header
        className={`head left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? 'dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition'
            : 'absolute bg-transparent'
        }`}
      >
        <div className='container'>
          <div className='relative flex items-center justify-between -mx-4'>
            <div className='max-w-full px-4 w-60 xl:mr-12'></div>
            <div className='flex items-center justify-between w-full px-4'>
              <div>
                <nav
                  id='navBar'
                  className={`navbar absolute right-0 z-30 w-[250px]`}
                >
                  <ul className='block lg:flex lg:space-x-12'>
                    {menuData.map((menuItem, index) => {
                      return (
                        <li key={index} className='relative group'>
                          {menuItem.path ? (
                            <Link
                              href={menuItem.path}
                              className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : (
                            <></>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </div>
              <div className='flex items-center justify-end pr-16 lg:pr-0'>
                {/* <ModeToggle /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
