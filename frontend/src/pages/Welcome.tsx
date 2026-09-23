// Verify that the following React component is generated correctly
// and that all JSP/JSF pages are mapped to the corresponding React components
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login, register, welcome } from '../api/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password)
      .then((response) => {
        setSuccess(true);
        history.push('/welcome');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    register(username, password, passwordConfirm)
      .then((response) => {
        setSuccess(true);
        history.push('/welcome');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Login successful!</p>}
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { register, welcome } from '../api/auth';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    register(username, password, passwordConfirm)
      .then((response) => {
        setSuccess(true);
        history.push('/welcome');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Registration successful!</p>}
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Registration;
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { welcome } from '../api/auth';

const Welcome = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Thank you for logging in!</p>
      <Link to="/login">Logout</Link>
    </div>
  );
};

export default Welcome;
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { welcome } from '../api/auth';

const App = () => {
  const history = useHistory();

  return (
    <div>
      <h1>App</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/welcome">Welcome</Link>
    </div>
  );
};

export default App;