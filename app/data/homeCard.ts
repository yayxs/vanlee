interface Item {
  title: string
  desc: string
  href?: string
}

const projectsData: Item[] = [
  {
    title: 'Learn',
    desc: 'Currently learning',
    href: '/learn'
  },
  {
    title: 'Blog',
    desc: 'Write some articles and posts',
    href: '/blog'
  },
  {
    title: 'Tutorial',
    desc: 'Systematic tutorial',
    href: '/tutorial'
  }
]

export default projectsData
