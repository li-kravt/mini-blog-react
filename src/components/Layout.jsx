import { Outlet } from 'react-router'
import { DATA } from '../../dataCard'

export const Layout = () => (
  <div className="flex w-full h-full bg-gray-200 p-10">
    <div className="flex items-center justify-between px-10 h-12 w-full bg-white rounded rounded-4xl">
      <div className='flex items-center justify-start '>
        <p>{DATA.header.logoText}</p>
      </div>
      <div className='flex gap-4'>
        {DATA.header.buttons.map((button) =>
          <button id={button.id}
            key={button.id}
            className='flex items-center px-4 py-1 justify-start items-center bg-black text-white rounded rounded-xl cursor-pointer'>
            {button.id === "minimize" && <div className='flex h-1 w-3 bg-white'></div> ||
              button.id === "maximize" && <div className='flex h-3 w-3 bg-white'></div> ||
              button.id === "close" && "X"}
          </button>)}

      </div>
    </div>
    <Outlet />
  </div>
)