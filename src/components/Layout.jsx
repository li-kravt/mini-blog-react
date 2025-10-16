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
            className='flex items-center justify-start bg-black text-white rounded rounded-xl p-1'>
            {button.id === "minimize" && "min" || button.id === "maximize" && "max" || button.id === "close" && "close"}
          </button>)}

      </div>
    </div>
    <Outlet />
  </div>
)