'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='flex justify-between'>
        <li className='flex gap-4'>
            <ul>
              <Link href='/'>Home</Link>
            </ul>
            <ul>
              <Link href='/blog'>Blog</Link>
            </ul>
            <ul>
              <Link href='/contact'>Contact</Link>
            </ul>
        </li>
        <div className='flex gap-4'>
          <h1>Count in navbar {count}</h1>
          <button onClick={()=>setCount(pre=>pre+1)}>Add</button>
        </div>
    </div>
  )
}

export default Navbar