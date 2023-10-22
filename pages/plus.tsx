import { NextPage } from 'next'
import { useState } from 'react'

interface Props {}

const Plus: NextPage<Props> = ({}) => {
    const [num, setNum] = useState(0)

  return <div>
    <h1 className='font-bold text-4xl'>Plus and Minus</h1>
    <p>Current value of num is: {num}</p>
    <button className='bg-red-700 px-6 rounded-lg' 
    onClick={() => {setNum(num + 1)}}>+</button>
    <button className='0 bg-blue-700  px-6 rounded-lg ml-6' 
    onClick={() => {setNum(num - 1)}}>-</button>
    
  </div>
}

export default Plus