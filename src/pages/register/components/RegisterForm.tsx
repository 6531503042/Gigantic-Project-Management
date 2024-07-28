// src/components/RegisterForm.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { FaGoogle, FaGithub, FaDiscord } from 'react-icons/fa';
import { useAuth } from '../../../hooks/useAuth';
const RegisterForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { registerWithEmail, loginWithGoogle, loginWithGithub, loginWithDiscord, error } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    await registerWithEmail(email, password);
  };

  return (
    <div>
      <h3>Create account for your own.</h3>
      <div>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <div>
          <FontAwesomeIcon icon={faUser} />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div>
          <FontAwesomeIcon icon={faKey} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <FontAwesomeIcon icon={faKey} />
        </div>
        <div>
          <FontAwesomeIcon icon={faUnlockKeyhole} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <FontAwesomeIcon icon={faUnlockKeyhole} />
        </div>
        {error && <div className="error">{error}</div>}
        <button onClick={handleRegister}>Register</button>
        <div>or</div>
        <div>
          <button onClick={loginWithGoogle}><FaGoogle /> Google</button>
          <button onClick={loginWithGithub}><FaGithub /> GitHub</button>
          <button onClick={loginWithDiscord}><FaDiscord /> Discord</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
