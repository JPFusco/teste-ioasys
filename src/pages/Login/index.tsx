import './style.css';
import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import FeedbackLogin from '../../components/FeedbackLogin';

function Login() {
  const [feedbackLogin, setFeedbackLogin] = useState(true);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedbackLogin(!feedbackLogin);
  };

  return (
    <div className="login-container">
      <div className="login-title">
        <img src={Logo} alt="Logo ioasys" />
        <span>Books</span>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email-login">
          <span>Email</span>
          <input type="text" id="email-login" />
        </label>
        <label htmlFor="senha-login">
          <span>Senha</span>
          <input type="password" id="senha-login" />
          <button type="submit">Entrar</button>
        </label>
        {feedbackLogin && <FeedbackLogin />}
      </form>
    </div>
  );
}

export default Login;
