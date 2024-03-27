import React, { useContext, useState } from 'react'
import './new.css'
import { SignContext } from '../App'

export default function Btn() {

    const [signedIn, setSignedIn] = useContext(SignContext)

  return (
    <div className='header'>
         <button className='btn' onClick={() => setSignedIn(!signedIn)}>   {/*When click btn change signedin value as NOT signedin */}
            {signedIn ? 'Sign out' : 'Sign in'}
        </button>
    </div>
  )
}
