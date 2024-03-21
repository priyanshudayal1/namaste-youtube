import React from 'react'
import { ButtonList } from './ButtonList'
import { VideoContainer } from './VideoContainer'

export const MainContainer = () => {
  return (
    <div className='col-span-11 flex flex-col'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}
