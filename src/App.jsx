import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {  

  return (
    <>
      <Navbar/>
      <div className="max-sm:container container w-4/5 bg-stone-300 min-h-[80vh] m-auto rounded-lg">
        <div className='p-3' id='outer'>
          <div className='' id='inner'>
            <h2 className='text-2xl justify-center flex'>Add New Todo</h2>
            <div className='pt-5 flex gap-4 m-auto justify-center max-sm:flex-col max-sm:items-center text-base'>
              <input type='text' className='rounded-md w-[60%] max-sm:w-11/12 text-xl max-sm:text-xl p-1' placeholder='Enter Task'/>
              <button className='text-stone-300 bg-green-700 text-xl p-2 rounded-md w-2/12 max-sm:w-11/12 max-sm:p-1 hover:bg-green-800'>Add</button>
            </div>
          </div>
          <hr className='mt-3 bg-white h-[2px]'/>

          <div className='mt-2' id='inner2'>
            <h2 className='text-2xl flex justify-center'>Your Todos</h2>
            <div className='p-2'>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis et maiores voluptatum necessitatibus minus. Minima.</span>
                <button className='text-stone-300 bg-green-700 text-xl p-2 rounded-md w-auto m-2 max-sm:w-11/12 max-sm:p-1 hover:bg-green-800'>Edit</button>
                <button className='text-stone-300 bg-green-700 text-xl p-2 rounded-md w-auto m-2 max-sm:w-11/12 max-sm:p-1 hover:bg-green-800'>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
