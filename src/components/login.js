// src/components/Login.js
// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     // Perform static authentication (replace with your authentication logic)
//     if (username === 'user' && password === 'password') {
//       setError('');
//       onLogin(username);
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <div className="form-group">
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       {error && <p className="error">{error}</p>}
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
