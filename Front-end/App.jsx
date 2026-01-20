import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", username, password);
  };

  return (
    <div className="login-container">
      {/* Left Side: Branding */}
      <div className="branding-side">
        <div className="logo-section">
          <div className="logo-icon">E</div>
          <h1>ERGIN HARDWARE</h1>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="form-side">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Log In</h2>
          <p>Enter your credentials to access your account</p>
          
          <div className="input-group">
            <label>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter your username"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-btn">LOG IN</button>
          
          <div className="form-footer">
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;