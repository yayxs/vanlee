import { ModeToggle } from 'app/components/ModeToggle'
import { ThemeProvider } from 'app/components/ThemeProvider'
import Link from 'app/components/base/Link'

interface LayoutProps {
  children: React.ReactNode
}

export default function BlogLayout({ children }: LayoutProps) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <div className='max-w-2xl mx-auto py-10 px-4'>
          <header>
            <div className='flex items-center justify-between'>
              <nav className='ml-auto text-sm font-medium space-x-6 mr-7'>
                <Link href='/'>Home</Link>
                <Link href='/blog/about-blog'>About</Link>
              </nav>
              <ModeToggle />
            </div>
          </header>
          <main>{children}</main>
        </div>
      </ThemeProvider>
    </>
  )
}
