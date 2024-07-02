import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between md:justify-around bg-stone-600 text-white p-2 sm:justify-between mb-5'>
        <span className='font-bold text-2xl'>Todos</span>
        <ul className='flex gap-6 font-semibold text-xl'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar