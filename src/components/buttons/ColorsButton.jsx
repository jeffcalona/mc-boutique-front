import React from 'react'

function ColorsButton({ color, onChange }) {

  return (
    <button className='w-7 h-7 rounded-full' style={{backgroundColor: `${color}`}} onChange={onChange} />
  )
}

export default ColorsButton