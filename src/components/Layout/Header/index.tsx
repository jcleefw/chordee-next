import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="border fixed split-nav row">
      <div className="nav-brand">
        <h3>
          <a href="#">Chordee</a>
        </h3>
      </div>
      <div className="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible" />
        <label htmlFor="collapsible1">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </label>

        <div className="collapsible-body">
          <ul className="inline">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/FretboardPage">Fretboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
