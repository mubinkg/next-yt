'use client'

import React, { useState } from 'react'

const Footer = () => {
    const [count, setCount] = useState(0)
    return (
    <div className='flex justify-between'>
        <h1>This is footer</h1>
        <div className='flex gap-4'>
            <h1>Count in footer {count}</h1>
            <button onClick={()=>setCount(pre=>pre+1)}>Add</button>
        </div>
    </div>
  )
}

export default Footer