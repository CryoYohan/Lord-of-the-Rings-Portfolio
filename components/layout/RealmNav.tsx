'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['about', 'The Guide'],
  ['skills', 'Craft'],
  ['projects', 'Works'],
  ['experience', 'Journey'],
  ['contact', 'Contact'],
]

export default function RealmNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-500 md:px-8 ${scrolled ? 'pt-2' : ''}`}>
      <nav className={`mx-auto flex max-w-7xl items-center justify-between border px-4 py-3 transition-all duration-500 md:px-6 ${scrolled ? 'border-amber-200/20 bg-[#0b1710]/90 shadow-2xl backdrop-blur-xl' : 'border-transparent bg-transparent'}`}>
        <a href="#top" className="font-serif text-sm tracking-[.2em] text-amber-100" onClick={() => setOpen(false)}>
          CYRIL <span className="text-amber-300/70">YPIL</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([href, label]) => <a key={href} href={`#${href}`} className="ink-link text-xs uppercase tracking-[.18em] text-amber-100/60">{label}</a>)}
          <a href="/Resume-GL.pdf" target="_blank" rel="noreferrer" className="border border-amber-300/40 px-4 py-2 text-xs uppercase tracking-[.16em] text-amber-200 transition hover:bg-amber-300 hover:text-[#172016]">Resume</a>
        </div>
        <button type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} className="text-amber-100 md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && <div className="mx-auto mt-2 max-w-7xl border border-amber-200/20 bg-[#0b1710]/95 p-4 backdrop-blur-xl md:hidden">
        <div className="flex flex-col gap-4">
          {links.map(([href, label]) => <a key={href} href={`#${href}`} onClick={() => setOpen(false)} className="text-xs uppercase tracking-[.2em] text-amber-100/75">{label}</a>)}
          <a href="/Resume-GL.pdf" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-[.2em] text-amber-300">Open resume</a>
        </div>
      </div>}
    </header>
  )
}
