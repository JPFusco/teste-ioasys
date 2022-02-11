import './style.css';
import LogoBlack from '../../assets/logo-black.svg';
import IconeLogout from '../../assets/icone-logout.svg';

function Header() {
  const usuarioLogado = { nome: 'Guilherme' };

  return (
    <div className="header-container">
      <div className="header-left">
        <img src={LogoBlack} alt="Logo ioasys" />
        <span>Books</span>
      </div>
      <div className="header-right">
        <span>
          Bem vindo,
          {' '}
          <strong>
            {usuarioLogado.nome}
            !
          </strong>
        </span>
        <img src={IconeLogout} alt="Logout" />
      </div>
    </div>
  );
}

export default Header;
