import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './assets/login.css'; // Asegúrate de crear este archivo para estilos

const Registro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/usuarios/registro', { username, password });
      console.log('Usuario registrado:', response.data);
    } catch (error) {
      console.error('Error registrando usuario:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="register-username">Username</label>
          <input
            type="text"
            id="register-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="register-password">Password</label>
          <input
            type="password"
            id="register-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="register-button">Registrarse</button>
      </form>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/usuarios/login', { username, password });
      if (response.data) {
        console.log('Login exitoso');
        // Manejar la autenticación, como guardar un token JWT
      } else {
        console.log('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error iniciando sesión:', error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="app-name">TOM</h1>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="login-username">Username</label>
            <input
              type="text"
              id="login-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <a href="/forgot-password" className="forgot-password-link">Forgot my password</a>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export { Registro, Login };
