import { h } from 'preact'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

function Navbar({ isDark, toggleDarkMode }) {
  return (
    <div className="fixed z-20 flex items-center justify-between w-full h-16 bg-white shadow-lg dark:bg-darkish-black dark:text-white">
      <div className="flex items-center nav-item ">
        <img
          src={Github}
          alt="Github logo"
          width="30"
          style={{ filter: isDark ? 'invert(1)' : '', marginRight: '2rem' }}
        />

        <DarkModeSwitch
          style={{ marginRight: '2rem' }}
          checked={isDark}
          onChange={toggleDarkMode}
          size={30}
        />
      </div>
    </div>
  )
}

export default Navbar
