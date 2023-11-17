import React from 'react'

function ButtonC({ text, bgColor, textColor, onClick, disabled=false, paddingY=true }) {
  return (
    <>
      {disabled === true ? (
        <button disabled={disabled} onClick={onClick} className={`bg-white text-black w-full ${paddingY && 'py-3'} px-[7px] custom-capitalize-fist-letter border-black border-[1px]`} >{text}</button>
      ) : (
        <button disabled={disabled} onClick={onClick} className={`${bgColor} ${textColor} w-full ${paddingY && 'py-3'} px-[7px] custom-capitalize-fist-letter border-black border-[1px] ${bgColor === 'bg-black' ? 'hover:bg-gray-100' : 'hover:bg-black'} ${textColor === 'text-white' ? 'hover:text-black' : 'hover:text-white'} transition-all custom-transition`} >{text}</button>
      )}
    </>
  )
}

export default ButtonC