import React from 'react'
import { Button } from './Button'

export const ButtonList = () => {
  const btnList=["All","Mathematics","Sports","Comedy","Football","StandUp","Ronaldo","Gaming","News","Cooking",
  "Live","E-Sports","Kapil Sharma","Messi","Neymar","Songs","TV"]
  return (
    <div className='flex justify-center px-2'>
    {btnList.map((btn)=>(
      <Button title={btn} key={btn}/>
    ))}
    </div>
  )
}
