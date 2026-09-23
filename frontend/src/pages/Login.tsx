// React component for the welcome page
import React, { useState } from 'react';
import { Link, Button } from 'react-router-dom';

const Welcome = () => {
  const [docs, setDocs] = useState([]);

  const handleLogin = () => {
    // Implement login logic here
  };

  const handleRegister = () => {
    // Implement registration logic here
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <ul>
        {docs.map((doc, index) => (
          <li key={index}>
            <Link to={`/docs/${doc.id}`}>{doc.title}</Link>
          </li>
        ))}
      </ul>
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleRegister}>Register</Button>
    </div>
  );
};

export default Welcome;
// React component for the login page
import React, { useState } from 'react';
import { Link, Button } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement login logic here
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
// React component for the registration page
import React, { useState } from 'react';
import { Link, Button } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    // Implement registration logic here
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleRegister}>
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
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Registration;
// React component for the welcome page with docs list
import React, { useState, useEffect } from 'react';
import { Link, Button } from 'react-router-dom';

const Welcome = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    fetch('/api/docs')
      .then((response) => response.json())
      .then((data) => setDocs(data));
  }, []);

  return (
    <div>
      <h1>Welcome!</h1>
      <ul>
        {docs.map((doc, index) => (
          <li key={index}>
            <Link to={`/docs/${doc.id}`}>{doc.title}</Link>
          </li>
        ))}
      </ul>
      <Button>Get Docs</Button>
    </div>
  );
};

export default Welcome;
// React component for the login page with CSRF token
import React, { useState, useEffect } from 'react';
import { Link, Button } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    fetch('/api/csrf')
      .then((response) => response.json())
      .then((data) => setCsrfToken(data.token));
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement login logic here
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        <label>
          CSRF Token:
          <input type="hidden" value={csrfToken} />
        </label>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
// React component for the registration page with CSRF token
import React, { useState, useEffect } from 'react';
import { Link, Button } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    fetch('/api/csrf')
      .then((response) => response.json())
      .then((data) => setCsrfToken(data.token));
  }, []);

  const handleRegister = (event) => {
    event.preventDefault();
    // Implement registration logic here
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleRegister}>
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
        <label>
          CSRF Token:
          <input type="hidden" value={csrfToken} />
        </label>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Registration;
// React component for the welcome page with docs list and CSRF token
import React, { useState, useEffect } from 'react';
import { Link, Button } from 'react-router-dom';

const Welcome = () => {
  const [docs, setDocs] = useState([]);
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    fetch('/api/docs')
      .then((response) => response.json())
      .then((data) => setDocs(data));
  }, []);

  useEffect(() => {
    fetch('/api/csrf')
      .then((response) => response.json())
      .then((data) => setCsrfToken(data.token));
  }, []);

  return (
    <div>
      <h1>Welcome!</h1>
      <ul>
        {docs.map((doc, index) => (
          <li key={index}>
            <Link to={`/docs/${doc.id}`}>{doc.title}</Link>
          </li>
        ))}
      </ul>
      <Button>Get Docs</Button>
      <label>
        CSRF Token:
        <input type="hidden" value={csrfToken} />
      </label>
    </div>
  );
};

export default Welcome;