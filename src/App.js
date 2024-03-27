import './App.css';
import React,{ useState } from 'react';
import Nav from './Pages/Nav'                                                                                                                                                                                                                               

export const SignContext = React.createContext();

function App() {

  const [signedIn, setSignedIn] = useState(false)

  return (
    //Provide signedIn value to Nav -> Btn components

    <SignContext.Provider value={[signedIn, setSignedIn]}>   
      <Nav />
      <h1> {signedIn ? "Signed in" : "Signed out"} </h1>
    </SignContext.Provider>
  );
}

export default App;
