"use client";
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react'

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
            <div
              id="navbar-default"
              className='menu hidden sm:text-right pt-10 sm:block sm:flex-row sm:gap-6 sm:self-end' >
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

          <Menu as="div" id="menu" className=' items-center menu-wrap flex flex-col'>
            <div className="button-nav">
              <Menu.Button
                type="button"
                data-collapse-toggle="navbar-default"
                aria-controls="navbar-default"
                aria-expanded="false"
                className="button-nav flex inline-flex items-center p-1 w-10 h-10 justify-center rounded-lg sm:hidden hover:bg-puce hover:ring-puce focus:outline-none ring-night ring-2 focus:ring-pink">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="items-center absolute right-2 z-10 mt-24 w-96 origin-top-right rounded-md bg-puce shadow-lg sm:hidden">
                <div
                  id="navbar-default"
                  className='py-1' >
                  {pages.map((page) => {
                    return (<Menu.Item key={page.id}>
                      {({ active }) => (<Link
                        aria-label={page.label}
                        key={page.id}
                        href={page.link}
                        className='px-2 py-2 min-w-100 hover:bg-pink font-Oswald rounded-lg font-semibold uppercase tracking-wide bg-none'>
                        {page.label}
                      </Link>
                      )}</Menu.Item>)
                  })}
                </div>

              </Menu.Items>
            </Transition>
          </Menu>



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

