import Link from 'next/link'

import type { LinkProps } from 'next/link'

const CustomLink = ({ href, ...rest }) => {
  return <Link href={href} {...rest}></Link>
}

export default CustomLink
