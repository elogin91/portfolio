import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
  name: string,
  pages: {
    id: number,
    label: string,
    link: string
  }[]
}

export const Header = ({ pages, name } : HeaderProps) => {
  return (
    <header className='flex flex-col relative  w-full h-48'>
      <div className='flex flex-col justify-around h-full sm:px-6 px:1 bg-header z-10'>

        
        <nav className='text-right flex hidden sm:block flex-row sm:gap-6 self-end gap-1'>
          {pages.map((page) => {
            return (<Link
              aria-label={page.label}
              key={page.id}
              href={page.link}
              className='px-6 py-2 min-w-100 hover:bg-puce font-Oswald rounded-lg font-semibold uppercase tracking-wide bg-none'>
              {page.label}
            </Link>)
          })}
        </nav>
        <h1 className='uppercase pl-2 sm:pl-0'>
          {name}
        </h1>
      </div>
      <Image 
        priority 
        height={400} 
        width={2000} 
        className='w-full h-48 object-cover  absolute mb-6' 
        src='/images/fondoFlor2.jpg' 
        alt={`Image of ${name}` }
        aria-label={`Image of ${name}` } 
      />

    </header>
  )
}

