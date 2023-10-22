import { NextPage } from 'next'
import { useState } from 'react'

interface User {
    car: string,
    age: string,
    livesHome: boolean
}

const Spread: NextPage<User> = ({}) => {
    const [user, setUser] = useState<User>({
        car: "",
        age: "",
        livesHome: true
    });
    const [input, setInput] = useState("")
    const [inputTwo, setInputTwo] = useState("")
    
  return <div>
    <h1>Inputs</h1>
    <p>Current car: {input}</p>
    <p>Current age: {inputTwo}</p>
    <p>Lives at home: {user.livesHome}</p>
    <input type="text" name="" id="" placeholder='car...' 
    onChange={(event) => {setUser({
        ...user,
        car: event.target.value
    })}}/>
    <br />
    <input type="" placeholder='age...'
     onChange={(event) => {setUser({
        ...user,
        age: event.target.value
     })
}}/>
<br />
<button onClick={() => {setInput(user.car)
     setInputTwo(user.age)}}>Submit</button>
  </div>
}

export default Spread
