import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './dashboard';
import './style.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/dashboard');
    }
  });
  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem('user-info', JSON.stringify(result));
  }
  return (
    <div>
      <div>
        <div>
          <h3>Hello there, Sign in to continue</h3>

          <div>
            <form>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div></div>
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div></div>
              </div>
              <button onClick={login}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
