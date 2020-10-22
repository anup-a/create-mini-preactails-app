import { h } from 'preact'
import { useState } from 'preact/hooks'
import Navbar from './nav'
import PreactSVG from './../assets/preact.svg'
import PlusSVG from './../assets/004.svg'
import TailwindSVG from './../assets/tailwindcss.svg'

function Home({ isDark, toggleDarkMode }) {
  return (
    <div className=" dark:bg-gray-900">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode}/>
      <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg justify-evenly w-7/10 h-7/10 dark:bg-darkish-black">
      <div className="flex items-center w-full justify-evenly">
      <div className="preact-svg">
<img src={PreactSVG} alt=""  width="150"/>
        </div>
        <div className="plus-svg">
<img src={PlusSVG} alt=""  width="100"/>
        </div>
        <div className="tail-svg">
<img src={TailwindSVG} alt="" width="175"/>
        </div>
      </div>
      <div className="font-sans text-3xl font-bold dark:text-white">
        Minified Preact Tailwind Starter ( + Dark Mode)
      </div>
      </div>
      
        
      </div>
    </div>
  )
}

export default Home
