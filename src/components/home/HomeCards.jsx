import React from 'react'
import Link from 'next/link'

function HomeCards({ img, title, url }) {
  return (
    <section className='sm:w-2/4 sm:h-screen w-full h-2/4 relative z-20'>
      <img src={img} alt={title} className="sm:h-screen h-full w-full object-cover" />
      <Link href={url} className='absolute bottom-12 sm:left-14 right-10 underline sm:text-6xl text-5xl capitalize font-normal'>{title}</Link>
    </section>
  )
}

export default HomeCards