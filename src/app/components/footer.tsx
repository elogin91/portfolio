import React from 'react'
import { Envelope, Github, Linkedin, Medium, Twitter } from '../icons'

export const Footer = ({ contactMeLinks }) => {
  return (
    <footer className='w-full bg-puce shadow-footer mt-12 py-4 fixed bottom-0 '>
      <div className='flex items-center justify-center gap-1'>
        <a href={contactMeLinks[0]} aria-label='Email'><Envelope className='icons_contactme' /></a>
        <a href={contactMeLinks[1]} aria-label='Twitter'><Twitter className='icons_contactme' /></a>
        <a href={contactMeLinks[2]} aria-label='Linkedin'><Linkedin className='icons_contactme' /></a>
        <a href={contactMeLinks[3]} aria-label='Github'><Github className='icons_contactme' /></a>
      </div>
    </footer>
  )
}
