import React from 'react'

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <main className='sm:mb-32 mb-16'>
                {children}
            </main>
        </>
    )
}
