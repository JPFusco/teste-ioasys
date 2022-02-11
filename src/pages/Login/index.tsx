import './style.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoWhite from '../../assets/logo-white.svg';
import FeedbackLogin from '../../components/FeedbackLogin';
import useRequests from '../../hooks/useRequests';
import useGlobalContext from '../../hooks/useGlobalContext';

interface IFormLogin {
  email: string;
  senha: string;
}

function Login() {
  const [formLogin, setFormLogin] = useState<IFormLogin>({
    email: '',
    senha: '',
  });
  const [mensagemErro, setMensagemErro] = useState<string>('');
  const [feedbackLogin, setFeedbackLogin] = useState(false);
  const { login } = useRequests();
  const { setAuthToken, setNomeUsuarioLogado } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedbackLogin(false);
    const { response, data } = await login(formLogin);

    if (!response.ok) {
      setMensagemErro(data.errors.message);
      setFeedbackLogin(true);
      return;
    }

    const headers = response.headers as any;

    setNomeUsuarioLogado(data.name);
    setAuthToken(headers.Authorization);
    navigate('/home');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: [e.target.value],
    });
  };

  return (
    <div className="login-container">
      <div className="login-title">
        <img src={LogoWhite} alt="Logo ioasys" />
        <span>Books</span>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email-login">
          <span>Email</span>
          <input
            type="text"
            id="email-login"
            name="email"
            value={formLogin.email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="senha-login">
          <span>Senha</span>
          <input
            type="password"
            id="senha-login"
            name="senha"
            value={formLogin.senha}
            onChange={handleInputChange}
          />
          <button type="submit">Entrar</button>
        </label>
        {feedbackLogin && <FeedbackLogin message={mensagemErro} />}
      </form>
    </div>
  );
}

export default Login;
