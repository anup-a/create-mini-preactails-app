import { h } from 'preact'
import Navbar from './nav'
import Main from './main'
import SideBar from './bar'

function Home({ isDark, toggleDarkMode }) {
  return (
    <div className=" dark:bg-gray-900">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <div className="flex items-center justify-center h-screen">
        <Main />
        <SideBar />
      </div>
    </div>
  )
}

export default Home
