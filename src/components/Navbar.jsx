import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header" id="home">
      <nav className="navbar" aria-label="Main navigation">
        <a className="logo" href="#home" onClick={closeMenu}>Logo</a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="navigation-panel"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <div
          className={`navigation-panel${isOpen ? ' is-open' : ''}`}
          id="navigation-panel"
        >
          <button className="panel-close" type="button" aria-label="Close menu" onClick={closeMenu}>
            <X size={25} />
          </button>

          <div className="nav-links">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>

          <a className="account-button" href="#create-account" onClick={closeMenu}>
            Create Account
          </a>
        </div>
      </nav>
    </header>
  )
}