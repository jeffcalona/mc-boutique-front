import React from 'react'

function ButtonC({ text, bgColor, textColor, onClick }) {
  return (
    <button onClick={onClick} className={`${bgColor} ${textColor} w-full py-3 custom-capitalize-fist-letter border-black border-[1px] ${bgColor === 'bg-black' ? 'hover:bg-gray-100' : 'hover:bg-black'} ${textColor === 'text-white' ? 'hover:text-black' : 'hover:text-white'} transition-all custom-transition`} >{text}</button>
  )
}

export default ButtonC