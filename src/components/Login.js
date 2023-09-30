import React, { useState } from "react";
import { signInWithGoogle, signOut } from "../firebase";
import "../components/Login.css";

function Login({ user, onSignIn, onSignOut }){

  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      onSignIn();
    } catch (error) {
      console.log(error);
    }
  };


  const handleSignOut = async () => {
    try {
      await signOut();
      onSignOut();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="container">
      {user ? (
        <>
          <h1 className="userName">User: {user.email}</h1>
          <button className="signButton" onClick={handleSignOut}>
            Sign Out
          </button>
        </>
      ) : (
        <>
          <h1 className="Login">Login</h1>
          <button onClick={handleSignIn}>Sign In with Google</button>
        </>
      )}
    </div>
  );
}

export default Login;
