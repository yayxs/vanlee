import Link from './base/Link'
const Card = ({ title, desc, href }) => {
  return (
    <>
      <div className='md max-w-[500px] p-4 md:w-1/2'>
        <Link href={href} aria-label={`Link to ${title}`}>
          <div className='overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700 cursor-pointer'>
            <div className='p-6'>
              <h2 className='mb-3 text-2xl font-bold leading-8 tracking-tight'>
                {title}
              </h2>
              <p className='prose mb-3 max-w-none text-gray-500 dark:text-gray-400'>
                {desc}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Card
