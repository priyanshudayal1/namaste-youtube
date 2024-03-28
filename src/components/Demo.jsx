import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper';

const Demo = () => {
    const [isDarkTheme,setIsDarkTheme]=useState(false);
    const [text,setText]=useState(0);
    const prime=useMemo(()=>findNthPrime(text));
  return (
    <div className={'m-4 p-4 w-96 h-96 border-2 border-black' + (isDarkTheme ? 'border-purple-900 border-5' : 'bg-white text-black')}>
    <button className='px-4 py-2 rounded-lg border-2 border-black bg-purple-600 text-white' onClick={()=>setIsDarkTheme(!isDarkTheme)}>{isDarkTheme ? "Light" : "Dark"}</button>
      <div>
        <input type="number" className={'p-2 border-2 border-black'} value={text} onChange={(e)=>setText(e.target.value)} />
      </div>
      <div>
        <h1>Nth Prime Number : {prime}</h1>

      </div>
    </div>
  )
}

export default Demo
