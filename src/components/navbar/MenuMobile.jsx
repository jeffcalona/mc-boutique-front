import React from 'react'

function MenuMobile({ menuMobileOpen }) {
  return (
    <nav className={menuMobileOpen === false ? 'left-0' : '-left-full'}>
      <div className='absolute top-0 left-0 w-screen h-screen bg-black opacity-50' />
      <div className='w-[85%] h-screen bg-black absolute top-0 left-0'>
        hola
      </div>
    </nav>
  )
}

export default MenuMobile