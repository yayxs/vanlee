'use client'

import {  usePathname } from 'next/navigation'

import Link from 'next/link'

export default function Links(){

const pathname = usePathname()

return <nav>
  <Link className={`link ${pathname === '/' ? 'active' : ''}`} href={'/'}>
  home
  </Link>


  <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href={'/about'}>
  about
  </Link>
</nav>

}