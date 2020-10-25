import { h } from 'preact'

function SideBar() {
  return (
    <div className="z-10 flex flex-col items-center w-3/5 px-5 py-1 mt-4 bg-white h-7/10 sm:p-5 sm:shadow-lg sm:rounded-md sm:m-5 sm:w-3/10 md:w-1/5 h-3/5 sm:h-4/5 custom-bar xs:justify-evenly dark:bg-darkish-black dark:text-white">
      <div className="flex flex-col">Side Bar</div>
    </div>
  )
}

export default SideBar
