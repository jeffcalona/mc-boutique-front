import React from 'react'

function ColorsButton({ color }) {
  return (
    <button className='w-7 h-7 rounded-full' style={{backgroundColor: `${color}`}} />
  )
}

export default ColorsButton