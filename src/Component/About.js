import React, { useContext } from 'react'
import { UserContext } from '../UserContext/UserContext'

export default function About() {
  //const msg = useContext(UserContext)
  const { user, setUser } = useContext(UserContext)
  
    return (
    <div>
        <h2>About</h2>
        {/* <div>{msg}</div> */}
        <div>{user}</div>
    </div>
  )
}
