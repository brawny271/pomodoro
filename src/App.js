import React, { useState } from 'react';
import Login from './components/Login';
import Timer from './components/Timer';
import BreakTimer from './components/BreakTimer';

import "../src/App.css"

import RegistrationForm from './components/RegisterForm';


function App() {

  const [user, setUser] = useState(null);
  const [showTimer, setShowTimer] = useState(false);
  const [ showBreakTimer, setBreakTimer ] = useState(false);


  const handleSignIn = () => {
    setUser({email: 'ashishpardeshi@google.com'});
    setShowTimer(true);
  };

  const handleSignOut = () => {
    setUser(null);
    setShowTimer(false);
    setBreakTimer(false);
  }

  const handleBreakComplete = () => {
    setShowTimer(true);
    setBreakTimer(false);
  }



  return (
    <div className="App">
    <header className="App-header">
      <Login user={user} onSignIn={handleSignIn} onSignOut={handleSignOut} />
      {user ? (
        <>
          {showTimer && (
            <Timer duration={1500} onBreakTimerComplete={handleBreakComplete} />
          )}
          {showBreakTimer && <BreakTimer />}
        </>
      ) : (
        <RegistrationForm />
      )}
    </header>
  </div>
  );
}

export default App;
