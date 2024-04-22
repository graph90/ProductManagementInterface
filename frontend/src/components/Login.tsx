import React, { useState } from 'react';

const Login: React.FC = () => {
  // State to manage form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic to handle form submission (e.g., authentication)
    console.log('Username:', username);
    console.log('Password:', password);

    // Example navigation logic
    // Replace this with your actual navigation logic
    if (username === 'admin' && password === 'admin') {
      // Redirect to the product list page
      window.location.href = '/products';
    } else {
      // Redirect to the login page (or display an error message)
      window.location.href = '/login';
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
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
