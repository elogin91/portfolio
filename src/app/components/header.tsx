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

export const Header = ({ pages, name }: HeaderProps) => {
  return (
    <header className='flex flex-col relative w-full h-48'>
      <div className='flex  flex-row-reverse sm:flex-col justify-around h-full sm:px-6 px:1 bg-header z-10'>
        <nav className='flex flex-col mt-10'>
          <div className='menu-wrap flex flex-col'>
            <div className="button-nav">
            <button
              type="button"
              className="button-nav flex inline-flex items-center p-1 w-10 h-10 justify-center rounded-lg sm:hidden hover:bg-puce  hover:ring-puce focus:outline-none ring-night ring-2 focus:ring-pink">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            </div>
            <div className='menu sm:text-right pt-10 sm:block  sm:flex-row sm:gap-6 sm:self-end' >
              {pages.map((page) => {
                return (<Link
                  aria-label={page.label}
                  key={page.id}
                  href={page.link}
                  className='px-6 py-2 min-w-100 hover:bg-puce font-Oswald rounded-lg font-semibold uppercase tracking-wide bg-none'>
                  {page.label}
                </Link>)
              })}
            </div>
          </div>
        </nav>
        <h1 className='uppercase pl-2 sm:pl-0 w-1/2'>
          {name}
        </h1>
      </div >
      <Image
        priority
        height={400}
        width={2000}
        className='w-full h-48 object-cover  absolute mb-6'
        src='/images/fondoFlor2.jpg'
        alt={`Image of ${name}`}
        aria-label={`Image of ${name}`}
      />

    </header >
  )
}

