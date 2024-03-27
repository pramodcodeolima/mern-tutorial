import React,{ useContext } from 'react'
import { UserContext } from '../UserContext/UserContext'  //import make usercontext file

export default function Home() {
  //const msg = useContext(UserContext)     //get useContext value for msg variable
  const { user, setUser } = useContext(UserContext)   // get passed usercontext usestate value
  
  return (
    <div>
      <h2>Home</h2>
      {/* <div>{msg}</div> */}
      <div>{user}</div>
      
      <button onClick={() => setUser('Button Clicked')}>Change Value</button>
    </div>
  )
}
