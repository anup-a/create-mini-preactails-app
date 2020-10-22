import { h } from 'preact'
import { useState } from 'preact/hooks'
import Navbar from './nav'

function Home({ isDark, toggleDarkMode }) {
  return (
    <div className="h-screen dark:bg-darkish-black">
    <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode}/>
      Preact Tailwind Starter
    </div>
  )
}

export default Home
