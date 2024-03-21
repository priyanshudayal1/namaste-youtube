import React from 'react'

export const Button = ({title}) => {
  return (
    <div>
        <button className='px-2 rounded-lg py-2 m-2 shadow-sm bg-gray-100'>{title}</button>
    </div>
  )
}
