import React,{useState} from 'react'
import {FaCalculator} from 'react-icons/fa'

function Calculator() {

   const [number, setNumber] = useState('');
  
  const handleClick = (e) => {

    setNumber(number.concat(e.target.value));

  }

  const clearScreen = () => {

      setNumber(' ');
  }

  const backSpace = () => {

    setNumber(number.slice(0,-1))
  }

  const handleResult = () =>{
    try {
      setNumber(eval(number).toString())
    }
    catch(error)
    {
      setNumber('Invalid')
    }
  }

  return (
    <section>
        <div className="bg-gray-900 w-96  mx-auto rounded-xl  overflow-hidden mt-10 ">
                   <div className='text-gray-400 w-full font-bold text-3xl h-16 flex items-center space-x-2 pl-2'>
                       <FaCalculator/>
                       <p>CALCULATOR</p>
                   </div>

                   <div className=' h-20 p-2 '>
                       <input
                       type='text'
                       placeholder='0'
                       value= {number}
                       className=' w-full h-full border border-gray-300
                        text-black bg-slate-100 text-4xl text-right pr-4 '
                        />
                   </div>

                   <div className='grid grid-cols-4 gap-2  mt-5 p-2'>
                       <button  onClick ={clearScreen} className='text-gray  bg-white w-20 h-20 rounded-full font-bold text-3xl flex justify-center items-center shadow'>AC</button>
                       <button onClick={backSpace} className='text-black  bg-white w-20 h-20 rounded-full font-bold text-3xl flex justify-center items-center shadow'>C</button>
                       <button value='/' onClick={handleClick}  className='text-gray  bg-purple-400 w-20 h-20 rounded-full font-bold text-4xl flex justify-center items-center shadow'>/</button>
                       <button value='+' onClick={handleClick}  className='text-gray  bg-purple-400 w-20 h-40 rounded-full font-bold text-4xl flex justify-center items-center shadow row-span-2'>+</button>


                       <button value='7' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500/50 rounded-full font-bold text-3xl flex justify-center items-center shadow'>7</button> 
                       <button value='8' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500/50 rounded-full font-bold text-3xl flex justify-center items-center shadow'>8</button>
                       <button value='9' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500/50 rounded-full font-bold text-3xl flex justify-center items-center shadow'>9</button>

                       <button value='4' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500/50 rounded-full font-bold text-3xl flex justify-center items-center shadow'>4</button>
                       <button value='5' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500/50 rounded-full font-bold text-3xl flex justify-center items-center shadow'>5</button>
                       <button value='6' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500/50 rounded-full font-bold text-3xl flex justify-center items-center shadow'>6</button>
                       <button value='-' onClick={handleClick} className='text-gray  bg-purple-400 w-20 h-20 rounded-full font-bold text-4xl flex justify-center items-center shadow'>-</button>

                       <button value='1' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500/50 rounded-full font-bold text-3xl flex justify-center items-center shadow'>1</button>
                       <button value='2' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500/50 rounded-full font-bold text-3xl flex justify-center items-center shadow'>2</button>
                       <button value='3' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500/50 rounded-full font-bold text-3xl flex justify-center items-center shadow'>3</button>
                       <button value='*' onClick={handleClick} className='text-gray  bg-purple-400 w-20 h-20 rounded-full font-bold text-4xl flex justify-center items-center shadow'>*</button>
                  
                       <button value='.' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500/50 rounded-full font-bold text-4xl flex justify-center items-center shadow'>.</button>
                       <button value='0'  onClick={handleClick} className='text-white w-20 h-20 bg-gray-500/50 rounded-full font-bold text-3xl flex justify-center items-center shadow'>0</button>
                       <button  onClick={handleResult} className='text-gray  bg-white hover:bg-gray-200 w-42 h-20 rounded-full font-bold text-3xl flex justify-center items-center shadow col-span-2 '>=</button>
                       
                   </div>
                   

         </div>
    </section>
  )
}

export default Calculator
