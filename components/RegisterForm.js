import React, { useState } from "react";
import { auth } from "../firebase";
import "../components/Register.css";

function RegistrationForm() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);


  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await userCredential.user.updateProfile({
        displayName: name,
      });

      setEmail("");
      setPassword("");
      setName("");
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };



  return (
    <div className="container">
      <h1>Register</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleRegistration}>
        <label>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
