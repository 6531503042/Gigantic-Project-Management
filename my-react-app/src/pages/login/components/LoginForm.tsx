// src/components/LoginForm.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useAuth } from '../../../hooks/useAuth';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginWithEmail, loginWithGoogle, loginWithGithub, error } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginWithEmail(email, password);
  };

  return (
    <div>
      <h3>Log in to your account.</h3>
      <div>
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <FontAwesomeIcon icon={faKey} />
        </div>
        {error && <div className="error">{error}</div>}
        <button onClick={handleLogin}>Login</button>
        <div>or</div>
        <div>
          <button onClick={loginWithGoogle}><FaGoogle /> Google</button>
          <button onClick={loginWithGithub}><FaGithub /> GitHub</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
