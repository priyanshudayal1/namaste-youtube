import React from 'react'

export const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center gap-1 shadow-md rounded-lg'>
        <img
          className="h-7"
          src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
          height={20}
          alt="user"
        />
        <span className='px-2 font-bold'>
        {name}
        </span>
        <span>{message}</span>
    </div>
  )
}
