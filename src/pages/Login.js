import React, { useState } from 'react';



const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    console.log('Username:', username);
    console.log('Password:', password);
    
    setLoggedIn(true);
  };


  if (loggedIn) {
    return <h2>Welcome, {username}!</h2>;
  }


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
