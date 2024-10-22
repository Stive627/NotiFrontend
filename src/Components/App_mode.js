import React from 'react'
import { UseTheme } from '../useHook/useContextTheme'

function App_mode() {
    const {theme, onchange } = UseTheme()
  return (
    <>
        <input id='themes' type='checkbox' className='hidden' checked={theme === 'light'} onChange={onchange}/>
        <label htmlFor='themes'>
            <div className=' w-16 h-7 p-1'>
                <div className={`flex justify-between`}>
                    <div className={`w-6 h-6 rounded-full`}>
                        <img className={`object-cover ${theme === 'light' && 'opacity-45'}`} src={()=>require('../Images/moon.png')}/>
                    </div>
                    <div className={`w-6 h-6 rounded-full ${theme === 'dark' && ' opacity-45'}`}>
                        <img className={`object-cover`} src={()=>require('../Images/sun.jpg')}/>
                    </div>
                </div>
            </div>
        </label>
    </>
  )
}

export default App_mode
